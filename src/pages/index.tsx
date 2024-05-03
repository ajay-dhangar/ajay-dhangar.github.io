// import clsx from "clsx";
import React from "react";
// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
// import Image from '@theme/IdealImage';
// import Tweet from '@site/src/components/Tweet';
// import Tweets, { TweetItem } from '@site/src/data/tweets';
// import Quotes from '@site/src/data/quotes';
import Hero from "@site/src/components/Homepage/Hero";
import styles from "./index.module.css";

// function TweetsSection() {
//   const tweetColumns: TweetItem[][] = [[], [], []];
//   Tweets.filter((tweet) => tweet.showOnHomepage).forEach((tweet, i) =>
//     tweetColumns[i % 3]!.push(tweet),
//   );

//   return (
//     <div className={clsx(styles.section, styles.sectionAlt)}>
//       <div className="container">
//         <Heading as="h2" className={clsx('margin-bottom--lg', 'text--center')}>
//           Loved by many engineers
//         </Heading>
//         <div className={clsx('row', styles.tweetsSection)}>
//           {tweetColumns.map((tweetItems, i) => (
//             <div className="col col--4" key={i}>
//               {tweetItems.map((tweet) => (
//                 <Tweet {...tweet} key={tweet.url} />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function QuotesSection() {
//   return (
//     <div className={clsx(styles.section)}>
//       <div className="container">
//         <div className="row">
//           {Quotes.map((quote) => (
//             <div className="col" key={quote.name}>
//               <div className="avatar avatar--vertical margin-bottom--sm">
//                 <Image
//                   alt={quote.name}
//                   className="avatar__photo avatar__photo--xl"
//                   img={quote.thumbnail}
//                   style={{overflow: 'hidden'}}
//                 />
//                 <div className="avatar__intro padding-top--sm">
//                   <div className="avatar__name">{quote.name}</div>
//                   <small className="avatar__subtitle">{quote.title}</small>
//                 </div>
//               </div>
//               <p className="text--center text--italic padding-horiz--md">
//                 {quote.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to CodeHarborHub. Learn the basics to advanced concepts of web development. html, css, javascript, react, node.js, dsa, and more."
    >
      {/* <HomepageHeader /> */}

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
          // title="Hello, I'm Ajay Dhangar"
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
      {/* <TweetsSection /> */}
      {/* <QuotesSection /> */}
    </Layout>
  );
}
