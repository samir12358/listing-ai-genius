
import React from 'react';

const GlobalAccess = () => {
  return (
    <section id="global-access" className="py-16 md:py-24 bg-gradient-to-r from-indiahub-blue to-indiahub-teal text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reach Buyers Around The World
          </h2>
          <p className="text-xl mb-12 text-white/80">
            Your products, available globally with AI-powered listings optimized for international markets
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {['North America', 'Europe', 'Middle East', 'Asia Pacific'].map((region, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌎</span>
                </div>
                <h3 className="font-medium">{region}</h3>
              </div>
            ))}
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">
              Join 10,000+ Indian Suppliers Already Using AllIndiaHub.ai
            </h3>
            <p className="mb-6">
              From small artisans in Jaipur to large manufacturers in Chennai - our AI tools help businesses of all sizes reach international markets.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="h-12 bg-white/20 rounded-md flex items-center justify-center">
                  <span className="text-xs font-medium">Partner {num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalAccess;
