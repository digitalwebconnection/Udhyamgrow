import { Ship, Globe, FileText, CheckCircle, Briefcase } from 'lucide-react';

const exportSteps = [
  {
    title: "Market Research",
    desc: "Conducting in-depth analysis for market entry strategies to target high-potential regions.",
  },
  {
    title: "Regulatory Compliance",
    desc: "Guiding businesses through complex international trade regulations and compliance checks.",
  },
  {
    title: "Documentation",
    desc: "Ensuring smooth & timely shipments through proper export documentation and licenses.",
  },
  {
    title: "Logistics Coordination",
    desc: "Coordinating with trusted freight and logistics providers for efficient shipping.",
  },
  {
    title: "Financial Assistance",
    desc: "Providing access to export-specific government grants and subsidies for international expansion.",
  },
];

const ExportServices = () => {
  return (
    <section id="export" className="bg-white py-8 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Expansion steps */}
          <div>
            <div className="flex items-center gap-3  mb-4">
              <span className="gold-rule" />
              <span className="section-header-eyebrow">GLOBAL EXPORT SERVICES</span>
              <span className="gold-rule" />
            </div>

            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.2] tracking-tight text-ink mb-6">
              Steps to Successful <br />
              <span className="text-gold">International Expansion</span>
            </h2>

            <p className="text-gray-600 mb-10 max-w  ">
              At Udhyamgrow Services, we provide end-to-end support to businesses looking to expand into global markets. Our export services ensure that startups have all the resources, expertise, and strategies they need to succeed internationally, especially in European and global markets.
            </p>

            {/* Steps timeline */}
            <div className="relative pl-6 border-l border-gold/45 space-y-4">
              {exportSteps.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Step bullet */}
                  <div className="absolute left-[-31px] top-1.5 w-4.5 h-4.5  -full border-2 border-gold bg-white group-hover:bg-gold transition-colors duration-300" />

                  <h4 className="font-display text  font-semibold text-ink group-hover:text-gold transition-colors duration-300 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Why Choose Udhyamgrow for Export */}
          <div
            className="relative bg-ink p-10 md:p-14 overflow-hidden     shadow-lg shadow-black/50   "
            style={{
              background: 'radial-gradient(ellipse at 80% 20%, rgba(184,145,58,0.15) 0%, #0A0A0A 70%)',
            }}
          >
            <h3 className="font-display text-3xl text-white mb-8">
              Why Choose Udhyamgrow <br />
              <span className="text-gold">for Export Services?</span>
            </h3>

            <div className="space-y-8">
              {[
                {
                  icon: Globe,
                  title: "End-to-End Support",
                  desc: "From initial market research and product certifications to logistics setup and government funding, we provide a complete, comprehensive export solution.",
                },
                {
                  icon: Ship,
                  title: "Global Network Connections",
                  desc: "Our connections with industry leaders, international regulators, and financial institutions worldwide ensure that you get the best global trade opportunities.",
                },
                {
                  icon: CheckCircle,
                  title: "Expert Trade Guidance",
                  desc: "With deep expertise in international trade, custom tariffs, and export compliance, we guide your business through every stage of the global journey.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10  -md bg-gold/10 border border-gold/40 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-display text  text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
              <div className="text-gold font-display text   italic">
                Expanding your reach beyond borders.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExportServices;
