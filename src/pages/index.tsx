import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Hero from "../components/HomePage/Hero";
import Touch from "../components/HomePage/Touch";
import Projects from "../components/HomePage/Projects";
import Project from "../components/projects";
import Skills from "../components/HomePage/Skills";
import Certifications from "../components/HomePage/Certifications";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to my portfolio website. I'm Ajay Dhangar, a passionate web developer and designer. Explore my projects, skills, and certifications."
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
        <meta name="google-site-verification" content="rn58c9eOt8ij52CdcS8Lk4rx-8yUCjCkRsCDrycQfW4" />
      </Head>
      <main className="overflow-hidden">
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Project />
        <Touch />
      </main>
    </Layout>
  );
}
