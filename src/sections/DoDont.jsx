import { CheckCircle2, XCircle } from 'lucide-react';

const doItems = [
  'We guide with complete honesty & transparency',
  'We recommend schemes based on your long-term business goals',
  'We support you at every stage of registration & funding',
  'We simplify complex compliance processes into clear, manageable steps',
];

const dontItems = [
  "We don't demand equity in your business for our support",
  "We don't hide terms or charge secret consultation fees",
  "We don't make fake promises or guarantees about funding approvals",
  "We don't compromise on regulatory compliance and documentation standards",
];

const DoDont = () => (
  <section id="philosophy" className="bg-ivory py-8 lg:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="text-center max-w-7xl mx-auto  mb-16">
        <p className="text-sm md:text  text-gold font-medium mb-2">
          OUR PHILOSOPHY
        </p>
        <h2 className="font-display   text-3xl drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)]  sm:text-5xl lg:text-5xl leading-[1.05] tracking-tight text-ink mb-5">
          The Right Decision, <span className='text-gold '> Not The Fastest One</span>
        </h2>

      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        {/* What we do */}
        <div data-testid="what-we-do" className="bg-white border border-gold/40 p-5 md:p-10 shadow-lg  shadow-black/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10  -md bg-gold/10 border border-gold flex items-center justify-center">
              <CheckCircle2 size={20} className="text-gold" />
            </div>
            <h3 className="font-display text    text-ink">What we do</h3>
          </div>
          <ul className="flex flex-col gap-4">
            {doItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-0.5 shrink-0">✔</span>
                <span className="text-sm text-gray-800 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What we don't */}
        <div data-testid="what-we-dont-do" className="bg-ink p-5 md:p-10 shadow-lg  shadow-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 border  -md border-white/40 flex items-center justify-center">
              <XCircle size={20} className="text-white/90" />
            </div>
            <h3 className="font-display text    text-white">What we don't do</h3>
          </div>
          <ul className="flex flex-col gap-4">
            {dontItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-white/90 mt-0.5 shrink-0">✖</span>
                <span className="text-sm text-white/90 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center  text  md:text    text-gray-800 ">
        We believe in making the{' '}
        <span className="text-gold">right decision</span> for your startup's sustainable growth.
      </p>
    </div>
  </section>
);

export default DoDont;
