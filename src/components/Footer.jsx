import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  // --- Typewriter Logic Setup ---
  const [placeholderText, setPlaceholderText] = useState('');
  const fullText = "Enter your work email...";
  
  // Create a reference to detect when the form enters the screen
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-50px" });

  useEffect(() => {
    // Only start typing when the form actually scrolls into view
    if (isFormInView) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setPlaceholderText(fullText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80); // Speed: 80ms per letter

      return () => clearInterval(typingInterval);
    }
  }, [isFormInView]);

  // --- General Footer Animations ---
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 md:pt-20 pb-8 md:pb-10 relative overflow-hidden">
      
      {/* Top Animated CTA Banner */}
      <motion.div 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 md:mb-20"
      >
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-emerald-500/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
          
          <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-4 md:mb-6 relative z-10 leading-tight">
            Ready to transform your <span className="text-emerald-400">data?</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto mb-6 md:mb-10 relative z-10 px-2 md:px-0">
            Join thousands of engineers and forward-thinking companies building the future with real-time analytics.
          </p>
          
          {/* Typewriter Form */}
          <form 
            ref={formRef} 
            className="max-w-md mx-auto relative z-10 flex flex-col sm:flex-row gap-2 md:gap-3 w-full" 
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              // Dynamic placeholder bound to our React state
              placeholder={placeholderText} 
              className="flex-1 w-full bg-slate-950/50 border border-slate-700 text-white px-4 md:px-5 py-3 md:py-3.5 rounded-xl sm:rounded-full focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm md:text-base transition-colors"
              required
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit" 
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 md:py-3.5 px-6 md:px-8 rounded-xl sm:rounded-full transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] text-sm md:text-base whitespace-nowrap"
            >
              Get Started
            </motion.button>
          </form>
        </div>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* BRAND SECTION */}
        <motion.div variants={fadeUpVariant} className="flex flex-col items-center text-center w-full mb-10 md:mb-14">
          <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3 md:mb-4 inline-block">
            Nexus<span className="text-emerald-400">Analytics</span>
          </span>
          <p className="text-slate-400 text-xs md:text-sm max-w-sm mb-6 px-4">
            The modern data infrastructure platform built for scale, speed, and absolute clarity.
          </p>
          <div className="flex space-x-6 text-slate-500 justify-center">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
          </div>
        </motion.div>

        {/* LINKS SECTION */}
        <motion.div variants={fadeUpVariant} className="grid grid-cols-3 gap-x-2 sm:gap-x-8 max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="col-span-1 text-center sm:text-left">
            <h4 className="text-white font-bold text-xs sm:text-sm md:text-base mb-3 md:mb-4">Product</h4>
            <ul className="space-y-3 text-[11px] sm:text-xs md:text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div className="col-span-1 text-center sm:text-left">
            <h4 className="text-white font-bold text-xs sm:text-sm md:text-base mb-3 md:mb-4">Resources</h4>
            <ul className="space-y-3 text-[11px] sm:text-xs md:text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div className="col-span-1 text-center sm:text-left">
            <h4 className="text-white font-bold text-xs sm:text-sm md:text-base mb-3 md:mb-4">Company</h4>
            <ul className="space-y-3 text-[11px] sm:text-xs md:text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Legal</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright Bar */}
        <motion.div variants={fadeUpVariant} className="pt-6 md:pt-8 border-t border-slate-800 text-center md:text-left text-xs md:text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>© 2026 NexusAnalytics Inc. All rights reserved.</p>
          <div className="flex space-x-2 items-center bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] md:text-xs text-slate-400 font-medium tracking-wide">All systems operational</span>
          </div>
        </motion.div>
        
      </motion.div>
    </footer>
  );
};

export default Footer;