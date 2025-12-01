import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, BrainCircuit } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) => 
    `text-lg font-medium transition-colors ${isActive ? 'text-indigo-600 font-bold' : 'text-slate-600 hover:text-indigo-600'}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="bg-indigo-600 text-white p-1.5 rounded-lg group-hover:bg-indigo-700 transition">
            <BrainCircuit size={24} />
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">Everyday AI</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/education" className={navClass}>Educating</NavLink>
          <NavLink to="/application" className={navClass}>Application</NavLink>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-4 flex flex-col gap-4 shadow-lg absolute w-full">
          <NavLink to="/" className={navClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/education" className={navClass} onClick={() => setIsMenuOpen(false)}>Educating</NavLink>
          <NavLink to="/application" className={navClass} onClick={() => setIsMenuOpen(false)}>Application</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;