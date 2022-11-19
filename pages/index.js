import Benefits from '../components/Benefits';
import Meta from '../components/Meta'
import Slider from '../components/Slider';
import OurServices from '../components/OurServices';
import HappyCustomers from '../components/HappyCustomers';
import Contact from '../components/Contact';
import { Analytics } from '@vercel/analytics/react';

// import { initFirebase } from '../firebase/initFirebase';
// console.log(initFirebase(), '========');

export default function Home() {
  return (
    <div>
      <Meta title='Dashboard' />
      <Slider />
      <Benefits />
      <OurServices />
      <HappyCustomers />
      <Contact />
      <Analytics />
    </div>
  )
}
