import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Hero from "@site/src/components/Homepage/Hero";
import Layout from "@theme/Layout";
import React from "react";

import styles from "./index.module.css";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to CodeHarborHub. Learn the basics to advanced concepts of web development. html, css, javascript, react, node.js, dsa, and more."
    >
      <div className={styles.topBanner}>
        <div className={styles.topBannerTitle}>
          {"🌟\xa0"}
          <Link
            to="/showcase/?tags=favorite"
            className={styles.topBannerTitleText}
          >
            {"Check out favorite projects in my showcase!"}
          </Link>
          {"\xa0🌟"}
        </div>
      </div>

      <main>
        {" "}
        <Hero
          description="I am a software engineer and a tech enthusiast. I love to learn
                and share my knowledge with others. I am passionate about web
                development, open source, and building cool stuff. I am always
                looking for new opportunities to learn and grow. I am currently
                working as a software engineer at a startup. I am also a mentor
                at CodeHarborHub. I love to help others learn and grow in their
                careers. I am always looking for new opportunities to learn and
                grow."
          imageUrl="/img/img-5.png"
        />

        <hr style={{ margin: "1rem" }} />
      </main>
    </Layout>
  );
}

export default Home;
