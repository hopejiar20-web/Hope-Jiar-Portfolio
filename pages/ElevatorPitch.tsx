import React from 'react';

const ElevatorPitch: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6 text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 tracking-tight">Who I am and what I do best</h1>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              Hello! I'm Hope Jiar. In this short video, I share my journey from Mathematics and Financial Economics to Data Analytics, and how I help organizations make data-driven decisions.
            </p>
        </div>

        <div className="w-full max-w-4xl mx-auto relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <div className="aspect-video w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-xl shadow-zinc-200/50 border border-zinc-800">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/-0mnUU3ZF50"
                  title="Who I am and what I do best"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
             </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorPitch;