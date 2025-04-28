
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Upload Product Image",
      description: "Take a photo or upload an existing image of your product",
      icon: (
        <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl font-bold">
          1
        </div>
      ),
    },
    {
      id: 2,
      title: "AI Generates Listing",
      description: "Our AI creates title, description, features, and enhances product images",
      icon: (
        <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl font-bold">
          2
        </div>
      ),
    },
    {
      id: 3,
      title: "Export or Publish",
      description: "Download as PDF/CSV or publish directly to your online store",
      icon: (
        <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl font-bold">
          3
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Creating perfect product listings is now as simple as taking a photo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-6 mt-6">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-indiahub-blue">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
            {/* Placeholder for video/carousel - in a real implementation, you would use a video player or carousel component */}
            <div className="bg-gray-200 h-64 md:h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indiahub-teal/90 text-white cursor-pointer hover:bg-indiahub-teal transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="mt-4 text-gray-500 text-sm">Watch Demo Video</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
