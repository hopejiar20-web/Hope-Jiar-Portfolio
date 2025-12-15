import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Database, Linkedin } from 'lucide-react';
import { NavItem } from '../types';
import Button from './Button';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Elevator Pitch', path: '/elevator-pitch' },
  { label: 'Portfolio', path: '/portfolio' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-2 font-heading font-bold text-xl tracking-wide text-zinc-900">
              <span className="bg-zinc-900 text-white p-1 rounded-md"><Database className="w-4 h-4" /></span>
              <span>HOPE JIAR</span>
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-black ${
                      isActive
                        ? 'text-black font-semibold'
                        : 'text-zinc-500'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-3 pl-2">
              <a 
                href="https://www.linkedin.com/in/hope-jiar-7721b6361"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#0077b5] transition-colors p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <span className="h-4 w-px bg-zinc-200"></span>
              <Button onClick={() => navigate('/contact')} className="rounded-full px-6 text-sm">
                Book a call
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-500 hover:text-black hover:bg-zinc-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-b border-zinc-200`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-black bg-zinc-100'
                    : 'text-zinc-500 hover:text-black hover:bg-zinc-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
           <div className="pt-4 flex flex-col gap-3">
            <a 
               href="https://www.linkedin.com/in/hope-jiar-7721b6361"
               target="_blank"
               rel="noopener noreferrer" 
               className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md text-base font-medium text-zinc-500 hover:text-[#0077b5] hover:bg-zinc-50 border border-zinc-100 transition-colors"
             >
                <Linkedin className="w-5 h-5" /> Connect on LinkedIn
             </a>
            <Button onClick={() => { navigate('/contact'); setIsOpen(false); }} className="w-full justify-center rounded-full">
                Book a call
            </Button>
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;