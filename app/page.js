import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero, WhatsNew } from '../sections';

const Page = () => (
  <div className='bg-white overflow-hidden'>
    <Navbar />
    <Hero />
    <About/>
    <Explore/>
    <GetStarted/>
    <WhatsNew/>
  </div>
);

export default Page;