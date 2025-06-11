import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

// Linear interpolation function for smooth easing
function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

const App = () => {
  // Start at center of screen
  const initial = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const [sphere, setSphere] = useState(initial);
  const mouse = useRef(initial);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrame;
    const animate = () => {
      setSphere((prev) => ({
        x: lerp(prev.x, mouse.current.x, 0.15),
        y: lerp(prev.y, mouse.current.y, 0.15),
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-richblack font-display">
      <Navbar />
      {/* Neon Emerald Green Sphere (smaller and solid) */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: sphere.x - 7,
          top: sphere.y - 7,
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: '#00FFA3',
          boxShadow: '0 0 16px 4px #00FFA388',
          transition: 'none',
        }}
      />

      {/* Abstract glowing gradient blobs (right side, layered, animated) */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          right: '-12vw',
          top: '8vh',
          width: '38vw',
          height: '38vw',
          background: 'radial-gradient(circle at 70% 30%, #A259FF88 0%, #A259FF00 70%)',
          filter: 'blur(80px)',
          opacity: 0.7,
          animation: 'blobPulse1 7s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute z-0"
        style={{
          right: '-6vw',
          top: '38vh',
          width: '30vw',
          height: '30vw',
          background: 'radial-gradient(circle at 40% 60%, #00FFA388 0%, #00FFA300 70%)',
          filter: 'blur(100px)',
          opacity: 0.6,
          animation: 'blobPulse2 9s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute z-0"
        style={{
          right: '0vw',
          bottom: '-10vw',
          width: '28vw',
          height: '28vw',
          background: 'radial-gradient(circle at 60% 80%, #00FFFF77 0%, #00FFFF00 80%)',
          filter: 'blur(90px)',
          opacity: 0.5,
          animation: 'blobPulse3 11s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute z-0"
        style={{
          right: '-8vw',
          bottom: '6vh',
          width: '20vw',
          height: '20vw',
          background: 'radial-gradient(circle at 50% 50%, #A259FF55 0%, #A259FF00 80%)',
          filter: 'blur(70px)',
          opacity: 0.4,
          animation: 'blobPulse4 13s ease-in-out infinite',
        }}
      />

      {/* Keyframes for subtle pulsing animation */}
      <style>
        {`
          @keyframes blobPulse1 {
            0%, 100% { transform: scale(1) translateY(0px);}
            50% { transform: scale(1.08) translateY(12px);}
          }
          @keyframes blobPulse2 {
            0%, 100% { transform: scale(1) translateY(0px);}
            50% { transform: scale(0.95) translateY(-18px);}
          }
          @keyframes blobPulse3 {
            0%, 100% { transform: scale(1) translateX(0px);}
            50% { transform: scale(1.10) translateX(-16px);}
          }
          @keyframes blobPulse4 {
            0%, 100% { transform: scale(1) translateY(0px);}
            50% { transform: scale(1.04) translateY(10px);}
          }
        `}
      </style>

      {/* Main content */}
      <main className="relative z-20 flex flex-col items-start justify-center h-full w-full px-8 md:px-24">
        <span className="text-emerald text-lg md:text-xl mb-2 flex items-center gap-2 font-semibold tracking-wide">
          <span className="inline-block w-4 h-4 bg-emerald rounded-full mr-2 shadow-[0_0_8px_2px_#00FFA3]" /> Hello, I am Karina
        </span>
        <h1 className="text-white font-bold text-4xl md:text-7xl mb-4 leading-tight drop-shadow-[0_2px_24px_#A259FF99]">
          AI &amp; Software Developer
        </h1>
        <p className="text-body text-lg md:text-2xl mb-10 max-w-2xl">
          I build modern, performant web experiences with a focus on design, accessibility, and delightful microinteractions.
        </p>
        <div className="flex gap-6 mt-4">
          <a
            href="/src/assets/Resume_Karina.pdf"
            download
            className="px-8 py-4 rounded-lg bg-emerald text-richblack font-semibold shadow-lg hover:bg-cyberpurple hover:text-white transition-all duration-200 text-lg backdrop-blur-md border-2 border-emerald"
          >
            Download CV
          </a>
          <a
            href="#"
            className="px-8 py-4 rounded-lg border-2 border-cyberpurple text-cyberpurple font-semibold hover:bg-cyberpurple hover:text-white transition-all duration-200 text-lg backdrop-blur-md"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-16 flex items-center gap-2 text-muted text-base">
          <svg width="20" height="20" fill="none" className="inline-block"><rect width="20" height="20" rx="5" fill="#A259FF" fillOpacity="0.2"/><rect x="8" y="4" width="4" height="12" rx="2" fill="#A259FF" /></svg>
          Scroll
        </div>
      </main>
    </div>
  );
};

export default App;
