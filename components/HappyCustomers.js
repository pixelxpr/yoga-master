import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { collection, onSnapshot, query } from 'firebase/firestore';

// Local components
import { db } from '../firebase/initFirebase';
import Fireworks from './Firework';

import styles from '../styles/HappyCustomers.module.css'

const HappyCustomers = () => {
  const happy_customersRef = useRef(null)
  const [loading, setLoading] = React.useState(true);
  const [happyCustomers, setHappyCustomers] = useState('');

  useEffect(() => {
    const collectionRef = collection(db, 'Happy Customers');
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setHappyCustomers(querySnapshot.docs.map(doc => doc.data()))
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    Fireworks(happy_customersRef.current.clientWidth, happy_customersRef.current.clientHeight);
  }, []);

  return (
    <div className={styles.happy_customers} ref={happy_customersRef}>
      <div className={styles.canvas}>
        <canvas id="canvas"></canvas>
      </div>
      <div>
        <span className={styles.title}>
          {`${happyCustomers[0]?.['section1 title'] || ''}`}
        </span>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            isVisible && loading ?
              <CountUp end={`${happyCustomers[0]?.['section1 body'] || ''}`} onEnd={() => setLoading(false)} suffix="+" />
              : <span>{`${happyCustomers[0]?.['section1 body'] || ''}`}+</span>
          )}
        </VisibilitySensor>
      </div>

      <div>
        <span className={styles.title}>
          {`${happyCustomers[0]?.['section2 title'] || ''}`}
        </span>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            isVisible && loading ?
              <CountUp end={`${happyCustomers[0]?.['section2 body'] || ''}`} onEnd={() => setLoading(false)} suffix="+" />
              : <span>{`${happyCustomers[0]?.['section2 body'] || ''}`}+</span>
          )}
        </VisibilitySensor>
      </div>

      <div>
        <span className={styles.title}>
          {`${happyCustomers[0]?.['section3 title'] || ''}`}
        </span>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            isVisible && loading ?
              <CountUp end={`${happyCustomers[0]?.['section3 body'] || ''}`} onEnd={() => setLoading(false)} suffix="+" />
              : <span>{`${happyCustomers[0]?.['section3 body'] || ''}`}+</span>
          )}
        </VisibilitySensor>
      </div>
    </div>
  )
}

export default HappyCustomers
