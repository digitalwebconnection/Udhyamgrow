  import { useState, useEffect } from 'react';
import { Cookie, X, Shield, Settings } from 'lucide-react';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('udhyamgrow_cookie_consent');
    if (!consent) {
      // Show banner after a slight delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('udhyamgrow_cookie_consent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.removeItem('udhyamgrow_cookie_consent');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('udhyamgrow_cookie_consent', JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-999 max-w-sm w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-md text-slate-800 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 p-5 sm:p-6 transition-all duration-500 animate-slide-in">
      {!showPreferences ? (
        <div>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-2.5 bg-gold/10 text-gold rounded-xl shrink-0">
              <Cookie className="w-6 h-6 animate-pulse" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-lg text-slate-900">
                  Cookie Settings
                </h3>
                <button
                  onClick={handleRejectAll}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Close banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                We use cookies to optimize your experience, analyze site usage, and support our marketing efforts. By clicking "Accept All", you agree to our use of cookies.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <button
              onClick={handleAcceptAll}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-850 text-white text-xs font-semibold rounded-xl tracking-wider uppercase transition-all duration-300 shadow-md shadow-slate-950/10 cursor-pointer"
            >
              Accept All
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleRejectAll}
                className="w-full py-2 px-3 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-xl transition-all duration-200 cursor-pointer"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="w-full py-2 px-3 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-xl flex items-center justify-center gap-1 transition-all duration-200 cursor-pointer"
              >
                <Settings className="w-3.5 h-3.5" />
                Customize
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold" />
              <h3 className="font-display font-semibold text-base text-slate-900">
                Cookie Preferences
              </h3>
            </div>
            <button
              onClick={() => setShowPreferences(false)}
              className="text-slate-400 hover:text-slate-600 text-xs font-medium cursor-pointer"
            >
              Back
            </button>
          </div>

          <div className="space-y-3.5 my-4">
            {/* Essential */}
            <div className="flex items-start justify-between gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              <div>
                <label className="text-xs font-semibold text-slate-800 block">Essential Cookies</label>
                <span className="text-[10px] text-slate-500 leading-normal block">Required for the site to function properly. Cannot be disabled.</span>
              </div>
              <input
                type="checkbox"
                checked
                disabled
                className="w-4 h-4 text-gold border-slate-300 rounded focus:ring-gold accent-gold mt-1"
              />
            </div>

            {/* Analytics */}
            <div className="flex items-start justify-between gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              <div>
                <label className="text-xs font-semibold text-slate-800 block">Performance & Analytics</label>
                <span className="text-[10px] text-slate-500 leading-normal block">Help us understand how visitors interact with our website.</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="w-4 h-4 text-gold border-slate-300 rounded focus:ring-gold accent-gold mt-1 cursor-pointer"
              />
            </div>

            {/* Marketing */}
            <div className="flex items-start justify-between gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              <div>
                <label className="text-xs font-semibold text-slate-800 block">Marketing & Targeting</label>
                <span className="text-[10px] text-slate-500 leading-normal block">Used to deliver advertisements and offers tailored to your interests.</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                className="w-4 h-4 text-gold border-slate-300 rounded focus:ring-gold accent-gold mt-1 cursor-pointer"
              />
            </div>
          </div>

          <button
            onClick={handleSavePreferences}
            className="w-full py-2 px-4 bg-slate-900 hover:bg-slate-850 text-white text-xs font-semibold rounded-xl tracking-wider uppercase transition-all duration-300 cursor-pointer"
          >
            Save Preferences
          </button>
        </div>
      )}
    </div>
  );
};
