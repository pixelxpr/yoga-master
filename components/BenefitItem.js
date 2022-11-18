import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import styles from '../styles/Benefits.module.css'

const BenefitItem = ({ title, body }) => {
  return (
    <div className={styles.benefit_item}>
      <ParallaxProvider>
        <Parallax speed={10} opacity={[-1, 2]} translateY={[0, 0]} easing='easeOutQuad'>
          <h2>{title}</h2>
          <p>{body}</p>
        </Parallax>
      </ParallaxProvider>
    </div>
  )
}

export default BenefitItem
