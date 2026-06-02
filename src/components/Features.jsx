import { motion } from 'framer-motion';

const Features = () => {
  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Everything you need to scale, <br className="hidden sm:inline"/>
            <span className="text-emerald-400">nothing you don't.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-400">
            A comprehensive suite of tools engineered for performance and absolute clarity.
          </p>
        </motion.div>

        {/* The Animated Staggered Grid */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 auto-rows-[minmax(180px,auto)] md:auto-rows-[minmax(250px,auto)]"
        >
          {/* Card 1 */}
          <motion.div variants={cardVariants} whileHover={{ scale: 1.02 }} className="col-span-1 md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl md:rounded-3xl p-4 sm:p-8 hover:border-emerald-500/30 transition-colors group relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-emerald-500/5 rounded-full blur-[40px] md:blur-[80px]"></div>
            <div className="h-8 w-8 md:h-12 md:w-12 bg-slate-800 text-emerald-400 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6 border border-slate-700 shrink-0">
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-sm sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 leading-tight">Real-Time Data</h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-md">
              Ingest millions of data points per second with zero latency across the globe.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }} className="col-span-1 md:col-span-1 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl md:rounded-3xl p-4 sm:p-8 hover:border-blue-500/30 transition-colors group relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px]"></div>
            <div className="h-8 w-8 md:h-12 md:w-12 bg-slate-800 text-blue-400 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6 border border-slate-700 shrink-0">
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 className="text-sm sm:text-xl font-bold text-white mb-2 md:mb-3 leading-tight">Security</h3>
            <p className="text-xs sm:text-sm text-slate-400">Bank-grade AES-256 encryption.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }} className="col-span-1 md:col-span-1 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl md:rounded-3xl p-4 sm:p-8 hover:border-amber-500/30 transition-colors group relative overflow-hidden flex flex-col justify-center">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[40px]"></div>
            <div className="h-8 w-8 md:h-12 md:w-12 bg-slate-800 text-amber-400 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6 border border-slate-700 shrink-0">
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            </div>
            <h3 className="text-sm sm:text-xl font-bold text-white mb-2 md:mb-3 leading-tight">Export</h3>
            <p className="text-xs sm:text-sm text-slate-400">Instant PDF & CSV reports.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={cardVariants} whileHover={{ scale: 1.02 }} className="col-span-1 md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl md:rounded-3xl p-4 sm:p-8 hover:border-teal-500/30 transition-colors group relative overflow-hidden flex flex-col justify-center">
             <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-[40px]"></div>
            <div className="h-8 w-8 md:h-12 md:w-12 bg-slate-800 text-teal-400 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6 border border-slate-700 shrink-0">
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
            </div>
            <h3 className="text-sm sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 leading-tight">API Integrations</h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-md">
              Connect via GraphQL to pull custom metrics into your proprietary software.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Features;