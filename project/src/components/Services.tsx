import React from 'react';
import { Ship, Plane, Truck, Package, FileText, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: 'Ocean Freight',
      description: 'Cost-effective sea freight solutions for large volume shipments with full container load (FCL) and less container load (LCL) options.',
      features: ['FCL & LCL Services', 'Port-to-Port Delivery', 'Container Tracking']
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast and reliable air cargo services for time-sensitive shipments with express and standard delivery options.',
      features: ['Express Delivery', 'Temperature Controlled', 'Real-time Tracking']
    },
    {
      icon: Truck,
      title: 'Land Transport',
      description: 'Comprehensive road and rail freight services connecting major trade routes across continents.',
      features: ['Cross-border Transport', 'Last-mile Delivery', 'Bulk Cargo Handling']
    },
    {
      icon: FileText,
      title: 'Customs Clearance',
      description: 'Expert customs brokerage services ensuring smooth clearance of your goods through complex regulatory requirements.',
      features: ['Import/Export Documentation', 'Duty Optimization', 'Compliance Management']
    },
    {
      icon: Package,
      title: 'Warehousing',
      description: 'Secure storage and distribution services with modern facilities and inventory management systems.',
      features: ['Climate Controlled Storage', 'Inventory Management', 'Pick & Pack Services']
    },
    {
      icon: Clock,
      title: 'Project Logistics',
      description: 'Specialized handling of oversized, heavy lift, and complex project cargo with end-to-end solutions.',
      features: ['Heavy Lift Cargo', 'Route Surveys', 'Project Management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From air and sea freight to customs clearance and warehousing, 
            we provide end-to-end logistics solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200">
                <div className="bg-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;