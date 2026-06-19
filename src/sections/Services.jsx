import React from 'react';
import { Compass, DollarSign, Stamp, Globe, Landmark, Laptop } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: Compass,
    title: 'Startup India Consultation',
    desc: 'Assisting in securing Startup India recognition and tax benefits like the 80-IAC Income Tax Exemption certificate.',
  },
  {
    num: '02',
    icon: DollarSign,
    title: 'Funding & Loan Support',
    desc: 'Helping secure funding from Seed Fund Schemes, PMEGP, MUDRA Loans, MSME Loans, and Venture Capital.',
  },
  {
    num: '03',
    icon: Stamp,
    title: 'Certification Assistance',
    desc: 'Ensuring compliance & enhancing credibility with ISO, ZED, DUNS/DRS-Plus, FSSAI licenses, and SPR Scheme.',
  },
  {
    num: '04',
    icon: Globe,
    title: 'Website & GEM Listings',
    desc: 'Establishing a strong online presence, developing web applications, and listing products on Government e-Marketplace (GEM).',
  },
  {
    num: '05',
    icon: Landmark,
    title: 'Government Grants Guidance',
    desc: 'Guiding startups through various government grants, RKVY-RAFTAAR, and agricultural/food subsidies.',
  },
  {
    num: '06',
    icon: Laptop,
    title: 'Digital Business Solutions',
    desc: 'Building online platforms, handling digital and social media marketing, content creation, and growth strategies.',
  },
];

const Services = () => (
  <section id="services" className="bg-ivory py-8  lg:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-5 md:mb-16">
        <p className="text-sm md:text  text-gold font-medium mb-2">
          OUR SERVICES
        </p>
        <h2 className="font-display  max-w    mx-auto text-3xl drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)]  sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink mb-5">
          Complete Support, <br /> <span className='text-gold '>Start to Finish.</span>
        </h2>
        <p className="text-gray-600 mt-4 ">
          From initial registration and certifications to funding and market expansion — we support your startup every step of the way.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5  ">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <div
              key={i}
              data-testid={`service-card-${i}`}
              className="group relative px-8 py-12 shadow-lg shadow-black/50 border border-gray-600/70     hover:bg-cream transition-colors duration-300"
            >
              <span
                className="absolute top-4 right-6 font-display text-6xl font-bold text-border group-hover:text-gold transition-colors duration-300 select-none leading-none"
                aria-hidden
              >
                {svc.num}
              </span>
              <div className="w-12 h-12 bg-ink flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300 relative z-10">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-display text    text-ink mb-3 relative z-10">{svc.title}</h3>
              <p className="text-sm text-muted leading-relaxed relative z-10">{svc.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
