import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Building Blocks',
    Svg: require('@site/static/img/landing-blocks.svg').default,
    link: "roadmap#core-concepts",
    description: (
      <>
        Learn core concepts behind Azure Static Web Apps. Setup your dev environment.
      </>
    ),
  },
  {
    title: 'Usage Examples',
    Svg: require('@site/static/img/landing-action.svg').default,
    link: "roadmap#usage-examples",
    description: (
      <>
        See Static Web Apps in action with front-end frameworks,  static site generators.
      </>
    ),
  },
  {
    title: 'Developer Tools',
    Svg: require('@site/static/img/landing-devtools.svg').default,
    link: "roadmap#developer-tools",
    description: (
      <>
        Explore tools and workflows that create the optimal developer experience.
      </>
    ),
  },
  {
    title: 'Best Practices',
    Svg: require('@site/static/img/landing-tips.svg').default,
    link: "/roadmap#best-practices",
    description: (
      <>
       Design better end-to-end user experiences with rich service integrations.
      </>
    ),
  },
  {
    title: 'SWA Showcase',
    Svg: require('@site/static/img/landing-showcase.svg').default,
    link: "https://microsoft.github.io/static-web-apps-gallery-code-samples/",
    description: (
      <>
        Browse community-contributed examples for inspiration. Add your project!
      </>
    ),
  },
  {
    title: 'SWA Anniversary',
    Svg: require('@site/static/img/landing-anniversary.svg').default,
    link: "https://aka.ms/swaanniversary",
    description: (
      <>
        Join us May 19 for our SWA Anniversary. Watch it live or catch the replay.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} target="_blank">
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </a>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
