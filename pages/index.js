import Benefits from '../components/Benefits';
import Meta from '../components/Meta'
import Slider from '../components/Slider';
import OurServices from '../components/OurServices';
import HappyCustomers from '../components/HappyCustomers';
import Contact from '../components/Contact';
import { Analytics } from '@vercel/analytics/react';
import About from '../components/About';

export default function Home() {
  return (
    <div>
      <Meta title='Shape up with Ana' />
      <Slider />
      <Benefits />
      <OurServices />
      <HappyCustomers />
      <About />
      <Contact />
      <Analytics />
    </div>
  )
}
