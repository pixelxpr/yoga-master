import { useState, useEffect } from 'react';

import OurServicesItem from './OurServicesItem';
import { collection, onSnapshot, query } from 'firebase/firestore';

// Local components
import { db } from '../firebase/initFirebase';

import styles from '../styles/OurServices.module.css';

const OurServices = () => {
  const [ourServices, setOurServices] = useState('');

  useEffect(() => {
    const collectionRef = collection(db, 'Our Services');
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setOurServices(querySnapshot.docs.map(doc => doc.data()))
    });

    return unsubscribe;
  }, []);

  return (
    <div className={styles.services_wrapper} id="our-services">
      <h1 className={styles.title}>
        {`${ourServices[0]?.Title || 'Our Services'}`}
      </h1>
      <div className={styles.services_wrapper_section}>
        <OurServicesItem body={`${ourServices[0]?.Tile1 || ''}`} videoUrl={`${ourServices[0]?.video1 || ''}`} imgUrl={`${ourServices[0]?.image1 || ''}`} />
        <OurServicesItem body={`${ourServices[0]?.Tile2 || ''}`} videoUrl={`${ourServices[0]?.video2 || ''}`} imgUrl={`${ourServices[0]?.image2 || ''}`} />
        <OurServicesItem body={`${ourServices[0]?.Tile3 || ''}`} videoUrl={`${ourServices[0]?.video3 || ''}`} imgUrl={`${ourServices[0]?.image3 || ''}`} />
      </div>
      <div className={styles.services_wrapper_section}>
        <OurServicesItem body={`${ourServices[0]?.Tile4 || ''}`} videoUrl={`${ourServices[0]?.video4 || ''}`} imgUrl={`${ourServices[0]?.image4 || ''}`} />
        <OurServicesItem body={`${ourServices[0]?.Tile5 || ''}`} videoUrl={`${ourServices[0]?.video5 || ''}`} imgUrl={`${ourServices[0]?.image5 || ''}`} />
        <OurServicesItem body={`${ourServices[0]?.Tile6 || ''}`} videoUrl={`${ourServices[0]?.video6 || ''}`} imgUrl={`${ourServices[0]?.image6 || ''}`} />
      </div>
    </div>
  )
}

export default OurServices
