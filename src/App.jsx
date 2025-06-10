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
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <Navbar />
      {/* Lagging black sphere */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: sphere.x - 10,
          top: sphere.y - 10,
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: 'black',
          boxShadow: '0 0 16px 4px rgba(0,0,0,0.2)',
          transition: 'none',
        }}
      />
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-blue-700 to-black" />

      {/* Frosted glass abstract shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-white/10 backdrop-blur-2xl blur-2xl z-10" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/20 backdrop-blur-2xl blur-2xl z-10" />
      <div className="absolute top-[30%] left-[60%] w-[20vw] h-[20vw] rounded-full bg-purple-400/20 backdrop-blur-2xl blur-2xl z-10" />

      {/* Main content */}
      <main className="relative z-20 flex flex-col items-start justify-center h-full w-full px-8 md:px-24">
        <span className="text-white/80 text-lg md:text-xl mb-2 flex items-center gap-2">
          <span className="inline-block w-4 h-4 bg-white/40 rounded mr-2" /> Hello, I am Karina
        </span>
        <h1 className="text-white font-bold text-4xl md:text-7xl mb-4 leading-tight">
          AI &amp; Software Developer <br className="hidden md:block" /> 
        </h1>
        <div className="flex gap-6 mt-8">
          <a
            href="/src/assets/Resume_Karina.pdf"
            download
            className="px-8 py-4 rounded-lg bg-white text-black font-semibold shadow-lg hover:bg-gray-200 transition-all duration-200 text-lg backdrop-blur-md"
          >
            Download CV
          </a>
          <a
            href="#"
            className="px-8 py-4 rounded-lg border border-white/70 text-white font-semibold hover:bg-white hover:text-black transition-all duration-200 text-lg backdrop-blur-md"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-16 flex items-center gap-2 text-white/70 text-base">
          <svg width="20" height="20" fill="none" className="inline-block"><rect width="20" height="20" rx="5" fill="white" fillOpacity="0.2"/><rect x="8" y="4" width="4" height="12" rx="2" fill="white" /></svg>
          Scroll
        </div>
        <div className="absolute bottom-6 right-8 text-white/60 text-sm hidden md:block">
          Portfolio Update Coming Soon
        </div>
      </main>
    </div>
  );
};

export default App;
