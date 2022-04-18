import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Building Blocks',
    Svg: require('@site/static/img/blocks.svg').default,
    description: (
      <>
        Start by learning the core concepts behind a technology or framework. Familiarize yourself with key terms.
      </>
    ),
  },
  {
    title: 'Code in Action',
    Svg: require('@site/static/img/action.svg').default,
    description: (
      <>
        See those concepts in action by completing short tutorials or exercises that help reinforce ideas in real-world contexts.
      </>
    ),
  },
  {
    title: 'Tools & Tips',
    Svg: require('@site/static/img/practices.svg').default,
    description: (
      <>
        Explore developer tools and best practices for making workflows efficient and experiences delightful.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
