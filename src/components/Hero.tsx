import React from 'react';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">Built on Trust,</span>
              <span className="text-blue-800 block">Delivered with Care</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your trusted global logistics partner. We deliver comprehensive freight 
              forwarding solutions with unmatched reliability, transparency, and care 
              for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-200 flex items-center justify-center group">
                Get Instant Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-700 hover:text-blue-700 transition-colors duration-200">
                Track Shipment
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Globe className="h-10 w-10 text-blue-700 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
              <p className="text-gray-600">Extensive network spanning across 150+ countries worldwide.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Shield className="h-10 w-10 text-emerald-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Insured</h3>
              <p className="text-gray-600">Full insurance coverage and secure handling of your cargo.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Zap className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Processing</h3>
              <p className="text-gray-600">Quick customs clearance and expedited shipping solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;