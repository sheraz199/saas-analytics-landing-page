import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-1">
              <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                Nexus<span className="text-emerald-400">Analytics</span>
              </span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Log in</button>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold py-2 px-5 rounded-full transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
            >
              <svg className="w-6 h-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full left-0 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a 
              href="#features" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Pricing
            </a>
            <button className="w-full text-left block px-3 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
              Log in
            </button>
            <button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-base font-bold py-3 px-5 rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;