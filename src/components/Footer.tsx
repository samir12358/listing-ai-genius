
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-indiahub-blue mb-4">
              AllIndia<span className="text-indiahub-teal">Hub.ai</span>
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              India's smart B2B supplier platform powered by AI
            </p>
            <div className="flex space-x-3">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-indiahub-teal hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-indiahub-blue mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">For Suppliers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">For E-commerce</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">For Marketplace</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-indiahub-blue mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-indiahub-blue mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">Documentation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">Partner Program</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-indiahub-blue mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indiahub-teal">Cookie Policy</a></li>
              <li>
                <div className="flex items-center mt-4">
                  <select
                    className="form-select text-sm bg-gray-100 border-0 rounded py-1 px-2 text-gray-500"
                    defaultValue="en"
                  >
                    <option value="en">English</option>
                    <option value="hi">हिन्दी</option>
                    <option value="ta">தமிழ்</option>
                    <option value="te">తెలుగు</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AllIndiaHub.ai. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
