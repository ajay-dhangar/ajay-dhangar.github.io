import React, { useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { motion } from "framer-motion";
import ServiceCard from "@site/src/components/Online/ServiceCard";
import { services, categories } from "@site/src/data/services";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <Layout
      title="Our Services"
      description="Explore the wide range of digital services we offer, from government documentation to digital payments and more."
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
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="heading text-4xl text-center lg:text-6xl mb-20">
                Our {" "}<span className="text-primaryColor">Services</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive digital solutions for all your needs. From
                government documentation to digital payments, we've got you
                covered.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Services Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  No services found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
