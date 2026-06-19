import React from 'react';

const whyItems = [
  {
    title: 'Expert Guidance',
    desc: 'Our team brings extensive experience in startup services, providing guidance from initial setup to market expansion.',
  },
  {
    title: 'No Equity Taken',
    desc: 'Benefit from mentorship and resources without giving up equity in your business. Keep 100% ownership.',
  },
  {
    title: 'Tailored Strategies',
    desc: 'Receive personalized solutions and scheme matching to meet the unique needs and goals of your startup.',
  },
  {
    title: 'Faster Growth',
    desc: 'Accelerate your development with expedited processes for registration, official certifications, and funding.',
  },
];

const WhyAttend = () => (
  <section
    id="why-attend"
    className="relative py-8 lg:py-12 overflow-hidden"
  >
    {/* Parallax-feel bg image */}
    <div
      className="absolute inset-0 "
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=srgb&fm=jpg&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    />
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex items-center gap-3 mb-4 justify-center">
        <span className="gold-rule" />
        <span className="text-sm md:text  text-white">WHY UDHYAMGROW SERVICES</span>
        <span className="gold-rule" />
      </div>
      <h2 className="font-display text-3xl font-semibold drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl text-white mb-14">
        Expert Guidance.<br />
        <span className="text-gold underline underline-offset-8 decoration-2 decoration-white">
          No Equity Taken.
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mb-5 md:mb-14">
        {whyItems.map((item, i) => (
          <div
            key={i}
            className="bg-ink/70 backdrop-blur-sm p-8 text-left hover:bg-black/45 transition-colors duration-300"
          >
            <div className="w-8 h-px bg-gold mb-6" />
            <h3 className="font-display text   text-white mb-3 leading-snug">{item.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default WhyAttend;
