import React, { useState, useEffect } from 'react';

export default function FeaturesDark() {
  const cards = [
    {
      title: "Procedural Knowledge",
      description: "Each package is designed to enhance the reasoning and execution capabilities of AI agents, not just provide generic documentation."
    },
    {
      title: "Strict SKILL.md Structure",
      description: "Every skill follows a strict structure including explicit purposes, hard rules, known failure modes, and verification checklists."
    },
    {
      title: "Context Loading",
      description: "Easily add relevant skill directories to your agent's context window to enforce high-quality engineering standards immediately."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section id="features" className="w-full bg-brand-darkBg text-white py-32 px-6 my-20 rounded-[3rem] mx-auto max-w-[95%] relative overflow-hidden flex flex-col md:flex-row items-center justify-center min-h-[600px]">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-navy to-brand-darkBg opacity-50 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left Side: Large Text */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <h2 className="text-5xl md:text-7xl font-black mb-8 md:mb-0 uppercase tracking-wide leading-tight text-center md:text-left">
            BUILT FOR <br/>
            <span className="text-brand-orange">AGENTS.</span>
          </h2>
        </div>

        {/* Right Side: Rotating Collage Card */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative h-[350px]">
          {cards.map((card, index) => {
            // Determine relative position
            const offset = (index - activeIndex + cards.length) % cards.length;

            // Calculate styles based on offset
            // 0 is active (front), 1 is next (bottom right), 2 is prev (top left behind)
            let zIndex = 10;
            let transform = 'translate(0, 0) scale(1) rotate(0deg)';
            let opacity = 1;

            if (offset === 0) {
              zIndex = 30;
              transform = 'translate(0, 0) scale(1) rotate(0deg)';
              opacity = 1;
            } else if (offset === 1) {
              zIndex = 20;
              transform = 'translate(20px, 20px) scale(0.95) rotate(3deg)';
              opacity = 0.7;
            } else if (offset === 2) {
              zIndex = 10;
              transform = 'translate(-20px, -20px) scale(0.9) rotate(-3deg)';
              opacity = 0.5;
            }

            return (
              <div
                key={index}
                className="absolute w-full max-w-[400px] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-2xl transition-all duration-700 ease-in-out"
                style={{
                  zIndex,
                  transform,
                  opacity
                }}
              >
                <div className="h-1 w-12 bg-brand-orange mb-6 rounded-full"></div>
                <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-gray-200 leading-relaxed text-base">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
