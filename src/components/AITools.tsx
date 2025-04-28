
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AITools = () => {
  const tools = [
    {
      id: 1,
      title: "Smart Product Listing Generator",
      description: "Upload a photo and get a complete listing with SEO-friendly title, simple description, and key features",
      badge: null,
      isAvailable: true,
    },
    {
      id: 2,
      title: "Trend Detector",
      description: "Find what's popular in your category and optimize your listings to match market trends",
      badge: "Coming Soon",
      isAvailable: false,
    },
    {
      id: 3,
      title: "Smart MOQ + Margin Calculator",
      description: "Calculate the best minimum order quantity and pricing based on your costs and market data",
      badge: null,
      isAvailable: true,
    },
    {
      id: 4,
      title: "Virtual Model Try-On",
      description: "Show how garments look on different body types with AI model generation",
      badge: "Coming Soon",
      isAvailable: false,
    },
    {
      id: 5,
      title: "Voice-to-Listing AI",
      description: "Just talk about your product and get a complete listing - perfect for busy suppliers",
      badge: "Coming Soon",
      isAvailable: false,
    },
  ];

  return (
    <section id="ai-tools" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            AI Tools for Suppliers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful AI tools to help you list products faster, better, and with less effort
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Card key={tool.id} className="border border-gray-200 hover:border-indiahub-teal/50 transition-colors">
              <CardContent className="p-6 pt-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-indiahub-blue">{tool.title}</h3>
                  {tool.badge && (
                    <Badge variant="outline" className="bg-indiahub-orange/10 text-indiahub-orange border-indiahub-orange/20">
                      {tool.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-gray-600 mt-2">{tool.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button 
                  className={`w-full ${tool.isAvailable ? 'bg-indiahub-teal hover:bg-indiahub-blue' : 'bg-gray-300 hover:bg-gray-400 cursor-not-allowed'} transition-colors`}
                  disabled={!tool.isAvailable}
                >
                  {tool.isAvailable ? 'Try Now' : 'Coming Soon'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITools;
