import { useState } from "react";
import { X, User, Mail, Phone, Building2, MessageSquare, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Logo from "../Logo";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/image-removebg-preview.png";


const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 260 }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { type: "tween", ease: "easeInOut", duration: 0.3, delay: 0.6 }
  }
};

const leftDoorVariants = {
  hidden: { x: 0 },
  visible: {
    x: "-100%",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.8 }
  },
  exit: {
    x: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0 }
  }
};

const rightDoorVariants = {
  hidden: { x: 0 },
  visible: {
    x: "100%",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.8 }
  },
  exit: {
    x: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.9
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 350, damping: 25 }
  }
};

const PopupForm = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stage: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});



  const validate = () => {
    const newErrors = {};
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
    if (!formData.stage) newErrors.stage = "Startup stage is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Consultation booked successfully!");
      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
        setFormData({ name: "", email: "", phone: "", stage: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const handleInputChange = (e) => {
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
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
          {/* OVERLAY - glassmorphism */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

         

          {/* FORM BOX - premium rounded shadow container */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-white w-full max-w-xl rounded-4xl shadow-2xl p-8 md:p-10 z-50 border border-slate-100 overflow-hidden"
          >

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-gold via-gold to-blue-950" />

            {/* LEFT DOOR */}
            <motion.div
              variants={leftDoorVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute left-0 top-0 w-1/2 h-full bg-[#0d1527] z-50 overflow-hidden pointer-events-none"
            >
              {/* Left half of emblem holding left half of logo */}
              <div className="absolute top-[40%] right-0 -translate-y-1/2 w-[100px] h-[90px] border-y-2 border-l-2 border-gold rounded-l-full bg-white flex items-center justify-end pr-10 shadow-[0_0_25px_rgba(158,51,55,0.4)] overflow-hidden">
                <img src={logoImg} className="h-12 w-[160px] min-w-[160px] max-w-none object-contain absolute left-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" alt="" />
              </div>

              {/* Left half of growth content & disclaimer */}
              <div className="absolute top-[58%] right-6 text-right max-w-[170px] sm:max-w-[220px]">
                <h4 className="text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Accelerating Startup</h4>
                <p className="text-gold text-[11px] sm:text-[13px] font-bold mt-1">Growth & Funding</p>
                <p className="text-[#64748B] text-[7.5px] sm:text-[8.5px] mt-2 leading-relaxed">
                  *Disclaimer: Connecting you with certified specialists to register & scale globally.
                </p>
              </div>
            </motion.div>

            {/* RIGHT DOOR */}
            <motion.div
              variants={rightDoorVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute right-0 top-0 w-1/2 h-full bg-[#0d1527] z-50 overflow-hidden pointer-events-none"
            >
              {/* Right half of emblem holding right half of logo */}
              <div className="absolute top-[40%] left-0 -translate-y-1/2 w-[100px] h-[90px] border-y-2 border-r-2 border-gold rounded-r-full bg-white flex items-center justify-start pl-10 shadow-[0_0_25px_rgba(158,51,55,0.4)] overflow-hidden">
                <img src={logoImg} className="h-12 w-[160px] min-w-[160px] max-w-none object-contain absolute left-[-80px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" alt="" />
              </div>

              {/* Right half of growth content & disclaimer */}
              <div className="absolute top-[58%] left-6 text-left max-w-[170px] sm:max-w-[220px]">
                <h4 className="text-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Process & Compliance</h4>
                <p className="text-white text-[11px] sm:text-[13px] font-bold mt-1">Global Scale-Up</p>
                <p className="text-[#64748B] text-[7.5px] sm:text-[8.5px] mt-2 leading-relaxed">
                  Secure data transmission. Your credentials are never shared.
                </p>
              </div>
            </motion.div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 p-2 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-900 rounded-full hover:rotate-90 transition-all duration-300 cursor-pointer"
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
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. One of our advisors will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setOpen(false);
                    setFormData({ name: "", email: "", phone: "", stage: "", message: "" });
                  }}
                  className="px-6 py-2.5 bg-slate-800 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-950 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              /* FORM STATE */
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {/* HEADER */}
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-8">
                  <Logo className="mb-4 h-10" />
                  <h2 className="text-3xl md:text-[2.2rem] font-bold text-slate-800 tracking-tight leading-none">
                    Book A Free <span className="text-gold">Consultation</span>
                  </h2>
                  <p className="text-xs text-[#64748B] max-w-md mt-3 leading-relaxed">
                    Connect with our certified advisors to map out your startup registration, funding eligibility, and global scaling steps.
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <motion.div variants={itemVariants}>
                    <div className="relative group">
                      <User className="absolute left-4 top-[14px] text-slate-400 group-focus-within:text-gold transition-colors" size={18} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className={`w-full bg-[#F8FAFC] border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-gold'
                          } rounded-2xl pl-12 pr-4 py-3.5 text-sm text-slate-800 placeholder:text-[#94A3B8] focus:outline-none focus:bg-white transition-all`}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                  </motion.div>

                  {/* Email field */}
                  <motion.div variants={itemVariants}>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-[14px] text-slate-400 group-focus-within:text-gold transition-colors" size={18} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className={`w-full bg-[#F8FAFC] border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-gold'
                          } rounded-2xl pl-12 pr-4 py-3.5 text-sm text-slate-800 placeholder:text-[#94A3B8] focus:outline-none focus:bg-white transition-all`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                  </motion.div>

                  {/* Phone and Stage Row */}
                  <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                    {/* Phone field */}
                    <div>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-[14px] text-slate-400 group-focus-within:text-gold transition-colors" size={18} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone Number"
                          className={`w-full bg-[#F8FAFC] border ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-gold'
                            } rounded-2xl pl-12 pr-4 py-3.5 text-sm text-slate-800 placeholder:text-[#94A3B8] focus:outline-none focus:bg-white transition-all`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                    </div>

                    {/* Stage selector */}
                    <div>
                      <div className="relative group">
                        <Building2 className="absolute left-4 top-[14px] text-slate-400 group-focus-within:text-gold transition-colors pointer-events-none" size={18} />
                        <select
                          name="stage"
                          value={formData.stage}
                          onChange={handleInputChange}
                          className={`w-full bg-[#F8FAFC] border ${errors.stage ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-gold'
                            } rounded-2xl pl-12 pr-4 py-3.5 text-sm text-slate-855 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1em',
                          }}
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
                  </motion.div>

                  {/* Message field */}
                  <motion.div variants={itemVariants}>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-4 text-slate-400 group-focus-within:text-gold transition-colors" size={18} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can we help you? (Optional)"
                        rows={3}
                        className="w-full bg-[#F8FAFC] border border-slate-200 focus:border-gold rounded-2xl pl-12 pr-4 py-3.5 text-sm text-slate-800 placeholder:text-[#94A3B8] focus:outline-none focus:bg-white transition-all resize-none"
                      />
                    </div>
                  </motion.div>

                  {/* CTA BUTTON */}
                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-linear-to-r from-gold to-blue-950 text-white py-4 rounded-2xl font-bold uppercase tracking-wider text-xs shadow-md shadow-gold/10 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "BOOK FREE SESSION"
                      )}
                    </button>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-center justify-center gap-1.5 text-[10.5px] text-[#94A3B8] pt-1">
                    <span>🔒 Privacy Guarantee: We secure your data and never spam.</span>
                  </motion.div>
                </form>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
