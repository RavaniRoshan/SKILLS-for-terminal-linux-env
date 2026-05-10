import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center pt-32 pb-12 relative overflow-hidden bg-white">
      {/* Footer background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#FF5A36 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo/Icon */}
        <div className="w-24 h-24 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center mb-8 relative">
          <div className="absolute inset-2 border border-dashed border-brand-orange/30 rounded-full"></div>
          <div className="text-brand-orange font-black text-2xl italic">SK</div>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-brand-navy uppercase tracking-tight mb-8">
          READY TO <span className="text-brand-orange">UNLOCK</span><br/>YOUR TERMINAL?
        </h2>

        <p className="text-brand-subtext text-sm mb-12 max-w-md">
          Join thousands of developers automating their Linux environments with pure agentic skills.
        </p>

        <a href="https://github.com" className="bg-brand-navy hover:bg-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          View Repository
        </a>
      </div>

      <div className="mt-32 w-full border-t border-gray-100 flex flex-col md:flex-row items-center justify-between px-8 py-6 relative z-10 text-xs text-gray-400">
        <p>© 2024 AI Skills Project. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-orange transition-colors">Documentation</a>
          <a href="#" className="hover:text-brand-orange transition-colors">License</a>
        </div>
      </div>
    </footer>
  );
}
