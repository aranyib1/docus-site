import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Könnyű Használi',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A Docusaurust az alapoktól úgy tervezték, hogy könnyen telepíthető és használható legyen, így gyorsan elindíthatod a weboldaladat.
      </>
    ),
  },
  {
    title: 'Arra Koncentrálhatsz, Ami Igazán Számít',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A Docusaurus lehetővé teszi, hogy a dokumentációra összpontosíts, mi pedig elvégezzük a piszkos munkát. Egyszerűen helyezd át a dokumentumaidat a <code>docs</code> könyvtárba.
      </>
    ),
  },
  {
    title: 'React Hajtja',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Bővítheted vagy testre szabhatod a weboldalad elrendezését a React újrahasznosításával. A Docusaurus lehetőséget biztosít a kiterjesztésre, miközben megtarthatod ugyanazt a fejlécet és láblécet.
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
