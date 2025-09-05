import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiDollarSign, FiBook, FiHeart, FiBriefcase, FiUsers } from 'react-icons/fi';

const More = () => {
  const additionalPages = [
    {
      icon: FiUsers,
      title: 'Panchayat Services',
      description: 'Land records, society tax, SHG banking, and rural development services',
      link: '/panchayat-services',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: FiDollarSign,
      title: 'Banking & Finance',
      description: 'Account opening, loans, insurance, and comprehensive financial services',
      link: '/banking-services',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiBook,
      title: 'Education & Skills',
      description: 'Online forms, admissions, skill development, and educational support',
      link: '/education-services',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiHeart,
      title: 'Healthcare Services',
      description: 'Medical cards, health insurance, hospital appointments, and wellness programs',
      link: '/healthcare-services',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FiBriefcase,
      title: 'Business Services',
      description: 'Registration, compliance, taxation, and complete business support solutions',
      link: '/business-services',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FiHome,
      title: 'Property Services',
      description: 'Registration, verification, documentation, and real estate assistance',
      link: '/property-services',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">More Services</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Explore our comprehensive range of specialized service categories. Each section 
              offers detailed information and support for specific areas of digital services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalPages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={page.link} className="block">
                  <div className="card overflow-hidden h-full">
                    <div className={`h-2 bg-gradient-to-r ${page.color}`}></div>
                    <div className="p-8">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${page.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <page.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {page.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {page.description}
                      </p>
                      
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        Explore Services →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              We offer many more services beyond what's listed here. Contact us to discuss 
              your specific needs and we'll be happy to help you find the right solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="tel:+919876543210" className="btn-secondary">
                Call +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default More;