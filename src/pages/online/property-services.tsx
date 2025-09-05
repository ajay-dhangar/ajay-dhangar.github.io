import React from 'react';
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiArrowLeft, 
  FiMap, 
  FiHome, 
  FiFileText, 
  FiDollarSign, 
  FiClipboard, 
  FiCheckSquare 
} from 'react-icons/fi';

const PropertyServices = () => {
  const services = [
    {
      icon: FiMap,
      title: 'Land Records & Registration',
      description: 'Access, verify, and register land-related records with official authorities.',
      features: ['Ownership verification', 'Land registration', 'Mutation updates', 'Encumbrance certificate']
    },
    {
      icon: FiHome,
      title: 'Housing & Real Estate',
      description: 'Support for property purchase, sale, and housing development schemes.',
      features: ['PM Awas Yojana guidance', 'Housing loan assistance', 'Sale/purchase documentation', 'Subsidy applications']
    },
    {
      icon: FiFileText,
      title: 'Property Documentation',
      description: 'Assistance with legal property documents, deeds, and agreements.',
      features: ['Sale deed drafting', 'Lease/rental agreements', 'Gift/partition deeds', 'Will registration']
    },
    {
      icon: FiDollarSign,
      title: 'Property Tax Services',
      description: 'Calculate, pay, and manage property taxes with ease.',
      features: ['Property tax assessment', 'Online tax payment', 'Receipt generation', 'Penalty calculations']
    },
    {
      icon: FiClipboard,
      title: 'Building Permits & Approvals',
      description: 'Secure necessary permits for construction and renovation projects.',
      features: ['Building plan approvals', 'Construction permits', 'Renovation clearances', 'Completion certificates']
    },
    {
      icon: FiCheckSquare,
      title: 'Legal & Compliance Support',
      description: 'Ensure your property is legally secure with compliance checks.',
      features: ['Encumbrance verification', 'Legal due diligence', 'Dispute resolution', 'Title clearance']
    }
  ];

  return (
    <Layout
      title="Property Services"
      description="Comprehensive support for land records, housing schemes, property tax, registration, and legal compliance."
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
        <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to="/online/more" 
                className="inline-flex items-center text-teal-200 hover:text-white mb-6 transition-colors"
              >
                <FiArrowLeft className="mr-2" />
                Back to More Services
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Property Services</h1>
              <p className="text-xl text-teal-100 leading-relaxed max-w-4xl">
                We provide trusted support for all your property needs including land records, 
                housing, property tax, documentation, and building permits — making your property 
                transactions simple and secure.
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
                    <service.icon className="h-12 w-12 text-teal-600 mr-4" />
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
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-3 flex-shrink-0"></span>
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
                Our Property Service Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We simplify property management and legal procedures with our step-by-step guidance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Consultation', desc: 'Discuss property-related needs and required documents' },
                { step: '02', title: 'Verification', desc: 'Verify land records and legal documents' },
                { step: '03', title: 'Application Support', desc: 'Process applications for registration, permits, or tax' },
                { step: '04', title: 'Delivery', desc: 'Receive your property documents, approvals, or certificates' }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
        <section className="section-padding bg-gradient-to-r from-teal-600 to-teal-800 text-white">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Assistance With Property Services?
              </h2>
              <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                From land records to building permits, our experts ensure smooth, 
                transparent, and hassle-free property services for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="#" className="btn-primary bg-white text-teal-600 hover:bg-gray-100">
                  Contact Us Now
                </Link>
                <a href="tel:+917024592105" className="btn-secondary border-white text-white hover:bg-white hover:text-teal-600">
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

export default PropertyServices;