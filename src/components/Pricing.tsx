
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      id: "free",
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out the platform",
      features: [
        "3 product uploads",
        "Basic AI listing generation",
        "Standard image enhancement",
        "PDF export",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      id: "basic",
      name: "Basic",
      price: "₹499",
      period: "/month",
      description: "For growing B2B suppliers",
      features: [
        "50 product uploads",
        "Advanced AI listing with SEO",
        "Premium image enhancement",
        "PDF & CSV export",
        "Basic analytics",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      id: "pro",
      name: "Pro",
      price: "₹1,999",
      period: "/month",
      description: "For serious B2B sellers",
      features: [
        "Unlimited product uploads",
        "Expert-level AI listing with SEO",
        "Advanced image enhancement",
        "All export formats",
        "Partner widget included",
        "Priority support",
      ],
      cta: "Go Pro",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl overflow-hidden border ${
                plan.popular
                  ? "border-indiahub-teal shadow-lg shadow-indiahub-teal/10"
                  : "border-gray-200"
              } transition-all hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="bg-indiahub-teal py-1.5 px-4 text-white text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-indiahub-blue">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="ml-1 text-gray-500">{plan.period}</span>}
                </div>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="flex-shrink-0 h-5 w-5 text-indiahub-teal" />
                      <span className="ml-3 text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-indiahub-teal hover:bg-indiahub-blue"
                        : "bg-indiahub-blue/80 hover:bg-indiahub-blue"
                    } transition-colors`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-indiahub-blue mb-3">
            Need Enterprise Solution?
          </h3>
          <p className="text-gray-600 mb-6">
            We offer custom pricing for large businesses with high volume needs.
            Get priority support, custom features, and bulk onboarding assistance.
          </p>
          <Button variant="outline" className="border-indiahub-teal text-indiahub-teal hover:bg-indiahub-teal hover:text-white">
            Contact for Enterprise Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
