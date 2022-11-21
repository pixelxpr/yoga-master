import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { collection, onSnapshot, query } from 'firebase/firestore';

// Local components
import { db } from '../firebase/initFirebase';

import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [Contact, setContact] = useState('');

  useEffect(() => {
    const collectionRef = collection(db, 'Contact us');
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setContact(querySnapshot.docs.map(doc => doc.data()))
    });

    return unsubscribe;
  }, []);
  return (
    <div className={styles.contact_wrapper} id="contact-us">
      <div className={styles.contact_image}>
        <ParallaxProvider>
          <ParallaxBanner
            layers={[
              {
                image: `${Contact[0]?.image || '#'}`,
                speed: 100,
                translateY: ['0', '0'],
                scale: [1, 1.5],
              }
            ]}
            style={{ aspectRatio: '2 / 1' }}
          />
        </ParallaxProvider>
      </div>
      <div className={styles.contact_container}>

      <div className={styles.contact_info}>
          <h1>
            {`${Contact[0]?.Title || ''}`}
          </h1>
          <p>{`${Contact[0]?.Body || ''}`}</p>
        </div>

        <div className={styles.contact_info}>
          <h2>{`${Contact[0]?.['Sub-Title'] || ''}`}</h2>
          <h3>{`${Contact[0]?.['Contact_text'] || ''}`}</h3>
          <h3 style={{display: "none"}}>Call Now - <a href={`tel:+91${Contact[0]?.Phone || ''}`}>+91 {`${Contact[0]?.Phone || ''}`}</a></h3>
          <h3>Email - <a href={`mailto:${Contact[0]?.Email || ''}`}>{`${Contact[0]?.Email || ''}`}</a></h3>
          <div className={styles.social}>
            <h3>Follow / Message now | </h3>
            {Contact[0]?.insta !== '' && <Link href={`${Contact[0]?.insta || ''}`}>
              <a target="_blank" rel="noopener noreferrer" className='link-item'>
                <i className="fa fa-instagram"></i>
              </a>
            </Link>}

            {Contact[0]?.yt !== '' && <Link href={`${Contact[0]?.yt || ''}`}>
              <a target="_blank" rel="noopener noreferrer" className='link-item'>
                <i className="fa fa-youtube"></i>
              </a>
            </Link>}

            {Contact[0]?.fb !== '' && <Link href={`${Contact[0]?.fb || ''}`}>
              <a target="_blank" rel="noopener noreferrer" className='link-item'>
                <i className="fa fa-facebook"></i>
              </a>
            </Link>}

            {Contact[0]?.Phone !== '' && <Link href={`https://wa.me/+91${Contact[0]?.Phone}?text=I'm%20interested`}>
              <a target="_blank" rel="noopener noreferrer" className='link-item'>
                <i className="fa fa-whatsapp"></i>
              </a>
            </Link>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
