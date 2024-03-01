import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageWelcome from '@site/src/components/HomepageWelcome';
import CoursesOfferedContent from '@site/src/components/CoursesOfferedContent';
import FeaturedCourses from '@site/src/components/FeaturedCoursesWrapper';
import OurInstructors from '@site/src/components/OurInstructors';
import UpcomingEvents from '@site/src/components/UpcomingEvents';
import GiscusComponent from '@site/src/components/GiscusComponent';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <HomepageWelcome />
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Documentation  - Get Started
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="CodeHarbor is a platform for developers to share their knowledge and experience with the community.">
      <HomepageHeader />
      <main>        
        <HomepageFeatures />
        <hr />
        <CoursesOfferedContent />
        <hr />
        <FeaturedCourses />
        <hr />
        <OurInstructors />
        <hr />
        <UpcomingEvents />
        <hr />
        <div className="">
          <GiscusComponent />
        </div>
      </main>
    </Layout>
  );
}
