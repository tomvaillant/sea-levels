import Head from 'next/head';
import Script from 'next/script';
import TableauViz from '../components/TableauViz';
import styles from '../styles/Home.module.css';
// import { useState, useEffect, useRef } from 'react';
// import tableau from 'tableau-api';


export default function Home() {

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Sea Level Rise</title>
      </Head>
      <main>
        <section id="scroll">
          <div className={styles.backgroundImage}>
          <div className={styles.textContainer}>
            <h2>Sea Level Rise</h2>
            <p className={styles.text}>
              The 2-degree Celsius threshold, established by the Paris
              Agreement, is a critical point beyond which irreversible and
              catastrophic climate impacts could occur. Climate tipping points,
              such as the collapse of ice sheets and the release of methane from
              thawing permafrost, could lead to uncontrollable warming and
              further destabilize global ecosystems. Recent studies suggest we
              are alarmingly close to these tipping points, emphasizing the need
              for urgent climate action.
            </p>
            <p className={styles.text}>
              The steady rise of sea levels has been a concerning trend over
              the past five decades. According to the NOAA, sea levels have
              risen approximately 8 inches since 1900, with the rate of increase
              nearly doubling in the last 20 years. This can be attributed to
              the melting of polar ice caps and glaciers, as well as the thermal
              expansion of seawater as it warms. As global temperatures continue
              to climb, scientists predict that sea levels will rise even
              faster, posing severe risks to coastal communities and low-lying
              areas around the world.
            </p>
            </div>
          </div>
        </section>

          <div className={styles.chartContainer1} data-size="A4">
            <TableauViz
            url="https://public.tableau.com/views/SeaLevelRise_16796665133140/SeaLevelRise"
            options={{
              hideTabs: true,
              toolbar: 'yes',
              className: styles.tableauViz,
              onFirstInteractive: () => {
                console.log('Tableau Viz loaded successfully.');
              },
            }}
          />
          </div>
          <div className={styles.textContainer}>
          <h2>Who has contributed most?</h2>
          <p className={styles.text}>Historically, the largest carbon emitters in the world have been the United States, China, and the European Union. The United States has been a major contributor to global emissions since the Industrial Revolution, but in recent years, China has overtaken the US as the world's largest carbon emitter due to rapid industrialization and urbanization. 
          </p>
          <p>
          The European Union, although responsible for a significant share of historical emissions, has taken substantial steps to reduce its carbon footprint through renewable energy initiatives and other sustainable practices. Collectively, these countries are responsible for a large portion of the greenhouse gases that drive climate change.</p>
          </div>
          <div className={styles.chartContainer2}>
          <TableauViz
            url="https://public.tableau.com/views/Polluters_16796668667730/Polluters"
            options={{
              hideTabs: true,
              toolbar: 'yes',
              className: styles.tableauViz,
              onFirstInteractive: () => {
                console.log('Tableau Viz loaded successfully.');
              },
            }}
          />
          </div>
          <div className={styles.backgroundImage2}>
          <div className={styles.textContainer}>
            <h2>Who will be most affected?</h2>
            <p className={styles.text}>
            Unfortunately, many countries that have contributed the least to global emissions will bear the brunt of climate change's impacts. Low-lying island nations, such as the Maldives, Kiribati, and Tuvalu, are particularly vulnerable to rising sea levels, which threaten their very existence. 
            </p>
            <p>
            In addition, developing countries in regions like South Asia, sub-Saharan Africa, and Central America face increased risks of flooding, drought, and extreme weather events. These nations often lack the financial resources and infrastructure to adapt to these challenges, making them disproportionately vulnerable to the consequences of a warming world.
            </p>
            <p>Check out the IPCC Interactive Sea Level Chart here:</p>
            <div className={styles.buttonContainer}>
              <a href="https://interactive-atlas.ipcc.ch/regional-information#eyJ0eXBlIjoiQVRMQVMiLCJjb21tb25zIjp7ImxhdCI6LTIwMDk5ODksImxuZyI6OTkzNjMsInpvb20iOjQsInByb2oiOiJFUFNHOjU0MDMwIiwibW9kZSI6ImNvbXBsZXRlX2F0bGFzIn0sInByaW1hcnkiOnsic2NlbmFyaW8iOiJzc3A1ODUiLCJwZXJpb2QiOiJuZWFyIiwic2Vhc29uIjoieWVhciIsImRhdGFzZXQiOiJDTUlQNiIsInZhcmlhYmxlIjoic2xyIiwidmFsdWVUeXBlIjoiQU5PTUFMWSIsImhhdGNoaW5nIjoiU0lNUExFIiwicmVnaW9uU2V0IjoiYXI2IiwiYmFzZWxpbmUiOiJBUjYiLCJyZWdpb25zU2VsZWN0ZWQiOltdfSwicGxvdCI6eyJhY3RpdmVUYWIiOiJwbHVtZSIsIm1hc2siOiJub25lIiwic2NhdHRlcllNYWciOm51bGwsInNjYXR0ZXJZVmFyIjpudWxsLCJzaG93aW5nIjpmYWxzZX19" target="_blank">
                <button className={styles.button}>Explore the IPCC Interactive Atlas</button>
              </a>
            </div>
            </div>
          </div>
      </main>
    </div>
  );
}
