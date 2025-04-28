
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Fashion Exports Ltd",
      location: "Mumbai",
      quote: "This tool saved us hours of work! We can now list 10x more products in the same time and the AI descriptions are perfect for our international buyers.",
      avatar: "/placeholder.svg",
      initials: "RK",
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Handcraft Collective",
      location: "Jaipur",
      quote: "As a small business from Jaipur, we found it difficult to create professional listings. Now our products look just as good as big companies!",
      avatar: "/placeholder.svg",
      initials: "PS",
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "Footwear World",
      location: "Agra",
      quote: "The dynamic size feature is perfect for our shoe business. One click and our entire inventory is ready for online marketplaces.",
      avatar: "/placeholder.svg",
      initials: "AP",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Trusted by Indian Suppliers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how businesses across India are growing with our AI tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="h-12 w-12 border-2 border-indiahub-teal">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-indiahub-blue text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-indiahub-blue">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                    <div className="text-xs text-gray-400">{testimonial.location}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-indiahub-blue">
            Featured Supplier Products
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 relative">
                  {/* Placeholder for product image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-3 bg-white">
                  <h4 className="font-medium text-sm truncate">Product Showcase {item}</h4>
                  <p className="text-xs text-gray-500 truncate">Listed with AllIndiaHub.ai</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
