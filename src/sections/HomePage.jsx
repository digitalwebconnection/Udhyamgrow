
import Header from '../Header';
import Hero from './Hero';
import Footer from '../Footer';
import {
  WhatYoullLearn,
  About,
  WhyAttend,
  Services,
  SchemesDirectory,
  ExportServices,
  WhyChoose,
  Process,
  Reviews,
  DoDont,
} from '.';

const HomePage = () => {
  return (
    <>
      {/* Header Navigation */}
      <Header />

      {/************Main Content*********** */}

      {/* Hero / Registration Section */}
      <Hero />

      {/* What You'll Learn Section */}
      <WhatYoullLearn />

      {/* About Section */}
      <About />

      {/* Why Attend Section */}
      <WhyAttend />

      {/* Services Section */}
      <Services />

      {/* Export & International Expansion Section */}
      <ExportServices />

      {/* Why Choose Section */}
      <WhyChoose />

      {/* Schemes Directory Section */}
      <SchemesDirectory />
      
      {/* Process Section */}
      <Process />

      {/* Reviews / Testimonials Section */}
      <Reviews />

      {/* Do's and Don'ts Section */}
      <DoDont />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
