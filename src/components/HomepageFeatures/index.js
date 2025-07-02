import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Technical Writing',
    Svg: require('@site/static/img/b-remote.svg').default,
    
    description: (
      <ul>
        <li>User Guides</li>
        <li>API Reference materials and guides</li>
        <li>UX Writing</li>
      </ul>
    ),
  },
  {
    title: 'Content Design',
    Svg: require('@site/static/img/b-analytics.svg').default,
    description: (
      <>
      <ul>
        <li>Accessibility</li>
        <li>User Experience</li>
        <li>Information Architecture</li>
      </ul>
      </>
    ),
  },
  {
    title: 'Visual Design',
    Svg: require('@site/static/img/b-unbox.svg').default,
    description: (
      <>
      <ul>
        <li>Infographics</li>
        <li>Diagrams</li>
        <li>Presentation materials </li>
      </ul>
      
        
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
