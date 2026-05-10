import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillNodes from './components/SkillNodes';
import StepCards from './components/StepCards';
import FeaturesDark from './components/FeaturesDark';
import DashboardMockup from './components/DashboardMockup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-page min-h-screen font-sans antialiased text-brand-text relative selection:bg-brand-orange selection:text-white">
      {/* Background radial gradient at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(255,90,54,0.08)_0%,rgba(248,249,250,0)_70%)] pointer-events-none"></div>

      <Navbar />

      <main>
        <Hero />

        {/* Connection line between Hero and Nodes */}
        <div className="w-full flex justify-center py-8">
          <div className="w-px h-24 bg-gradient-to-b from-brand-orange/10 to-brand-orange/30"></div>
        </div>

        <SkillNodes />
        <StepCards />
        <FeaturesDark />
        <DashboardMockup />
      </main>

      <Footer />
    </div>
  );
}

export default App;
