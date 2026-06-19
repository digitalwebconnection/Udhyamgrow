import React from 'react';
import Header from '../Header';
import Hero from './Hero';
import Footer from '../Footer';
import {
  SectionHeader,
  WhatYoullLearn,
  Hosts,
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
    <div className="min-h-screen flex flex-col">
      {/* Header Navigation */}
      <Header />

      {/************Main Content*********** */}

      {/* Hero / Registration Section */}
      <Hero />

      {/* What You'll Learn Section */}
      <WhatYoullLearn />

      {/* Hosts Section */}
      <Hosts />

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
    </div>
  );
};

export default HomePage;
