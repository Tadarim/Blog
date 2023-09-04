import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Support Me',
    description: (
      <>
        Give me a star at here <a target="_blank" rel="noopener noreferrer" href="https://github.com/Tadarim/blog">GitHub</a>
      </>
    ),
  },
  {
    title: 'About Me',
    description: (
      <>
        A rookie of front end
      </>
    ),
  },
  {
    title: 'Contact Me',
    description: (
      <>
        Q:2560285440
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
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
