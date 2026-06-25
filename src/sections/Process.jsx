import  { useState } from "react";
import { motion } from "framer-motion";
import PopupForm from "../sections/PopupForm";

const steps = [
  { num: "01", title: "Quick Registration", desc: "Fill out a simple form with basic business and startup details in under 2 minutes." },
  { num: "02", title: "Expert Consultation", desc: "Our startup advisors analyze your business needs and evaluate scheme eligibility." },
  { num: "03", title: "Scheme Matching", desc: "We match your business model with the best available government grants and subsidies." },
  { num: "04", title: "Documentation", desc: "We help prepare, verify, and submit all applications and paperwork with end-to-end support." },
  { num: "05", title: "Funding & Growth", desc: "Receive certifications or funding directly to start scaling your startup." },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Process = () => {
  // Moved state inside the component
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section id="process" className="bg-ivory py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm md:text  text-gold font-medium mb-2">
            SIMPLE PROCESS
          </p>
          <h2 className="font-display max-w-3xl mx-auto text-3xl drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink mb-5">
            Five Steps. <span className="text-gold"> One Successful Journey.</span>
          </h2>
        </motion.div>

        {/* Desktop timeline */}
        <div className="relative hidden lg:block">
          {/* Animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-8 left-0 right-0 h-px origin-left"
            style={{
              background: "linear-gradient(to right, #B8913A, #D4B063, #B8913A)",
            }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-5 gap-4"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-16 h-16 bg-ivory border border-gold flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110">
                  <span className="font-display text  text-gold font-semibold">
                    {step.num}
                  </span>
                </div>

                <h4 className="font-display text   text-ink mb-2 leading-tight">
                  {step.title}
                </h4>

                <p className="text-xs text-muted leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:hidden flex flex-col gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ x: 5 }}
              className="flex gap-5 items-start"
            >
              <div className="shrink-0 w-14 h-14 border border-gold flex items-center justify-center transition hover:scale-110">
                <span className="font-display text  text-gold font-semibold">
                  {step.num}
                </span>
              </div>

              <div>
                <h4 className="font-display text   text-ink mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="md:mt-16 mt-8 text-center"
        >
          <p className="font-display    text-muted  mb-4">
            Start your startup journey with expert guidance.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setPopupOpen(true)}
            className="bg-linear-to-r shadow-lg shadow-black from-gold to-blue-950 px-10 py-3      text-white text  font-semibold inline-flex items-center gap-2 cursor-pointer"
          >
            Book Free Consultation →
          </motion.button>
        </motion.div>
      </div>

      {/* Popup Form Trigger */}
      <PopupForm open={popupOpen} setOpen={setPopupOpen} />
    </section>
  );
};

export default Process;
