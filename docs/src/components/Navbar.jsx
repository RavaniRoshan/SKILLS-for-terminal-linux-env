import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="text-brand-orange text-2xl font-black italic tracking-tighter">
          SKILLS<span className="text-brand-navy">.AI</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <a href="#features" className="text-brand-text font-medium hover:text-brand-orange transition-colors">Features</a>
        <a href="#usage" className="text-brand-text font-medium hover:text-brand-orange transition-colors">Usage</a>
        <a href="https://github.com" className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg">
          View GitHub
        </a>
      </div>
    </nav>
  );
}
