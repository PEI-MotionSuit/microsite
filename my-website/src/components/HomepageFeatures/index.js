import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Smart Motion Analytics',
    Svg: require('@site/static/img/analises.svg').default,
    description: (
      <>
        MotionSuit collects and analyzes real-time data on the user's posture and movements through embedded sensors.
        Using smart motion analysis, the system identifies patterns of poor posture and anticipates potential muscular risks, helping prevent injuries early.
      </>
    ),
  },
  {
    title: 'Personalized Feedback',
    Svg: require('@site/static/img/problem.svg').default,
    description: (
      <>
        The system provides immediate alerts whenever the user adopts an incorrect posture.
        It explains which position is incorrect and guides the user on how to correct it, promoting healthier daily habits through real-time awareness.
      </>
    ),
  },
  {
    title: 'Health and Ergonomic Awareness',
    Svg: require('@site/static/img/world.svg').default,
    description: (
      <>
        By helping users maintain better posture, MotionSuit supports long-term physical comfort and well-being.
        It raises awareness of everyday movement habits, contributing to healthier lifestyles and improved productivity.
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
