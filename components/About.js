import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { collection, onSnapshot, query } from 'firebase/firestore';

// Local components
import { db } from '../firebase/initFirebase';

import styles from '../styles/About.module.css';

const About = () => {
  const [About, setAbout] = useState('');

  useEffect(() => {
    const collectionRef = collection(db, 'About');
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setAbout(querySnapshot.docs.map(doc => doc.data()))
    });

    return unsubscribe;
  }, []);
  return (
    <div className={styles.about_wrapper} id="about-us">
        <div className={styles.about_image}>
            <ParallaxProvider>
                <ParallaxBanner
                    layers={[
                    {
                        image: `${About[0]?.image || '#'}`,
                        speed: 100,
                        translateY: ['0', '0'],
                        scale: [1, 1.5],
                    }
                    ]}
                    style={{ aspectRatio: '2 / 1' }}
                />
            </ParallaxProvider>
        </div>
        <div className={styles.about_container}>
            <div className={styles.about_info}>
                <h1>
                {`${About[0]?.Title || ''}`}
                </h1>
                <p>{`${About[0]?.Body || ''}`}</p>
                <p>{`${About[0]?.Body1 || ''}`}</p>
                <p>{`${About[0]?.Body2 || ''}`}</p>
            </div>
        </div>
    </div>
  )
}

export default About;
