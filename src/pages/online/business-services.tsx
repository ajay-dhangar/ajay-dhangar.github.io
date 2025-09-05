import React from 'react';
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiBriefcase, FiFileText, FiTrendingUp, FiGlobe, FiCreditCard, FiUsers } from 'react-icons/fi';

const BusinessServices = () => {
  const services = [
    {
      icon: FiBriefcase,
      title: 'Entrepreneurship Support',
      description: 'Guidance and resources for aspiring entrepreneurs to start and grow their ventures.',
      features: ['Startup mentorship', 'Business registration help', 'Idea incubation', 'Entrepreneurship training']
    },
    {
      icon: FiFileText,
      title: 'Trade & Business Licenses',
      description: 'Facilitation of legal documents, trade permits, and industry licenses.',
      features: ['Trade license applications', 'Udyam/MSME registration', 'Shop establishment license', 'Renewals & compliance']
    },
    {
      icon: FiTrendingUp,
      title: 'MSME & Startup Schemes',
      description: 'Financial and policy support for small businesses and startups.',
      features: ['MSME loans & subsidies', 'Startup India schemes', 'Skill development support', 'Cluster development']
    },
    {
      icon: FiGlobe,
      title: 'Digital Business Growth',
      description: 'Helping local businesses expand their reach through digital transformation.',
      features: ['E-commerce setup', 'Digital marketing support', 'Online branding', 'Website development guidance']
    },
    {
      icon: FiCreditCard,
      title: 'Tax & GST Services',
      description: 'Support with GST registration, filing, and taxation guidance.',
      features: ['GST registration', 'GST return filing', 'Business tax advisory', 'Digital payment setup']
    },
    {
      icon: FiUsers,
      title: 'Skill & Employment Programs',
      description: 'Capacity building programs to create skilled workforce for industries.',
      features: ['Vocational training', 'Industry workshops', 'Apprenticeships', 'Employment support']
    }
  ];

  return (
    <Layout
      title="Business Services"
      description="Comprehensive support for entrepreneurs, MSMEs, startups, taxation, and digital growth."
    >
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991"
          crossOrigin="anonymous"
        />
        <meta
          name="google-site-verification"
          content="rn58c9eOt8ij52CdcS8Lk4rx-8yUCjCkRsCDrycQfW4"
        />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to="/online/more" 
                className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
              >
                <FiArrowLeft className="mr-2" />
                Back to More Services
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Services</h1>
              <p className="text-xl text-indigo-100 leading-relaxed max-w-4xl">
                We empower entrepreneurs, MSMEs, and startups by providing end-to-end 
                business support — from trade licenses and GST to digital growth and 
                financial schemes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-8"
                >
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-indigo-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Business Support Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We simplify business setup and growth through a step-by-step approach.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Consultation', desc: 'Discuss your business idea and requirements' },
                { step: '02', title: 'Registration', desc: 'Assist with trade, GST, and compliance' },
                { step: '03', title: 'Growth Support', desc: 'Provide financial, digital, and training resources' },
                { step: '04', title: 'Sustainability', desc: 'Ensure compliance and long-term business success' }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {process.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start or Grow Your Business?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Our experts are here to guide you in entrepreneurship, licensing, 
                taxation, and digital business expansion. Connect with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="#" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100">
                  Contact Us Now
                </Link>
                <a href="tel:+917024592105" className="btn-secondary border-white text-white hover:bg-white hover:text-indigo-600">
                  Call +91 70245 92105
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BusinessServices;