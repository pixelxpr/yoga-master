import { useState, useEffect } from 'react';

import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { collection, onSnapshot, query } from 'firebase/firestore';

// Local components
import { db } from '../firebase/initFirebase';

import styles from '../styles/Benefits.module.css'
import BenefitItem from './BenefitItem'

const Benefits = () => {
  const [Benefits, setBenefits] = useState('');

  useEffect(() => {
    const collectionRef = collection(db, 'Benefits of Yoga');
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setBenefits(querySnapshot.docs.map(doc => doc.data()))
    });

    return unsubscribe;
  }, []);
  return (
    <div className={styles.benefit_wrapper} id="benefits">
      <div className={styles.benefit_item_center}>
        <ParallaxProvider>
          <ParallaxBanner
            layers={[
              {
                image: `${Benefits[0]?.image || '#'}`,
                speed: 100,
              }
            ]}
            style={{ aspectRatio: '2 / 1' }}
          />
        </ParallaxProvider>
      </div>

      <h1 className={styles.title}>
        {`${Benefits[0]?.Title || 'Benefits of Yoga'}`}
      </h1>
      <div className={styles.benefit_container}>
        <div className={styles.benefit_item_left}>
          <BenefitItem title={`${Benefits[0]?.Title1 || ''}`} body={`${Benefits[0]?.Body1 || ''}`} />
          <BenefitItem title={`${Benefits[0]?.Title2 || ''}`} body={`${Benefits[0]?.Body2 || ''}`} />
          <BenefitItem title={`${Benefits[0]?.Title3 || ''}`} body={`${Benefits[0]?.Body3 || ''}`} />
          <BenefitItem title={`${Benefits[0]?.Title4 || ''}`} body={`${Benefits[0]?.Body4 || ''}`} />
          <BenefitItem title={`${Benefits[0]?.Title5 || ''}`} body={`${Benefits[0]?.Body5 || ''}`} />
          <BenefitItem title={`${Benefits[0]?.Title6 || ''}`} body={`${Benefits[0]?.Body6 || ''}`} />
        </div>
        <div className={styles.benefit_item_right}>
          <BenefitItem title={`${Benefits[0]?.Title7 || ''}`} body={`${Benefits[0]?.Body7 || ''}`} />
          <BenefitItem title={`${Benefits[0]?.Title8 || ''}`} body={`${Benefits[0]?.Body8 || ''}`} />
          <BenefitItem title={`${Benefits[0]?.Title9 || ''}`} body={`${Benefits[0]?.Body9 || ''}`} />
          <BenefitItem title={`${Benefits[0]?.Title10 || ''}`} body={`${Benefits[0]?.Body10 || ''}`} />
          <BenefitItem title={`${Benefits[0]?.Title11 || ''}`} body={`${Benefits[0]?.Body11 || ''}`} />
          <BenefitItem title={`${Benefits[0]?.Title12 || ''}`} body={`${Benefits[0]?.Body12 || ''}`} />
        </div>
      </div>
    </div>
  )
}

export default Benefits
