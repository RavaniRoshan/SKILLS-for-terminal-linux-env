import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-4xl px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg">
        <div className="flex items-center gap-2">
          <div className="text-brand-orange text-xl font-black italic tracking-tighter">
            skill<span className="text-brand-navy"> ai</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="#features" className="text-brand-navy font-medium hover:text-brand-orange transition-colors text-sm">features</a>
          <a href="#usage" className="text-brand-navy font-medium hover:text-brand-orange transition-colors text-sm">usage</a>
          <a href="https://github.com/RavaniRoshan/SKILLS-for-terminal-linux-env/tree/master" target="_blank" rel="noopener noreferrer" className="text-brand-navy font-medium hover:text-brand-orange transition-colors text-sm">github</a>
        </div>
      </nav>
    </div>
  );
}
