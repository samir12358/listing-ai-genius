
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-hero-pattern text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indiahub-blue to-indiahub-teal opacity-90"></div>
      <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              List Products Like a Pro. 
              <span className="block text-indiahub-gold">Let AI Do It For You.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-white/80">
              Upload a photo, AI does the rest. Get perfect product listings with SEO-friendly titles, 
              simple descriptions, and enhanced images - all in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-indiahub-orange hover:bg-indiahub-gold text-indiahub-dark font-medium">
                Try It Now - Free
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative h-80 w-80 md:h-96 md:w-96 mx-auto">
              {/* Main image - product photo */}
              <div className="absolute left-0 right-0 mx-auto h-64 w-64 md:h-80 md:w-80 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="animate-pulse-slow">
                  <div className="h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <svg className="h-24 w-24 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 -right-2 bg-white p-3 rounded shadow-lg max-w-[180px] animate-bounce">
                <p className="text-xs font-semibold text-indiahub-blue">Title: Premium Leather Shoes</p>
              </div>
              
              <div className="absolute top-1/2 -right-4 bg-white p-3 rounded shadow-lg max-w-[200px]">
                <p className="text-xs text-indiahub-blue">
                  <span className="font-semibold">Description:</span> Comfortable, durable leather shoes for everyday use.
                </p>
              </div>
              
              <div className="absolute bottom-5 -right-2 bg-white p-3 rounded shadow-lg max-w-[180px] animate-pulse">
                <ul className="text-xs text-indiahub-blue">
                  <li className="font-semibold">Features:</li>
                  <li>✓ Genuine Leather</li>
                  <li>✓ Cushioned Insole</li>
                </ul>
              </div>
              
              <div className="absolute -bottom-2 left-10 bg-white p-2 rounded shadow-lg">
                <p className="text-xs font-semibold text-indiahub-teal">AI Generated ✨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#fff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,74.7C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
