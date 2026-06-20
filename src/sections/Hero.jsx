import React, { useState, useEffect } from 'react';
import { MapPin, Coins, Award, ArrowRight, Sparkles } from 'lucide-react';

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";


const bgImages = [img1, img2, img3];

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleOpenPopup = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event("open-consultation-popup"));
  };

  const handleScrollToDirectory = (e) => {
    e.preventDefault();
    document.querySelector('#directory')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="webinar"
      className="relative min-h-screen flex items-center bg-white overflow-hidden "
    >
      {/* 1. Subtle modern dot-grid pattern in the background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* 2. Soft colored background blurs (Gold on the left, Crimson on the right) */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[130px] pointer-events-none z-0" />

      {/* 3. Decorative background diagonal shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/80 -skew-x-12 origin-top-right z-0 border-l border-slate-100" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-30 lg:py-0 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left column: Text Content & Primary Action */}
          <div className="lg:col-span-6 fade-in-up text-left z-10">

            {/* Advisors online badge */}
            <div className="inline-flex items-center gap-3 mb-6 bg-white border border-slate-400 px-10 py-1.5 rounded-full shadow-xs">

              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] tracking-widest uppercase text-slate-600 font-bold">
                  Expert Consultants Online
                </span>
              </div>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-blue-950 mb-6">
              Turn Your <span className="text-gold font-black">Startup Vision</span> <br />
              Into A Scalable Reality
            </h1>

            <p className="text-slate-800 text-lg sm:text-xl font-light leading-relaxed max-w-xl mb-5">
              Get certified guidance to secure government registrations, startup grants, Mudra funding, tax exemptions, and cross-border export setups.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <a
                href="#"
                onClick={handleOpenPopup}
                className="inline-flex items-center shadow-black justify-center gap-2 px-8 py-4 bg-linear-to-r from-gold to-gold text-white  font-bold uppercase tracking-wider text-xs shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Free Consultation
                <ArrowRight size={15} />
              </a>
              <a
                href="#directory"
                onClick={handleScrollToDirectory}
                className="inline-flex items-center shadow-black shadow-lg justify-center gap-2 px-8 py-4 border-2 border-slate-400 bg-white text-slate-700 hover:bg-slate-50  font-bold uppercase tracking-wider text-xs transition-all duration-300"
              >
                Explore Schemes & Loans
              </a>
            </div>

            {/* Quick stats tags */}
            <div className="grid grid-cols-3 gap-6 border-t border-slate-400 pt-8 max-w-lg">
              <div>
                <p className="text-3xl font-extrabold text-gold">500+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Startups Guided</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-blue-950">95%</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Funding Success</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-blue-950">0%</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Equity Taken</p>
              </div>
            </div>
          </div>

          {/* Right column: Slideshow contained inside a frame */}
          <div className="lg:col-span-6 fade-in-up-delay flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-2xl shadow-black aspect-4/3  overflow-hidden shadow-2xl border-2 border-gold bg-slate-200">

              {/* Slideshow of images */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                {bgImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1200 ease-in-out ${idx === currentIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
              </div>

              {/* Subtle dark filter inside the box for contrast */}
              <div className="absolute inset-0 bg-black/10 z-10" />

              {/* Floating feature pill */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur-md p-4  shadow-lg border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12  shadow-black shadow-sm bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Award size={24} />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-blue-950">Govt Approved Schemes</h4>
                  <p className="text-xs text-slate-800">Fast-tracked applications & funding</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
