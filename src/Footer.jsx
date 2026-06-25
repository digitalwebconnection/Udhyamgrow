import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* CONTACT SECTION                                                     */
/* ------------------------------------------------------------------ */
export const Contact = () => (
  <section id="contact" className="bg-ivory py-14 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left: Contact info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="gold-rule" />
            <span className="section-header-eyebrow">GET IN TOUCH</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink mb-8 lg:mb-12">
            Let's start your{' '}
            <em className="text-gold italic">startup story</em>.
          </h2>
          <div className="flex flex-col gap-8">
            {/* Address */}
            <div
              data-testid="contact-address"
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 bg-ink flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted font-semibold mb-1">
                  Visit us
                </p>
                <p className="text-sm text-ink leading-relaxed">
                  1110-B, Titanium City Center, Near Sachin Towers,<br />
                  100Feet Ring Road, Anand Nagar, Satellite,<br />
                  Ahmedabad - 380015
                </p>
              </div>
            </div>
            {/* Phone */}
            <div
              data-testid="contact-phone"
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 bg-ink flex items-center justify-center shrink-0">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted font-semibold mb-1">
                  Call us
                </p>
                <a
                  href="tel:+919274713112"
                  className="text-sm text-ink hover:text-gold transition-colors"
                >
                  +91 92747 13112
                </a>
              </div>
            </div>
            {/* Email */}
            <div
              data-testid="contact-email"
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 bg-ink flex items-center justify-center shrink-0">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted font-semibold mb-1">
                  Email
                </p>
                <a
                  href="mailto:support@udhyamgrow.co.in"
                  className="text-sm text-ink hover:text-gold transition-colors"
                >
                  support@udhyamgrow.co.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: CTA card */}
        <div
          className="relative bg-ink p-6 sm:p-12 overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse at 80% 20%, rgba(184,145,58,0.12) 0%, #0A0A0A 60%)',
          }}
        >
          <h3 className="font-display text-3xl lg:text-4xl text-white mb-5">
            Book your free consultation
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-6 sm:mb-10">
            Talk directly with our startup advisors. Get personalized guidance on registrations,
            certifications, and funding schemes — completely free.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="tel:+919274713112"
              data-testid="contact-call-btn"
              className="btn-primary justify-center text-center"
              style={{ background: 'linear-gradient(to right, #9e3337, #202a4d)' }}
            >
              Call Now
            </a>
            <a
              href="#webinar"
              data-testid="contact-register-btn"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#webinar')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 border border-gold/50 text-gold text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-gold/10 transition-colors duration-300"
            >
              Get Consultation →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* FOOTER                                                              */
/* ------------------------------------------------------------------ */
const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Export', href: '#export' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const handleFooterNav = (e, href) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Footer = () => (
  <footer
    data-testid="site-footer"
    className="relative bg-white text-slate-800 border-t border-slate-200 overflow-hidden"
  >
    {/* Top accent gradient bar */}
    <div className="h-1.5 w-full bg-linear-to-r from-gold via-gold to-blue-950 absolute top-0 left-0 z-10" />

    {/* Subtle dot-grid pattern */}
    <div
      className="absolute inset-0 pointer-events-none opacity-25 z-0"
      style={{
        backgroundImage: 'radial-gradient(#cbd5e1 1.2px, transparent 1.2px)',
        backgroundSize: '24px 24px',
      }}
    />

    {/* Background Blurs */}
    <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-gold/5 blur-[90px] pointer-events-none z-0" />
    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gold/5 blur-[90px] pointer-events-none z-0" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
        {/* Col 1-2: Brand */}
        <div className="lg:col-span-2">
          <Logo className="mb-6 h-12" />
          <p className="text-slate-800 text-sm leading-relaxed max-w-sm mb-8">
            Udhyamgrow Services is your trusted partner for startup registration, certifications, funding, and export support — from initial setup to market expansion.
          </p>
          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-instagram"
              aria-label="Instagram"
              className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-linkedin"
              aria-label="LinkedIn"
              className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-facebook"
              aria-label="Facebook"
              className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Col 3: Quick Links */}
        <div>
          <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-blue-950 mb-6">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleFooterNav(e, link.href)}
                  className="text-sm text-slate-800 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Reach Us */}
        <div>
          <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-blue-950 mb-6">
            Reach Us
          </h4>
          <div className="flex flex-col gap-4 text-sm text-slate-800">
            <p className="leading-relaxed">
              1110-B, Titanium City Center, Near Sachin Towers,
              100Feet Ring Road, Anand Nagar, Satellite,
              Ahmedabad - 380015
            </p>
            <a href="tel:+919274713112" className="hover:text-gold transition-colors font-medium">
              +91 92747 13112
            </a>
            <a href="mailto:support@udhyamgrow.co.in" className="hover:text-gold transition-colors font-medium">
              support@udhyamgrow.co.in
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-slate-800 text-xs text-center sm:text-left">
          <p>© {new Date().getFullYear()} Udhyamgrow Services Private Limited. All rights reserved.</p>

        </div>

        <p className="font-display text-gold text-xs font-semibold text-center sm:text-right">
          Transforming Startups, Scaling Growth.
        </p>
        <a href="#privacy-policy" className="hover:text-gold transition-colors duration-200 underline sm:no-underline font-medium">
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
);

/* ------------------------------------------------------------------ */
/* WHATSAPP FLOAT                                                      */
/* ------------------------------------------------------------------ */
export const WhatsAppFloat = () => (
  <a
    href="https://wa.me/919274713112?text=Hello%20Udhyamgrow%20Services%2C%20I%20would%20like%20to%20know%20more%20about%20your%20startup%20consultancy%20services."
    target="_blank"
    rel="noopener noreferrer"
    data-testid="whatsapp-float-btn"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
    style={{ backgroundColor: '#25D366' }}
  >
    <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current text-white">
      <path d="M19.11 17.37c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2.01-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .97-1 2.37s1.03 2.75 1.17 2.94c.14.19 2.02 3.09 4.89 4.33.68.29 1.22.47 1.64.6.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33zM16.04 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 2 .55 3.85 1.5 5.44L5 26.67l5.38-1.78c1.54.84 3.32 1.33 5.2 1.33h.01c5.9 0 10.7-4.8 10.7-10.7 0-5.9-4.8-10.7-10.66-10.69zm6.25 14.72c-.26.74-1.5 1.38-2.1 1.47-.56.09-1.26.13-2.02-.13-.47-.15-1.07-.34-1.84-.67-3.24-1.4-5.36-4.64-5.52-4.86-.16-.21-1.32-1.76-1.32-3.36 0-1.6.84-2.39 1.14-2.71.3-.33.65-.41.87-.41h.62c.2 0 .47-.08.73.56.26.66.89 2.26.97 2.42.08.17.13.36.03.58-.09.21-.14.33-.28.51-.14.18-.3.4-.43.54-.14.14-.29.3-.12.58.17.29.74 1.22 1.59 1.97 1.09.97 2 1.27 2.3 1.41.29.14.46.12.62-.07.17-.19.72-.84.91-1.12.19-.29.38-.24.64-.14.26.1 1.65.78 1.93.92.29.14.47.21.55.33.07.13.07.73-.19 1.45z" />
    </svg>
  </a>
);

export default Footer;