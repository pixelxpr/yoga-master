import { useState, useEffect } from 'react';
import Link from 'next/link'
import StickyHeader from 'react-sticky-header';
import ScrollIntoView from 'react-scroll-into-view';
import { collection, onSnapshot, query } from 'firebase/firestore';

// Local components
import { db } from '../firebase/initFirebase';

import navStyles from '../styles/Nav.module.css'
import 'react-sticky-header/styles.css';

const Nav = () => {
  const [scroll, setScroll] = useState(false);
  const [topNav, setTopNav] = useState('');

  useEffect(() => {
    const collectionRef = collection(db, 'Top Nav');
    const q = query(collectionRef);
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 400);
    });
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setTopNav(querySnapshot.docs.map(doc => doc.data()))
    });

    return unsubscribe;
  }, []);

  return (
    <StickyHeader
      // This is the sticky part of the header.
      header={
        <div className={`${navStyles.header_root} ${!scroll ? navStyles.header_root_bg_none : navStyles.header_root_bg}`}>
          <div className={navStyles.header_logo}>
            {topNav[0]?.logo && <img
              src={`${topNav[0]?.logo || '#'}`}
              alt="Logo"
            />}
          </div>
          <div>
            <ul className={navStyles.header_links}>
              <li className={navStyles.header_link}>
                <Link href='/'>{`${topNav[0]?.Home || 'Home'}`}</Link>
              </li>
              <li className={navStyles.header_link}>
                <ScrollIntoView selector="#benefits">
                  {`${topNav[0]?.Benefits || 'Benefits'}`}
                </ScrollIntoView>
              </li>
              <li className={navStyles.header_link}>
                <ScrollIntoView selector="#our-services">
                  {`${topNav[0]?.['Our Services'] || 'Services'}`}
                </ScrollIntoView>
              </li>
              <li className={navStyles.header_link}>
                <ScrollIntoView selector="#about-us">
                  {`${topNav[0]?.['About'] || 'About'}`}
                </ScrollIntoView>
              </li>
              <li className={navStyles.header_link}>
                <ScrollIntoView selector="#contact-us">
                  {`${topNav[0]?.['Contact us'] || 'Contact'}`}
                </ScrollIntoView>
              </li>
            </ul>
          </div>
        </div>
      }
    >
    </StickyHeader>
  )
}

export default Nav
