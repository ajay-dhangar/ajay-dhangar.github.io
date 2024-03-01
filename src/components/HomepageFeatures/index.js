import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
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
    title: "Website",
    Svg: require("@site/static/img/svg/website.svg").default,
    description: (
      <>
        CodeHarbor provides a website for developers. Share your knowledge and
        experience with the community.
      </>
    ),
  },

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
