import { useState } from 'react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import ReactPlayer from 'react-player'
import styles from '../styles/OurServices.module.css'
import Modal from './Modal';

const OurServicesItem = ({ body, videoUrl, imgUrl }) => {
  const Child = () => {
    return (
      <>
        <div className={styles.services_item_text}>{body}</div>

        {videoUrl === '' ? <><div className={styles.services_item_play}><i className="fa fa-lock"></i></div></> : <Modal triggerEle={() => 
          <div className={styles.services_item_play}>
            <i className="fa fa-play-circle"></i>
          </div>
        }>
          <ReactPlayer controls url={videoUrl} playing={true} />
        </Modal>}
      </>
    )
  }

  return (
    <>
      <div className={styles.services_item_wrapper}>
        <ParallaxProvider>
          <ParallaxBanner
            layers={[
              {
                children: <Child />,
                image: `${imgUrl}`,
                speed: -10,
                scale: [2, 1],
                translateY: [0, 0],
                easing: 'easeOutQuad'
              }
            ]}
            style={{ aspectRatio: '2 / 1' }}
          />
        </ParallaxProvider>
      </div>
    </>
  )
}

export default OurServicesItem
