import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { animate } from "framer-motion";
import PopupForm from "../src/sections/PopupForm";
import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Export", href: "#export" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverX, setHoverX] = useState(null);

  const navRef = useRef(null);
  const spotlightX = useRef(0);
  const ambienceX = useRef(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const handleOpenPopup = () => setPopupOpen(true);
    window.addEventListener("open-consultation-popup", handleOpenPopup);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-consultation-popup", handleOpenPopup);
    };
  }, []);

  // Disable scroll when popup OR mobile menu is open
  useEffect(() => {
    document.body.style.overflow = popupOpen || menuOpen ? "hidden" : "auto";
  }, [popupOpen, menuOpen]);

  // Scroll spy to update active index dynamically on scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 150; // offset for detection
      const sections = navLinks.map((link, idx) => {
        if (link.href.startsWith("#")) {
          const el = document.querySelector(link.href);
          if (el) {
            return {
              idx,
              top: el.offsetTop,
              bottom: el.offsetTop + el.offsetHeight,
            };
          }
        }
        return null;
      }).filter(Boolean);

      const activeSec = sections.find(
        (sec) => scrollPos >= sec.top && scrollPos < sec.bottom
      );

      if (activeSec) {
        setActiveIndex(activeSec.idx);
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    // Initial call
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Handle spotlight positioning and animation
  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;

    const handleMouseMove = (e) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setHoverX(x);
      spotlightX.current = x;
      nav.style.setProperty("--spotlight-x", `${x}px`);
    };

    const handleMouseLeave = () => {
      setHoverX(null);
      const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
      if (activeItem) {
        const navRect = nav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const targetX = itemRect.left - navRect.left + itemRect.width / 2;

        animate(spotlightX.current, targetX, {
          type: "spring",
          stiffness: 200,
          damping: 20,
          onUpdate: (v) => {
            spotlightX.current = v;
            nav.style.setProperty("--spotlight-x", `${v}px`);
          }
        });
      }
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeIndex]);

  // Handle active ambience positioning and spring animation
  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;
    const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

    if (activeItem) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const targetX = itemRect.left - navRect.left + itemRect.width / 2;

      animate(ambienceX.current, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 20,
        onUpdate: (v) => {
          ambienceX.current = v;
          nav.style.setProperty("--ambience-x", `${v}px`);
        },
      });
    }
  }, [activeIndex]);

  // Handle resize to keep ambience indicator aligned
  useEffect(() => {
    const handleResize = () => {
      if (!navRef.current) return;
      const nav = navRef.current;
      const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

      if (activeItem) {
        const navRect = nav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const targetX = itemRect.left - navRect.left + itemRect.width / 2;
        ambienceX.current = targetX;
        nav.style.setProperty("--ambience-x", `${targetX}px`);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  const handleNavClick = (e, href, label, idx) => {
    e.preventDefault();
    setMenuOpen(false);
    if (label === "Contact" || href === "#contact") {
      setPopupOpen(true);
      return;
    }
    setActiveIndex(idx);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, menuOpen ? 300 : 0);
    }
  };

  return (
    <>
      {/* 🟢 STYLES FOR CUSTOM MENU TRANSITION */}
      <style>{`
        @keyframes menuItemIn {
          from { opacity: 0; transform: translateX(15px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-menu-item {
          animation: menuItemIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      {/* HEADER */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[96%]  z-50 transition-all duration-300 rounded-full ${scrolled
            ? "bg-white/90 backdrop-blur-lg py-3 shadow-lg shadow-slate-150/40 border border-slate-400/50"
            : "bg-white py-3 border border-slate-400 shadow-xl "
          }`}
      >
        <div className="px-6 md:px-6 ">
          <div className="flex items-center justify-between h-14">

            {/* LOGO */}
            <a href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <Logo className={scrolled ? "h-11" : "h-12"} />
            </a>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center gap-6">
              <nav
                ref={navRef}
                style={{
                  "--spotlight-color": "rgba(184, 145, 58, 0.08)",
                  "--ambience-color": "#B8913A",
                }}
                className="relative overflow-hidden py-1.5 px-3 bg-slate-50/50 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <ul className="relative flex items-center h-full gap-1.5 z-10">
                  {navLinks.map((link, idx) => (
                    <li key={link.label} className="relative h-full flex items-center justify-center">
                      <a
                        href={link.href}
                        data-index={idx}
                        onClick={(e) => handleNavClick(e, link.href, link.label, idx)}
                        className={`px-4 py-1.5 text-sm font-semibold transition-colors duration-300 rounded-full select-none ${
                          activeIndex === idx
                            ? "text-gold"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* 1. Moving Spotlight (Follows mouse) */}
                <div
                  className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-1 transition-opacity duration-300"
                  style={{
                    opacity: hoverX !== null ? 1 : 0,
                    background: `
                      radial-gradient(
                        90px circle at var(--spotlight-x) 50%, 
                        var(--spotlight-color) 0%, 
                        transparent 100%
                      )
                    `
                  }}
                />

                {/* 2. Active Ambience marker */}
                <div
                  className="pointer-events-none absolute bottom-0 left-0 w-full h-[2.5px] z-2"
                  style={{
                    background: `
                      radial-gradient(
                        50px circle at var(--ambience-x) 100%, 
                        var(--ambience-color) 0%, 
                        transparent 100%
                      )
                    `
                  }}
                />
              </nav>

              {/* DESKTOP CTA BUTTON */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPopupOpen(true);
                }}
                className="px-6 py-2.5 bg-linear-to-r from-gold to-gold text-white rounded-full font-bold uppercase tracking-wider text-xs shadow-md shadow-gold/10 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                Get Consultation
              </a>
            </div>

            {/* MOBILE MENU TRIGGER BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-slate-800 hover:text-gold transition-colors rounded-lg hover:bg-slate-50"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85vw] max-w-[340px] bg-white z-50 shadow-2xl border-l border-slate-100 transform transition-transform duration-300 ease-in-out flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* MOBILE MENU HEADER */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100 bg-slate-50/60">
          <Logo className="h-9" />
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-slate-500 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Online status strip */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-emerald-50 border-b border-emerald-100">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
            Expert Consultants Online Now
          </span>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex-1 overflow-y-auto py-4">
          {navLinks.map((link, i) => {
            const icons = { About: '🏢', Services: '⚡', Export: '🌐', Process: '📋', Contact: '💬' };
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.label, i)}
                className={`flex items-center gap-3.5 px-5 py-4 text-slate-800 hover:text-gold hover:bg-gold/5 border-b border-slate-50 transition-all active:bg-slate-100 ${menuOpen ? 'animate-menu-item' : ''
                  }`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <span className="text-xl w-8 text-center">{icons[link.label]}</span>
                <span className="text-[15px] font-semibold">{link.label}</span>
                <span className="ml-auto text-slate-300">›</span>
              </a>
            );
          })}

          {/* WhatsApp quick action */}
          <a
            href="https://wa.me/919274713112?text=Hello%20Udhyamgrow%20Services%2C%20I%20would%20like%20to%20know%20more%20about%20your%20startup%20consultancy%20services."
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3.5 px-5 py-4 text-emerald-700 hover:bg-emerald-50 border-b border-slate-50 transition-all ${menuOpen ? 'animate-menu-item' : ''
              }`}
            style={{ animationDelay: `${navLinks.length * 0.07}s` }}
          >
            <span className="text-xl w-8 text-center">💬</span>
            <span className="text-[15px] font-semibold">Chat on WhatsApp</span>
            <span className="ml-auto text-slate-300">›</span>
          </a>
        </div>

        {/* MOBILE CTA BUTTON */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/60 space-y-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPopupOpen(true);
              setMenuOpen(false);
            }}
            className={`block text-center bg-gold text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs shadow-md shadow-gold/20 transition-all duration-300 active:scale-[0.97] ${menuOpen ? 'animate-menu-item' : ''
              }`}
            style={{ animationDelay: `${(navLinks.length + 1) * 0.07}s` }}
          >
            🎯 Get Free Consultation
          </a>
          <a
            href="tel:+919274713112"
            className="block text-center border border-slate-300 text-slate-700 py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase transition-colors hover:bg-slate-100"
          >
            📞 +91 92747 13112
          </a>
        </div>
      </div>

      {/* POPUPFORM CONTAINER */}
      <PopupForm open={popupOpen} setOpen={setPopupOpen} />
    </>
  );
};

export default Header;