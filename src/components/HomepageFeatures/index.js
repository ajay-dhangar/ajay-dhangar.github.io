import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  // {
  //   title: 'Easy to Use',
  //   Svg: require('@site/static/img/svg/undraw_docusaurus_mountain.svg').default,
  //   description: (
  //     <>
  //       CodeHarbor is designed to be easy to learn and improve your coding skills. Start with the basics and learn at your own pace.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/svg/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       CodeHarbor lets you focus on your coding skills, and we'll do the chores. Go ahead and learn the basics of coding.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/svg/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       CodeHarbor is built using React, a popular JavaScript library for building user interfaces. React makes it painless to create interactive UIs.
  //     </>
  //   ),
  // },
  {
    title: "Blogging Platform",
    Svg: require("@site/static/img/svg/blogging.svg").default,
    description: (
      <>
        CodeHarbor is a blogging platform for developers. Share your knowledge
        and experience with the community.
      </>
    ),
  },
  {
    title: "Bug Fixes and Improvements",
    Svg: require("@site/static/img/svg/bug_fixing.svg").default,
    description: (
      <>
        CodeHarbor is constantly being improved and updated. We are always open
        to feedback and suggestions.
      </>
    ),
  },

  {
    title: "YouTub Tutorial",
    Svg: require("@site/static/img/svg/youtube_tutorial.svg").default,
    description: (
      <>
        CodeHarbor provides video tutorials on various topics. Learn from the
        best and improve your coding skills.
      </>
    ),
  },
  {
    title: "Website Setup",
    Svg: require("@site/static/img/svg/website_setup.svg").default,
    description: (
      <>
        CodeHarbor provides a step-by-step guide to set up your website. Get
        started with your own website today.
      </>
    ),
  },

  {
    title: "Web Development",
    Svg: require("@site/static/img/svg/web_development.svg").default,
    description: (
      <>
        CodeHarbor provides tutorials on web development. Learn how to build
        websites and web applications.
      </>
    ),
  },
  {
    title: "Wall Post",
    Svg: require("@site/static/img/svg/wall_post.svg").default,
    description: (
      <>
        CodeHarbor provides a wall post feature. Share your thoughts and ideas
        with the community.
      </>
    ),
  },

  {
    title: "Virtual Assistant",
    Svg: require("@site/static/img/svg/virtual_assistant.svg").default,
    description: (
      <>
        CodeHarbor provides a virtual assistant to help you with your coding
        problems. Get help from the best.
      </>
    ),
  },

  {
    title: "Usability Testing",
    Svg: require("@site/static/img/svg/usability_testing.svg").default,
    description: (
      <>
        CodeHarbor provides useability testing for your website. Get feedback
        from the community and improve your website.
      </>
    ),
  },

  {
    title: "Website",
    Svg: require("@site/static/img/svg/website.svg").default,
    description: (
      <>
        CodeHarbor provides a website for developers. Share your knowledge and
        experience with the community.
      </>
    ),
  },

  // {
  //   title: 'Teaching',
  //   Svg: require('@site/static/img/svg/teaching.svg').default,
  //   description: (
  //     <>
  //       CodeHarbor provides tutorials on teaching. Learn how to teach and share your knowledge with others.
  //     </>
  //   ),
  // },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
