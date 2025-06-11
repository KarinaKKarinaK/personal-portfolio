import React, { useState } from 'react';
import LogoK from './LogoK';

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);

  return (
    <nav className="fixed left-0 w-full z-30 backdrop-blur-md" style={{ top: '2.5rem' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-1 md:px-4 py-4">
        {/* Logo as Home Button */}
        <a
          href="/"
          className="flex items-center focus:outline-none"
          aria-label="Home"
        >
          <LogoK />
        </a>
        {/* Nav Links */}
        <div className="hidden md:flex gap-12">
          {navLinks.map((link, idx) => (
            <div key={link.name} className="relative flex flex-col items-center">
              <a
                href={link.href}
                className="!text-white !font-semibold text-lg tracking-wide transition-colors duration-200"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onMouseDown={() => setActive(idx)}
                onMouseUp={() => setActive(null)}
                tabIndex={0}
              >
                {link.name}
              </a>
              {(hovered === idx || active === idx) && (
                <span
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full z-10"
                  style={{
                    background: hovered === idx
                      ? '#00FFA3'
                      : '#A259FF',
                    transition: 'background 0.2s',
                  }}
                />
              )}
            </div>
          ))}
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
};

export default Navbar;