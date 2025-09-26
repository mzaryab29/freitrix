import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Supply Chain Director',
      company: 'TechFlow Industries',
      content: 'Freitrix has transformed our international shipping operations. Their attention to detail and proactive communication have made them our go-to logistics partner.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Import/Export Manager',
      company: 'Global Trade Solutions',
      content: 'The customs clearance process used to be our biggest headache. Freitrix made it seamless and hassle-free. Highly recommend their services!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Operations Manager',
      company: 'Coastal Manufacturing',
      content: 'Reliable, professional, and cost-effective. Freitrix consistently delivers on their promises and has helped us expand our global reach.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it – hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl relative">
              <Quote className="h-8 w-8 text-blue-700 mb-4 opacity-50" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                    <p className="text-sm text-blue-700">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;