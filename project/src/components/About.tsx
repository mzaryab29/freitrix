import React from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering superior service quality in every shipment.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships with clients based on trust and reliability.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Accurate handling and timely delivery of your valuable cargo.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to optimize logistics solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Logistics Partner Since Day One
            </h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                At Freitrix, we believe that trust is the foundation of every successful 
                partnership. Built on trust and delivered with care, we understand that 
                every shipment represents your business's promise to your customers.
              </p>
              <p className="mb-4">
                Whether you're a growing business expanding globally or an established 
                corporation managing complex supply chains, we're here to make logistics 
                seamless, transparent, and stress-free.
              </p>
              <p>
                Our commitment to care extends beyond just moving cargo – we care about 
                your business success, your deadlines, and your peace of mind throughout 
                the entire logistics journey.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-emerald-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-amber-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">15+</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Expert Team</p>
                <p className="text-sm text-gray-500">Logistics professionals ready to help</p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Icon className="h-10 w-10 text-blue-700 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;