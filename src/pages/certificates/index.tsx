import React from "react";
import { Certificates } from "../../components/certificates";
import Layout from "@theme/Layout";

const CertificatesPage: React.FC = () => {
  return (
    <Layout
      title="Certificates"
      description="Check out my certificates on various technologies. I have a collection of certificates from Coursera, Udemy, and other platforms."
    >
      <Certificates />
    </Layout>
  );
};

export default CertificatesPage;
