import React from 'react';
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMap, FiDollarSign, FiUsers, FiFileText, FiHome, FiTrendingUp } from 'react-icons/fi';

const PanchayatServices = () => {
  const services = [
    {
      icon: FiMap,
      title: 'Land Records & Revenue',
      description: 'Access and update land records, khatauni, khasra numbers, and revenue documents',
      features: ['Land ownership verification', 'Mutation applications', 'Revenue record updates', 'Property documentation']
    },
    {
      icon: FiDollarSign,
      title: 'Society Tax Services',
      description: 'House tax, property tax calculations, and payment processing for rural areas',
      features: ['Property tax assessment', 'Online tax payment', 'Tax receipt generation', 'Penalty calculations']
    },
    {
      icon: FiUsers,
      title: 'SHG Banking Support',
      description: 'Self Help Group banking, loan applications, and financial assistance programs',
      features: ['SHG account opening', 'Loan application support', 'Subsidy applications', 'Financial literacy']
    },
    {
      icon: FiFileText,
      title: 'Rural Certificates',
      description: 'Income certificates, caste certificates, and domicile certificates for rural residents',
      features: ['Income certificate', 'Caste certificate', 'Domicile certificate', 'Character certificate']
    },
    {
      icon: FiHome,
      title: 'Housing Schemes',
      description: 'PM Awas Yojana, housing loans, and rural development scheme applications',
      features: ['PM Awas Yojana applications', 'Rural housing loans', 'Construction permits', 'Subsidy processing']
    },
    {
      icon: FiTrendingUp,
      title: 'Development Programs',
      description: 'MGNREGA, skill development, and rural employment scheme registrations',
      features: ['MGNREGA job cards', 'Skill training programs', 'Employment generation', 'Rural development']
    }
  ];

  return (
    <Layout
          title="Panchayat Services"
          description="Comprehensive support for rural and panchayat-level services including land records, society tax, SHG banking, and rural development programs."
        >
          <Head>
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991"
              crossOrigin="anonymous"
            />
            <script
              async
              custom-element="amp-auto-ads"
              src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
            />
            <meta
              name="google-site-verification"
              content="rn58c9eOt8ij52CdcS8Lk4rx-8yUCjCkRsCDrycQfW4"
            />
          </Head>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/online/more" 
              className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Back to More Services
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Panchayat Services</h1>
            <p className="text-xl text-emerald-100 leading-relaxed max-w-4xl">
              Comprehensive support for rural and panchayat-level services. We help you navigate 
              land records, society taxes, SHG banking, and various rural development programs 
              with ease and accuracy.
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
                  <service.icon className="h-12 w-12 text-emerald-600 mr-4" />
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
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 flex-shrink-0"></span>
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
              How We Help With Panchayat Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined process ensures you get the rural and panchayat services you need quickly and efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Document Review', desc: 'We verify all required documents and information' },
              { step: '02', title: 'Application Processing', desc: 'Complete form filling and submission to relevant authorities' },
              { step: '03', title: 'Follow-up & Tracking', desc: 'Regular updates on application status and progress' },
              { step: '04', title: 'Document Delivery', desc: 'Receive your completed certificates or approvals' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help With Panchayat Services?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Our expert team is ready to assist you with all your rural and panchayat service needs. 
              Contact us today for personalized support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="#" className="btn-primary bg-white text-emerald-600 hover:bg-gray-100">
                Contact Us Now
              </Link>
              <a href="tel:+917024592105" className="btn-secondary border-white text-white hover:bg-white hover:text-emerald-600">
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

export default PanchayatServices;