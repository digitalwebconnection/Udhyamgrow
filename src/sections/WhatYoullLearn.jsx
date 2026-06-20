import React, { useEffect, useState } from 'react';
import { Award, Coins, Landmark, ShieldCheck, Globe } from 'lucide-react';

const learnItems = [
  {
    icon: Award,
    title: 'Startup India & Tax Exemption',
    desc: 'Secure official recognition and apply for Form 80-IAC certificate to pay zero income tax for three consecutive years.',
  },
  {
    icon: Coins,
    title: 'Funding & Loan Schemes',
    desc: 'Access Seed Fund Schemes, PMEGP, MUDRA loans, and Equity Seed supports without giving up equity.',
  },
  {
    icon: Landmark,
    title: 'Government Grants Guidance',
    desc: 'Get expert guidance to secure government grants and financial aid like RKVY-RAFTAAR and PMFME schemes.',
  },
  {
    icon: ShieldCheck,
    title: 'Credibility Certifications',
    desc: 'Ensure compliance and build credibility with ISO, ZED Manufacturing, FSSAI licenses, and DUNS credentials.',
  },
  {
    icon: Globe,
    title: 'Digital Business Solutions',
    desc: 'Establish your online presence with custom website development, platform listings like GEM, and marketing.',
  },
];

const WhatYoullLearn = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % learnItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="learn" className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <p className="text   text-gold font-medium mb-2">
            OUR EXPERTISE
          </p>

          <h2 className="font-display max-w   mx-auto text-4xl drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink mb-5">
            How We Support <span className='text-gold'>Your Startup</span>
          </h2>

          <p className="text-gray-800 mt-4 ">
            Empowering entrepreneurs with comprehensive support across growth, funding, digital solutions, and compliance.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6">
          {learnItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = i === activeIndex;

            return (
              <div
                key={i}
                className={`group relative overflow-hidden p-8 h-60 border mx-4 my-4 text-center     border-gold transition-all duration-500
                
                hover:shadow   hover:-translate-y-2
                ${isActive ? "shadow   -translate-y-2" : ""}
                ${i < 3 ? "md:col-span-2" : "md:col-span-3"}
              `}
              >

                {/* BACKGROUND (FIXED FOR AUTO HOVER) */}
                <div
                  className={`absolute inset-0 transition duration-500 ${isActive
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                    }`}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-gold to-blue-950" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center mb-6 mx-auto  -md transition-all duration-300
                    
                    ${isActive
                        ? "bg-gold scale-110"
                        : "bg-gray-900 group-hover:bg-gold  group-hover:scale-110"
                      }
                  `}
                  >
                    <Icon size={22} className="text-white" />
                  </div>

                  {/* TITLE */}
                  <h3
                    className={`text   font-semibold mb-3 leading-tight transition
                    ${isActive
                        ? "text-white"
                        : "text-gray-900 group-hover:text-white"
                      }
                  `}
                  >
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className={`text-sm leading-relaxed transition
                    ${isActive
                        ? "text-white"
                        : "text-gray-600 group-hover:text-white"
                      }
                  `}
                  >
                    {item.desc}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatYoullLearn;