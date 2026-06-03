import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden min-h-[90vh] flex items-center justify-center">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-emerald-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-6 md:mb-8">
            <span className="flex h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-slate-300 tracking-wide">Introducing Nexus Analytics 2.0</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight md:leading-none max-w-4xl mx-auto mb-4 md:mb-6">
            Analyze your data in <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              real-time with AI.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2 md:px-0">
            Stop digging through messy spreadsheets. Seamlessly monitor infrastructure, track key metrics, and optimize workflows with automation designed for modern teams.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-20 px-4 sm:px-0">
            <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 md:py-3.5 px-6 md:px-8 rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 font-medium py-3 md:py-3.5 px-6 md:px-8 rounded-full transition-colors">
              Watch Demo Video
            </button>
          </motion.div>
        </motion.div>

        {/* FIXED: Dashboard Grid logic changed to force 2 columns on all views */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="relative mx-auto max-w-4xl rounded-xl md:rounded-2xl border border-slate-800 bg-slate-950/60 p-2 md:p-4 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-sm"
        >
          <div className="flex items-center justify-between border-b border-slate-900 pb-2 md:pb-3 mb-3 md:mb-4 px-2">
            <div className="flex space-x-1.5 md:space-x-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-rose-500/40"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-500/40"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-500/40"></div>
            </div>
            <div className="text-[10px] md:text-xs text-slate-600 font-mono bg-slate-900/50 px-2 md:px-4 py-0.5 rounded border border-slate-800/40 truncate max-w-[150px] md:max-w-none">
              nexus-analytics/main
            </div>
            <div className="w-8 md:w-12"></div>
          </div>

          {/* Grid is now strictly grid-cols-2 */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 text-left">
            <div className="col-span-2 bg-slate-900/40 border border-slate-900 rounded-lg md:rounded-xl p-4 md:p-6">
              <span className="text-[10px] md:text-xs font-semibold text-slate-500 tracking-wider uppercase">Active Influx Rate</span>
              <div className="text-2xl md:text-4xl font-bold text-white mt-1">94.2k <span className="text-sm font-normal text-slate-500">/sec</span></div>
              <div className="w-full bg-slate-800 h-1.5 md:h-2 rounded-full mt-3 md:mt-5 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "78%" }} transition={{ duration: 1.5, delay: 1.2 }} className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full"></motion.div>
              </div>
            </div>
            <div className="col-span-1 bg-slate-900/40 border border-slate-900 rounded-lg md:rounded-xl p-3 md:p-5">
              <span className="text-[10px] md:text-xs font-semibold text-slate-500 tracking-wider uppercase">Load</span>
              <div className="text-xl md:text-3xl font-bold text-emerald-400 mt-1">Optimal</div>
              <div className="w-full bg-slate-800 h-1 md:h-1.5 rounded-full mt-2 md:mt-4 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "12%" }} transition={{ duration: 1.5, delay: 1.4 }} className="bg-emerald-400 h-full rounded-full animate-pulse"></motion.div>
              </div>
            </div>
            <div className="col-span-1 bg-slate-900/40 border border-slate-900 rounded-lg md:rounded-xl p-3 md:p-5">
              <span className="text-[10px] md:text-xs font-semibold text-slate-500 tracking-wider uppercase">Triggers</span>
              <div className="text-xl md:text-3xl font-bold text-white mt-1">1,482</div>
              <div className="w-full bg-slate-800 h-1 md:h-1.5 rounded-full mt-2 md:mt-4 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "55%" }} transition={{ duration: 1.5, delay: 1.6 }} className="bg-gradient-to-r from-teal-400 to-blue-500 h-full rounded-full"></motion.div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;