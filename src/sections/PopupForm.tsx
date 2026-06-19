import { useState } from "react";
import { X, User, Mail, Phone, Building, CheckCircle2, MessageSquare, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Logo from "../Logo";

interface PopupFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const PopupForm = ({ open, setOpen }: PopupFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stage: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!open) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.stage) newErrors.stage = "Please select your startup stage";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please correct the highlighted errors in the form.");
      return;
    }

    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Consultation booked successfully!");
      // Auto close after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
        setFormData({ name: "", email: "", phone: "", stage: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center p-4">
      {/* OVERLAY - glassmorphism */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-500"
        onClick={() => setOpen(false)}
      />

      {/* FORM BOX - premium rounded shadow container */}
      <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl p-6 md:p-10 z-50 border border-slate-105/50 transform transition-all duration-300 scale-100 opacity-100 overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-gold via-gold to-blue-950" />

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 p-2 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-900 rounded-full hover:rotate-90 transition-all duration-300"
        >
          <X size={18} />
        </button>

        {submitted ? (
          /* SUCCESS STATE */
          <div className="flex flex-col items-center text-center py-10">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 text-emerald-500">
              <CheckCircle2 size={40} className="animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Request Submitted!
            </h3>
            <p className="text-sm text-slate-500 max-w-sm mb-6">
              Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. One of our advisors will contact you shortly at <span className="font-semibold text-slate-800">{formData.phone}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setOpen(false);
                setFormData({ name: "", email: "", phone: "", stage: "", message: "" });
              }}
              className="px-6 py-2.5 bg-slate-800 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-950 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          /* FORM STATE */
          <>
            {/* HEADER */}
            <div className="flex flex-col items-center text-center mb-8">
              <Logo className="mb-4 h-10" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
                Book A Free <span className="text-gold">Consultation</span>
              </h2>
              <p className="text-xs text-slate-500 max-w-sm mt-2 leading-relaxed">
                Connect with our certified advisors to map out your startup registration, funding eligibility, and global scaling steps.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field */}
              <div>
                <div className="relative group">
                  <User className="absolute left-3 top-3 text-slate-400 group-focus-within:text-gold transition-colors" size={18} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className={`w-full bg-slate-50 border ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-gold'
                    } rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all`}
                  />
                </div>
                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
              </div>

              {/* Email field */}
              <div>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 text-slate-400 group-focus-within:text-gold transition-colors" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className={`w-full bg-slate-50 border ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-gold'
                    } rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Phone field */}
                <div>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-3 text-slate-400 group-focus-within:text-gold transition-colors" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className={`w-full bg-slate-50 border ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-gold'
                      } rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                </div>

                {/* Stage selector */}
                <div>
                  <div className="relative group">
                    <Building className="absolute left-3 top-3 text-slate-400 group-focus-within:text-gold transition-colors" size={18} />
                    <select
                      name="stage"
                      value={formData.stage}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border ${
                        errors.stage ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-gold'
                      } rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Select Startup Stage</option>
                      <option value="Idea">Idea / Concept</option>
                      <option value="MVP">MVP / Product Stage</option>
                      <option value="Growth">Growth & Revenue</option>
                      <option value="Established">Established Entity</option>
                    </select>
                  </div>
                  {errors.stage && <p className="text-red-500 text-xs mt-1 ml-1">{errors.stage}</p>}
                </div>
              </div>

              {/* Message field */}
              <div className="relative group">
                <MessageSquare className="absolute left-3 top-3 text-slate-400 group-focus-within:text-gold transition-colors" size={18} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you? (Optional)"
                  rows={3}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-gold rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all resize-none"
                />
              </div>

              {/* CTA BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-linear-to-r from-gold to-blue-950 text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-md shadow-gold/10 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Book Free Session"
                )}
              </button>

              <p className="text-center text-[10px] text-slate-400">
                🔒 Privacy Guarantee: We secure your data and never spam.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PopupForm;