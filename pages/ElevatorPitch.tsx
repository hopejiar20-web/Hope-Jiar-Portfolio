import React from 'react';
import { Play } from 'lucide-react';

const ElevatorPitch: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6 text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 tracking-tight">Elevator Pitch</h1>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              Hello! I'm Hope Jiar. In this short video, I share my journey from Mathematics and Financial Economics to Data Analytics, and how I help organizations make data-driven decisions.
            </p>
        </div>

        <div className="w-full max-w-4xl mx-auto relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <div className="aspect-video w-full bg-zinc-900 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl shadow-zinc-200/50 group border border-zinc-800">
                {/* Placeholder content */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950"></div>
                
                <div className="relative z-20 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 cursor-not-allowed">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                    <p className="text-zinc-400 font-medium text-sm">Video recording in progress</p>
                </div>

                {/* Faux progress bar for aesthetic */}
                <div className="absolute bottom-6 left-6 right-6 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-white/50"></div>
                </div>
             </div>
             
             <div className="mt-8 flex justify-center">
                 <span className="inline-block px-4 py-2 bg-zinc-100 rounded-lg text-xs font-semibold text-zinc-600">
                    Coming Soon
                 </span>
             </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorPitch;