import React from 'react';

const Stats = () => {
   const stats = [
    { number: '500+', label: 'Happy Clients', description: 'Businesses trust us globally' },
    { number: '150+', label: 'Countries Served', description: 'Worldwide coverage' },
    { number: '10K+', label: 'Shipments Delivered', description: 'Successfully completed' },
    { number: '99.8%', label: 'On-Time Delivery', description: 'Reliability you can count on' }
  ];

  return (
    <section className="py-16 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-blue-100 text-lg">
            Our track record speaks for itself
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-blue-100 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-blue-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

 export default Stats;