
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import AITools from '@/components/AITools';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import GlobalAccess from '@/components/GlobalAccess';
import Footer from '@/components/Footer';
import ListingTool from '@/components/ListingTool';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <AITools />
        <ListingTool />
        <Testimonials />
        <Pricing />
        <GlobalAccess />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
