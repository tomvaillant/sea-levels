import Head from 'next/head';
import Script from 'next/script';
import styles from '../styles/Home.module.css';
import InteractiveMap from '../components/InteractiveMap';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Sea Level Rise</title>
      </Head>
      <Script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js" />
      <main>
        <div className={styles.chartContainer}>
          <p className={styles.text}>Here is some text to start the experience.</p>
          <tableau-viz
            id="tableauViz1"
            src="https://public.tableau.com/views/Polluters_16796668667730/Polluters"
            toolbar="yes"
            hide-tabs
            className={styles.tableauViz}
            suppressResizePlaybackWarning
          ></tableau-viz>
          <p className={styles.text}>Here is some text to follow the first chart.</p>
          <tableau-viz
            id="tableauViz2"
            src="https://public.tableau.com/views/SeaLevelRise_16796665133140/SeaLevelRise"
            toolbar="yes"
            hide-tabs
            className={styles.tableauViz}
            suppressResizePlaybackWarning
          ></tableau-viz>
        </div>
        {/* <div className={styles.mapContainer}>
          <InteractiveMap />
        </div> */}
      </main>
    </div>
  );
}
