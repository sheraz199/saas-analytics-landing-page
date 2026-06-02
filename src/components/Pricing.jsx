import { useState, useRef } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small projects and solo developers.",
      priceMonthly: 19, priceYearly: 15,
      features: ["Up to 5 projects", "Real-time analytics", "24-hr retention", "Community support"],
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Engineered for growing teams and scaling startups.",
      priceMonthly: 49, priceYearly: 39,
      features: ["Unlimited projects", "Advanced AI analytics", "30-day retention", "Priority 24/7 support", "API integration"],
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale operations requiring max power.",
      priceMonthly: 99, priceYearly: 79,
      features: ["Custom infrastructure", "Dedicated AI models", "Unlimited retention", "Dedicated manager", "SLA guarantees"],
      isPopular: false,
    }
  ];

  // Tracks physical swiping
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.clientWidth;
      const currentIndex = Math.round(scrollPosition / cardWidth);
      setActiveCardIndex(currentIndex);
    }
  };

  // NEW: Clicks the dot and scrolls to the card smoothly
  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveCardIndex(index);
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Transparent <span className="text-emerald-400">pricing.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-400">
            Save 20% when billed annually. 
          </p>

          <div className="mt-8 flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-slate-800 rounded-full p-1 transition-colors duration-300 relative focus:outline-none border border-slate-700"
            >
              <div className={`w-6 h-6 bg-emerald-500 rounded-full transition-transform duration-300 shadow-md ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-slate-500'}`}>Yearly</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-stretch max-w-5xl mx-auto -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center shrink-0 bg-slate-900/40 border rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.15)] md:scale-105 z-10' : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[10px] md:text-xs font-black px-3 md:px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-xs md:text-sm mb-6 min-h-[40px]">{plan.description}</p>
                <div className="flex items-baseline text-white mb-6 md:mb-8">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    ${isYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-slate-500 text-xs md:text-sm font-medium ml-2">/month</span>
                </div>
                <ul className="space-y-3 md:space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 md:space-x-3 text-xs md:text-sm text-slate-300">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full py-3 px-4 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${plan.isPopular ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-white'}`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* FIXED: Clickable Pagination Dots */}
        <div className="flex md:hidden justify-center items-center space-x-3 mt-4">
          {plans.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to pricing plan ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                activeCardIndex === idx 
                  ? 'w-8 bg-emerald-500' 
                  : 'w-2.5 bg-slate-700 hover:bg-slate-600'
              }`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;