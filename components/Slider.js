import { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { collection, onSnapshot, query } from 'firebase/firestore';

// Local components
import { db } from '../firebase/initFirebase';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import styles from '../styles/Slider.module.css';

const Slider = () => {
  const [sliderContent, setSliderContent] = useState('');

  useEffect(() => {
    const collectionRef = collection(db, 'Slider');
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setSliderContent(querySnapshot.docs.map(doc => doc.data()))
    });

    return unsubscribe;
  }, []);

  return (
    <Swiper
      className={styles.slider_wrapper}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay
      loop
    >
      <SwiperSlide>
        {({ isActive }) => (
          <>
            <ParallaxProvider>
              <ParallaxBanner
                layers={[
                  {
                    image: `${sliderContent[0]?.img1_url || '#'}`,
                    speed: 100,
                    translateY: ['0', '0'],
                    scale: [1, 1],
                  }
                ]}
                style={{ aspectRatio: '2 / 1', height: '100%' }}
              />
            </ParallaxProvider>
            <span className={`${isActive ? styles.slider_title_active : styles.slider_title_not_active}`}>
              {`${sliderContent[0]?.img1_text || 'Some Random text 1'}`}
            </span>
          </>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <>
            <ParallaxProvider>
              <ParallaxBanner
                layers={[
                  {
                    image: `${sliderContent[0]?.img2_url || '#'}`,
                    speed: 100,
                    translateY: ['0', '0'],
                    scale: [1, 1],
                  }
                ]}
                style={{ aspectRatio: '2 / 1', height: '100%' }}
              />
            </ParallaxProvider>
            <span className={`${isActive ? styles.slider_title_active : styles.slider_title_not_active}`}>
              {`${sliderContent[0]?.img2_text || 'Some Random text 2'}`}
            </span>
          </>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <>
            <ParallaxProvider>
              <ParallaxBanner
                layers={[
                  {
                    image: `${sliderContent[0]?.img3_url || '#'}`,
                    speed: 100,
                    translateY: ['0', '0'],
                    scale: [1, 1],
                  }
                ]}
                style={{ aspectRatio: '2 / 1', height: '100%' }}
              />
            </ParallaxProvider>
            <span className={`${isActive ? styles.slider_title_active : styles.slider_title_not_active}`}>
              {`${sliderContent[0]?.img3_text || 'Some Random text 3'}`}
            </span>
          </>
        )}
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
