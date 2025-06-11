import React from 'react';

const LogoK = () => (
  <span className="text-cyberpurple font-extrabold text-3xl select-none" style={{ fontFamily: 'inherit' }}>
    K
  </span>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur-md">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
      {/* Logo */}
      <LogoK />
      {/* Nav Links */}
      <div className="hidden md:flex gap-8">
        <a href="#work" className="text-white/80 hover:text-white transition">Work</a>
        <a href="#about" className="text-white/80 hover:text-white transition">About</a>
        <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
      </div>
      {/* Hamburger for mobile (optional, not functional yet) */}
      <button className="md:hidden text-white/80 hover:text-white">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <rect x="4" y="7" width="16" height="2" rx="1" fill="currentColor"/>
          <rect x="4" y="15" width="16" height="2" rx="1" fill="currentColor"/>
        </svg>
      </button>
    </div>
  </nav>
);

export default Navbar;