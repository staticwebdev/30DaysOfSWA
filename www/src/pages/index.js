import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

// Import roadmap
import Image from '@theme/IdealImage';
import roadmap from './../../static/img/series/week2-roadmap.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* 
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        */}
        <h3> #30DaysOfSWA - It's Usage Examples Week! </h3>
        <Link to="/blog/tags/usage-examples">
          <Image img={roadmap} className={styles.featureImg} />
        </Link>
      </div>
    </header>
  );
}

/* 
  Was originally with Homepage Header. 
  Removed it as a test 
    <HomepageHeader />
    <main>
      <HomepageFeatures />
    </main>
*/
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageHeader />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
