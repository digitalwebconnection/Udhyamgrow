import { useState, useEffect, useRef } from 'react';
import { Send, X, CheckCheck } from 'lucide-react';

export const WhatsAppBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [hasNewNotification, setHasNewNotification] = useState(true);
  const chatEndRef = useRef(null);

  const phoneNumber = '919274713112'; // From Footer.jsx (+91 92747 13112)
  const defaultText = 'Hello Udhyamgrow Services, I would like to know more about your startup consultancy services.';

  useEffect(() => {
    // Auto-open logic
    const wasClosed = sessionStorage.getItem('udhyamgrow_whatsapp_closed');

    if (!wasClosed) {
      // Step 1: Open chat after 4 seconds
      const openTimer = setTimeout(() => {
        setIsOpen(true);
        setHasNewNotification(false);

        // Step 2: Show typing animation for 1.5 seconds
        setIsTyping(true);
        const typingTimer = setTimeout(() => {
          setIsTyping(false);
          setMessageVisible(true);
        }, 1500);

        return () => clearTimeout(typingTimer);
      }, 4000);

      return () => clearTimeout(openTimer);
    } else {
      // If it was closed before, the message should already be loaded when opened manually
      setMessageVisible(true);
      setHasNewNotification(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setHasNewNotification(false);
      // Scroll to bottom when chat opens
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messageVisible, isTyping]);

  const handleOpenToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
      setHasNewNotification(false);
      // Trigger typing if not already completed
      if (!messageVisible && !isTyping) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessageVisible(true);
        }, 1200);
      }
    } else {
      setIsOpen(false);
      sessionStorage.setItem('udhyamgrow_whatsapp_closed', 'true');
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    sessionStorage.setItem('udhyamgrow_whatsapp_closed', 'true');
  };

  const handleSend = (e) => {
    e.preventDefault();
    const textToSend = inputValue.trim() || defaultText;
    const encodedText = encodeURIComponent(textToSend);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setInputValue('');
  };

  const handleQuickQuestion = (question) => {
    const encodedText = encodeURIComponent(question);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-999 font-sans antialiased">
      {/* Floating Toggle Button */}
      <button
        onClick={handleOpenToggle}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-50 cursor-pointer ${isOpen ? 'bg-red-500 rotate-90' : 'bg-[#25D366]'
          }`}
        style={{
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
        }}
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-300" />
        ) : (
          <>
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current">
              <path d="M19.11 17.37c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2.01-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .97-1 2.37s1.03 2.75 1.17 2.94c.14.19 2.02 3.09 4.89 4.33.68.29 1.22.47 1.64.6.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33zM16.04 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 2 .55 3.85 1.5 5.44L5 26.67l5.38-1.78c1.54.84 3.32 1.33 5.2 1.33h.01c5.9 0 10.7-4.8 10.7-10.7 0-5.9-4.8-10.7-10.66-10.69zm6.25 14.72c-.26.74-1.5 1.38-2.1 1.47-.56.09-1.26.13-2.02-.13-.47-.15-1.07-.34-1.84-.67-3.24-1.4-5.36-4.64-5.52-4.86-.16-.21-1.32-1.76-1.32-3.36 0-1.6.84-2.39 1.14-2.71.3-.33.65-.41.87-.41h.62c.2 0 .47-.08.73.56.26.66.89 2.26.97 2.42.08.17.13.36.03.58-.09.21-.14.33-.28.51-.14.18-.3.4-.43.54-.14.14-.29.3-.12.58.17.29.74 1.22 1.59 1.97 1.09.97 2 1.27 2.3 1.41.29.14.46.12.62-.07.17-.19.72-.84.91-1.12.19-.29.38-.24.64-.14.26.1 1.65.78 1.93.92.29.14.47.21.55.33.07.13.07.73-.19 1.45z" />
            </svg>

            {/* Blinking notification dot */}
            {hasNewNotification && (
              <span className="absolute top-0 right-0 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center font-bold text-white">
                  1
                </span>
              </span>
            )}
          </>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`absolute bottom-20 right-0 w-80 sm:w-96 max-h-[500px] flex flex-col bg-[#efeae2] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.18)] border border-slate-200/50 transition-all duration-300 origin-bottom-right z-40 ${isOpen
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-75 opacity-0 translate-y-10 pointer-events-none'
          }`}
      >
        {/* WhatsApp Chat Header */}
        <div className="bg-[#075e54] text-white px-4 py-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* Avatar image (using professional letters or generic avatar) */}
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-semibold text-lg border border-white/10">
                UG
              </div>
              {/* Online indicator */}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] border-2 border-[#075e54] rounded-full"></span>
            </div>
            <div>
              <h4 className="font-semibold text-sm">Udhyamgrow Support</h4>
              <p className="text-[11px] text-white/80 flex items-center gap-1 mt-0.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                Typically replies instantly
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full cursor-pointer"
            aria-label="Minimize Chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* WhatsApp Chat Body */}
        <div
          className="flex-1 p-4 overflow-y-auto min-h-[250px] max-h-[320px] space-y-4 relative"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%239C92AC' fill-opacity='0.04'%3E%3Cpath fill-rule='evenodd' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm1-61c3.148 0 5.7-2.552 5.7-5.7 0-3.148-2.552-5.7-5.7-5.7-3.148 0-5.7 2.552-5.7 5.7 0 3.148 2.552 5.7 5.7 5.7zm50 17c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM25 49c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm60 37c3.148 0 5.7-2.552 5.7-5.7 0-3.148-2.552-5.7-5.7-5.7-3.148 0-5.7 2.552-5.7 5.7 0 3.148 2.552 5.7 5.7 5.7zm-70 17c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm50 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          {/* Welcome Message (shows up after typing or immediately if manually opened) */}
          {messageVisible && (
            <div className="flex flex-col items-start max-w-[85%] bg-white text-slate-800 rounded-2xl rounded-tl-none p-3 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]">
              <span className="text-[11px] font-semibold text-emerald-600 mb-0.5">Advisor</span>
              <p className="text-xs sm:text-[13px] leading-relaxed">
                Hi! Welcome to Udhyamgrow Services. How can we help you with your Startup registration, MSME schemes, or export services today? 🚀
              </p>
              <div className="flex items-center gap-1 justify-end w-full mt-1.5 text-[9px] text-slate-400">
                <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                <CheckCheck className="w-3 h-3 text-[#34b7f1]" />
              </div>
            </div>
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-1.5 max-w-[70px] bg-white rounded-xl rounded-tl-none p-3 shadow-sm">
              <span className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          )}

          {/* Quick FAQ / Action Buttons */}
          {messageVisible && (
            <div className="space-y-2 pt-2">
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold px-1">
                Frequently Asked Questions
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Register my Startup 💼',
                  'MSME Schemes Info 📋',
                  'Export Solutions 🌍',
                  'Free Consultation 📞'
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleQuickQuestion(`Hi, I'm interested in: ${item}. Please share more details.`)}
                    className="text-xs bg-[#d9fdd3] hover:bg-[#cbfbc3] text-slate-800 border border-emerald-100 py-1.5 px-3 rounded-full shadow-sm text-left transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* WhatsApp Chat Footer Input */}
        <form onSubmit={handleSend} className="bg-[#f0f2f5] p-3 border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-white text-slate-800 placeholder-slate-400 text-sm px-4 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
          />
          <button
            type="submit"
            className="w-10 h-10 shrink-0 bg-[#075e54] hover:bg-[#064e46] active:scale-95 text-white rounded-full flex items-center justify-center shadow transition-all cursor-pointer"
            aria-label="Send message to WhatsApp"
          >
            <Send className="w-4.5 h-4.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
