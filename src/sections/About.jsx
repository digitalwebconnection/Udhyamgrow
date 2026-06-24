import React from 'react';

const About = () => (
  <section id="about" className="bg-ivory py-8 lg:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="gold-rule" />
            <span className=" text-gold ">ABOUT UDHYAMGROW</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-display font-semibold text-3xl drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)] sm:text-4xl lg:text-5xl leading-[1.3] tracking-tight text-ink mb-8">
            Empowering Startups, <span className='text-gold'>Fueling Innovation.</span>
          </h2>
          {/* Stats strip */}
          <div className="flex gap-8 mb-8 pt-6 border-t border-black">
            <div>
              <p className="font-display text-3xl lg:text-4xl text-gold font-semibold">500+</p>
              <p className="text-xs uppercase tracking-widest text-muted mt-1">Startups Supported</p>
            </div>
            <div className="w-px bg-black" />
            <div>
              <p className="font-display text-3xl lg:text-4xl text-gold font-semibold">95%</p>
              <p className="text-xs uppercase tracking-widest text-muted mt-1">Funding Success</p>
            </div>
          </div>
          <p className="text-black text-justify leading-relaxed mb-6">
            Udhyamgrow Services Private Limited is a premier business consultancy firm, supporting startups
            across India. We specialize in helping entrepreneurs realize their growth potential through expert
            guidance, mentorship, and a seamless application process for accessing funding opportunities and
            certifications. Our services ensure startups are equipped to grow both in the Indian and global markets.
          </p>
          <p className="text-black text-justify leading-relaxed">
            Our specialized services ensure that startups can overcome the competitive market, particularly in
            Europe and global markets. At Udhyamgrow, we aim to encourage business growth by leveraging
            government schemes and opportunities, giving entrepreneurs the tools they need to succeed.
          </p>
        </div>

        {/* Right: Image with quote overlay */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=srgb&fm=jpg&w=900&q=85"
            alt="Business meeting"
            className="w-full shadow-lg shadow-black h-135 object-cover"
          />
          <div className="hidden md:block absolute -bottom-8 -left-8 bg-ink p-8 max-w-xs shadow   ">
            <p className="font-display text   text-white  leading-snug mb-3">
              "To be India's leading business consultancy, transforming startups into successful, industry-leading enterprises."
            </p>
            <p className="text-gold-light text-md uppercase tracking-widest">— Our vision</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
