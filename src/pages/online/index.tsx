import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { motion } from "framer-motion";
import Link from '@docusaurus/Link';
import Hero from "../../components/Online/Hero";
import ServiceCard from "../../components/Online/ServiceCard";
import { services } from "@site/src/data/services";
import { FiUsers, FiAward, FiClock, FiShield } from "react-icons/fi";

const Home = () => {
  const featuredServices = services.slice(0, 6);

  const stats = [
    { icon: FiUsers, label: "Happy Customers", value: "10,000+" },
    { icon: FiAward, label: "Services Offered", value: "50+" },
    { icon: FiClock, label: "Years Experience", value: "5+" },
    { icon: FiShield, label: "Success Rate", value: "99.9%" },
  ];

  return (
    <Layout
      title={`Online Digital Services`}
      description="Welcome to our online digital services page."
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
      <div>
        <Hero />

        {/* Services Preview */}
        <section className="section-padding bg-gray-50 dark:bg-gray-800 p-4">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Popular Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover our most requested digital services that help thousands
                of people every day
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-blue-600 text-white p-4">
          <div className="container-max">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="section-padding p-4">
          <div className="container-max py-4">
            <h1 className="heading text-4xl text-center lg:text-6xl mb-10">
              Simplifying Digital Services for{" "}
              <span className="text-primaryColor">Every Citizen</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  We are dedicated to bridging the digital divide by offering
                  accessible, reliable, and affordable services that bring
                  technology closer to every community in Madhya Pradesh. Our
                  mission is simple—make digital solutions work for everyone.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  From government documentation and digital payments to
                  education and healthcare, we provide a one-stop platform that
                  meets everyday needs with ease and convenience.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  By expanding our services, we empower citizens to save time,
                  reduce effort, and access essential resources anytime,
                  anywhere. Faster, simpler, and more transparent—this is the
                  future of digital services.
                </p>

                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Government Services
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Certificates, licenses, and official documentation
                    </p>
                  </div>
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Digital Payments
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Secure online transactions and money transfers
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Banking Services
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      AEPS, account opening, and financial services
                    </p>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Education Support
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Exam forms, admissions, and skill development
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
