import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import styles from "./index.module.css";
import Chatbot from "@site/src/components/Chatbot";
import AdComponent from "@site/src/components/AdComponent";


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to CodeHarborHub. Learn the basics to advanced concepts of web development. html, css, javascript, react, node.js, dsa, and more."
    >
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991"
          crossorigin="anonymous"
        />
        <script async custom-element="amp-auto-ads"
          src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js">
        </script>
      </Head>

      <main>
        {" "}
        <div className={styles.topBanner}>
          <div className={styles.topBannerTitle}>
            {"🌟\xa0"}
            <Link
              to="/showcase/?tags=favorite"
              className={styles.topBannerTitleText}
            >
              {"Check out the favorite projects in my showcase!"}
            </Link>
            {"\xa0🌟"}
          </div>

          <div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <div>
              <div
                className={styles.topBannerDescription}
                title="तत्र सोफ्टवेयर् इन्जिनियर् अहमस्मि, तथा प्रौद्योगिकी उत्सुकः
                  अहम्। अहं शिक्षितुं च अभ्यस्तुं च प्रियः। अहं वेब् विकासे,
                  मुक्त स्रोतौ, च अतिशयम् रचनायां प्रवृत्तः। सदैव नवानि अवसराणि
                  अभ्यस्तुम् च प्रवर्धितुम् च आवश्यकः। अहं सद्यः उपारंभिके
                  सोफ्टवेयर् इन्जिनियर् रूपेण कार्यम् करोमि। अहं च कोड् हार्बोर्
                  हब् नामके संस्थायां उपन्यासकः अस्मि। अहं परानुमोदितुं च
                  परिणामसाधयितुं च प्रियः। अहं सदैव नवानि अवसराणि अभ्यस्तुम् च
                  प्रवर्धितुम् च आवश्यकः।"
              >
                <p>
                  I am a software engineer and a tech enthusiast. I love to
                  learn and share my knowledge with others. I am passionate
                  about web development, open source, and building cool stuff. I
                  am always looking for new opportunities to learn and grow. I
                  am currently working as a software engineer at a startup. I am
                  also a mentor at CodeHarborHub. I love to help others learn
                  and grow in their careers. I am always looking for new
                  opportunities to learn and grow.
                  <b title="कोड् हार्बोर् हब् सह योगः">
                    {" "}
                    <Link to="https://www.codeharborhub.live/">
                      Join CodeHarborHub
                    </Link>{" "}
                  </b>{" "}
                  <span title="च">and</span>{" "}
                  <b title="कर्तुं आरम्भः">
                    <Link to="https://www.codeharborhub.live/docs/">
                      start learning
                    </Link>
                  </b>{" "}
                  <span
                    title="आजीविष्यताम् आरंभ आजीवया
                  अवलोकयस्व॥"
                  >
                    today!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <AdComponent />
        <Chatbot />
      </main>
    </Layout>
  );
}
