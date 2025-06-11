import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

// --- PurpleTriangleSweep Component ---
function PurpleTriangleSweep() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2 + 320;
    const centerY = canvas.height / 2;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const layers = 80;
      const baseSize = 300;
      const step = 0.3; // SLOWER animation

      for (let i = 0; i < frame && i < layers; i++) {
        const t = i / layers;
        const size = baseSize * (1 - t * 0.5);
        const angle = t * Math.PI;

        const x1 = centerX + size * Math.cos(angle);
        const y1 = centerY + size * Math.sin(angle);

        const x2 = centerX + size * Math.cos(angle + 2.094); // 120°
        const y2 = centerY + size * Math.sin(angle + 2.094);

        const x3 = centerX + size * Math.cos(angle + 4.188); // 240°
        const y3 = centerY + size * Math.sin(angle + 4.188);

        ctx.save();
        ctx.shadowColor = "#A259FF";
        ctx.shadowBlur = 24; // Add glow
        ctx.strokeStyle = `rgba(162, 89, 255, ${0.7 - t * 0.5})`;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x1, y1);
        ctx.stroke();
        ctx.restore();
      }

      frame += step;
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}

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
        x: lerp(prev.x, mouse.current.x, 0.32), // Increased from 0.15 to 0.28 for faster follow
        y: lerp(prev.y, mouse.current.y, 0.32),
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
      {/* --- Abstract Gradient Blobs --- */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          left: '-10vw',
          top: '10vh',
          width: '38vw',
          height: '38vw',
          background: 'radial-gradient(circle at 30% 40%, #A259FF88 0%, #A259FF00 70%)',
          filter: 'blur(80px)',
          opacity: 0.7,
        }}
      />
      <div
        className="pointer-events-none absolute z-0"
        style={{
          left: '-6vw',
          bottom: '8vh',
          width: '28vw',
          height: '28vw',
          background: 'radial-gradient(circle at 60% 80%, #00FFA388 0%, #00FFA300 80%)',
          filter: 'blur(100px)',
          opacity: 0.5,
        }}
      />
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
        }}
      />
      <div
        className="pointer-events-none absolute z-0"
        style={{
          right: '-6vw',
          bottom: '8vh',
          width: '28vw',
          height: '28vw',
          background: 'radial-gradient(circle at 40% 60%, #00FFA388 0%, #00FFA300 80%)',
          filter: 'blur(100px)',
          opacity: 0.5,
        }}
      />
      {/* --- End Blobs --- */}

      <PurpleTriangleSweep />
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

      {/* Main content */}
      <main className="relative z-20 flex flex-col items-start justify-center h-full w-full px-8 md:px-24">
        <h2 className="text-emerald text-xl sm:text-2xl mb-4 flex items-center gap-2 font-semibold tracking-wider">
          Hello, I am Karina
        </h2>

        <h1 className="text-white font-extrabold text-5xl sm:text-6xl md:text-8xl mb-6 leading-[1.1] tracking-tight drop-shadow-[0_2px_24px_#A259FF99]">
          AI &amp; Software Developer
        </h1>
        {/* <p className="text-left text-body text-base md:text-xl mb-10 max-w-2xl pl-0 md:pl-0">
          I build modern, performant web experiences with a focus on design, accessibility, and delightful microinteractions.
        </p> */}

        <div className="flex gap-4 mt-4">
          <a
            href="/src/assets/Resume_Karina.pdf"
            download
            className="px-5 py-2 rounded-lg bg-emerald text-richblack font-semibold shadow-lg hover:bg-cyberpurple hover:text-white transition-all duration-200 text-base backdrop-blur-md border-2 border-emerald"
          >
            Download CV
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-lg border-2 border-cyberpurple text-cyberpurple font-semibold hover:bg-cyberpurple hover:text-white transition-all duration-200 text-base backdrop-blur-md"
          >
            Contact Me
          </a>
        </div>
        {/* <div className="mt-16 flex items-center gap-2 text-muted text-base">
          <svg width="20" height="20" fill="none" className="inline-block"><rect width="20" height="20" rx="5" fill="#A259FF" fillOpacity="0.2"/><rect x="8" y="4" width="4" height="12" rx="2" fill="#A259FF" /></svg>
          Scroll
        </div> */}
      </main>
    </div>
  );
};

export default App;
