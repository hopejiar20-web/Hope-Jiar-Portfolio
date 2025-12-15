import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-heading font-bold text-xl text-zinc-900 mb-2">HOPE JIAR</span>
            <div className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Hope Jiar. All rights reserved.
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/hope-jiar-7721b6361" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-zinc-50 rounded-full text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors" 
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-zinc-50 rounded-full text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:hopejiar20@gmail.com" className="p-2 bg-zinc-50 rounded-full text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;