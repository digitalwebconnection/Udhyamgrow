import React, { useState } from 'react';
import { Landmark, FileCheck, ShieldAlert, Award, FileText, CheckCircle2 } from 'lucide-react';

const directoryData = {
  registrations: {
    title: "Company Registrations",
    icon: Landmark,
    items: [
      { name: "Private Limited Company", desc: "Incorporation of Pvt Ltd entities for startups seeking equity funding." },
      { name: "Limited Liability Partnership", desc: "LLP registration combining partner flexibility with limited liability." },
      { name: "Partnership Firm (Form G)", desc: "Partnership firm registration under Gujarat state rules." },
      { name: "Section 8 Company", desc: "Registration of non-profit organizations and charitable institutions." },
      { name: "NGO Darpan Registration", desc: "Enrolling NGOs under NITI Aayog for government project eligibility." },
      { name: "12A & 80G Registrations", desc: "Obtaining tax exemptions on donations for charitable trusts." },
      { name: "CSR-I Registration", desc: "Registering entities to undertake Corporate Social Responsibility projects." },
      { name: "GEM Registration", desc: "Listing on Government e-Marketplace to participate in govt bidding." },
      { name: "Shram Suvidha Portal", desc: "One-stop registration for labor law compliance and licensing." },
    ]
  },
  funding: {
    title: "Funding & Loans",
    icon: Award,
    items: [
      { name: "Startup India Seed Fund", desc: "Financial assistance for early-stage proof of concept, trials, and market entry." },
      { name: "PMEGP Funding Support", desc: "Prime Minister Employment Generation Programme with up to 35% subsidies." },
      { name: "MUDRA Scheme (PMMY)", desc: "Collateral-free business loans up to ₹10 Lakhs for MSMEs." },
      { name: "RKVY-RAFTAAR Grants", desc: "Agri-business grants and incubation funding for agricultural startups." },
      { name: "PMFME Scheme", desc: "Micro Food Processing grants with capital subsidies for machinery and setup." },
      { name: "NIDHI PRAYAS Program", desc: "Grants up to ₹10 Lakhs to transform innovative ideas into working prototypes." },
      { name: "National Agri Infra Financing", desc: "Interest subvention and credit guarantee support for agri-infra projects." },
      { name: "NEEDS & UYEGP Schemes", desc: "State-specific subsidies and financial assistance programs for entrepreneurs." },
      { name: "Venture Capital Support", desc: "Connecting scalable startups with equity seed support and venture funds." },
    ]
  },
  certifications: {
    title: "Growth Certifications",
    icon: FileCheck,
    items: [
      { name: "Startup India Recognition", desc: "Unlocks tax exemptions, intellectual property support, and easy compliance." },
      { name: "Form 80-IAC Tax Exemption", desc: "Allows startups to claim 100% tax exemption for 3 consecutive years." },
      { name: "Udyam MSME Certificate", desc: "Unlocks credit guarantees, subsidy eligibility, and priority sector lending." },
      { name: "ZED Certification", desc: "Zero Defect Zero Effect rating scheme for MSMEs to improve manufacturing quality." },
      { name: "ISO Certification", desc: "International standardization for quality control, security, and operations." },
      { name: "DUNS / DRS-Plus Registration", desc: "Global identification numbers demonstrating business creditworthiness." },
      { name: "FSSAI License Assistance", desc: "Ensuring compliance with food safety regulations and packaging standards." },
      { name: "SPR Scheme (NSIC)", desc: "Single Point Registration for government procurement and tender exemptions." },
      { name: "IEC Code (Import Export)", desc: "Mandatory Import Export Code registration for global trade expansion." },
    ]
  }
};

const SchemesDirectory = () => {
  const [activeTab, setActiveTab] = useState("funding");

  const activeData = directoryData[activeTab];
  const Icon = activeData.icon;

  return (
    <section id="directory" className="bg-ivory py-6 lg:py-10 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-sm md:text  text-gold font-medium mb-2">
            SCHEME & PROGRAM DIRECTORY
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink mb-4">
            Programs & Schemes <span className="text-gold">We Support</span>
          </h2>
          <p className="text-gray-800 mt-3 text-sm sm:text-md">
            Explore the comprehensive list of government schemes, business certifications, and registrations we help you secure.
          </p>
        </div>

        {/* TABS SELECTOR */}
        <div className="flex justify-center mb-12 border-b border-gray-200 max-w  mx-auto">
          {Object.keys(directoryData).map((tabKey) => {
            const isTabActive = activeTab === tabKey;
            const tabName = tabKey === "registrations" ? "Registrations" : tabKey === "funding" ? "Funding & Loans" : "Certifications";

            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`flex-1 pb-4 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 relative ${isTabActive ? "text-gold border-b-2 border-gold" : "text-gray-800 hover:text-ink"
                  }`}
              >
                {tabName}
              </button>
            );
          })}
        </div>

        {/* ACTIVE TABS CONTENT */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeData.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-gold/55 hover:border-gold hover:shadow shadow-lg shadow-black/50  transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8  -full bg-gold/10 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-gold" />
                  </div>
                  <h4 className="font-display text  font-bold text-ink leading-tight">
                    {item.name}
                  </h4>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER NOTICE */}
        <div className="mt-12 text-center text-sm text-gray-700">
          * And many more schemes. If you do not see a specific scheme listed, contact us to check eligibility.
        </div>

      </div>
    </section>
  );
};

export default SchemesDirectory;
