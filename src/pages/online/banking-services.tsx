import React from 'react';
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCreditCard, FiDollarSign, FiSmartphone, FiUsers, FiHome, FiShield } from 'react-icons/fi';

const BankingServices = () => {
  const services = [
    {
      icon: FiCreditCard,
      title: 'Account Services',
      description: 'Open and manage savings, current, and fixed deposit accounts with ease',
      features: ['Account opening', 'Passbook & statements', 'Cheque services', 'Online account management']
    },
    {
      icon: FiDollarSign,
      title: 'Loan & Credit Support',
      description: 'Apply for personal, home, education, and agricultural loans with guidance',
      features: ['Personal & education loans', 'Agricultural loans', 'Home loans', 'Credit card applications']
    },
    {
      icon: FiSmartphone,
      title: 'Digital Banking',
      description: 'Access mobile banking, UPI, internet banking, and secure digital transactions',
      features: ['Mobile & internet banking setup', 'UPI registration', 'Online fund transfers', 'Secure digital payments']
    },
    {
      icon: FiUsers,
      title: 'Financial Inclusion',
      description: 'Support for Jan Dhan accounts, pension schemes, and rural financial literacy',
      features: ['PMJDY account support', 'Pension & insurance schemes', 'Direct benefit transfer (DBT)', 'Financial literacy camps']
    },
    {
      icon: FiHome,
      title: 'Housing & Rural Finance',
      description: 'Support for rural housing loans, PM Awas Yojana, and subsidy processing',
      features: ['Housing loans', 'PM Awas Yojana assistance', 'Construction finance', 'Government subsidy support']
    },
    {
      icon: FiShield,
      title: 'Insurance & Security',
      description: 'Access to life, health, crop, and general insurance for rural families',
      features: ['Life & health insurance', 'Crop insurance', 'Accident coverage', 'Claim assistance']
    }
  ];

  return (
    <Layout
      title="Banking Services"
      description="Comprehensive support for banking, digital finance, loans, insurance, and rural financial inclusion."
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
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Banking Services</h1>
              <p className="text-xl text-indigo-100 leading-relaxed max-w-4xl">
                Simplifying banking for everyone — from account management to loans, insurance, and digital banking. 
                We ensure rural and urban communities have access to modern and secure financial services.
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
                How We Help With Banking Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our streamlined process ensures you get banking support quickly, securely, and without hassle.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Consultation', desc: 'Understand your financial needs and goals' },
                { step: '02', title: 'Application Assistance', desc: 'Help with filling forms and submitting applications' },
                { step: '03', title: 'Verification & Follow-up', desc: 'Track progress and handle compliance checks' },
                { step: '04', title: 'Service Delivery', desc: 'Get your banking service activated or approved' }
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
                Need Banking Assistance?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Our financial experts are ready to guide you with banking services, loans, insurance, and digital finance solutions. 
                Contact us today for expert support.
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

export default BankingServices;
