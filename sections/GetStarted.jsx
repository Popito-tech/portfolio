'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section id="section4" className='max-w-screen-lg mx-auto pt-[70px] lg:pt-[110px] px-5'>
  <h2 className='font-extrabold text-blue-500'>CONTACT</h2>
  <h3 className='font-extrabold mt-4 text-3xl'>Don't be shy! Hit me up!</h3>
  <div className='flex flex-row space-x-20'>
  <div className='flex flex-row items-center space-x-5 mt-20'>
  <svg className='text-blue-500' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
   stroke-linejoin="round" class="tabler-icon tabler-icon-map-search">
   <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13">
   </path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0">
   </path><path d="M20.2 20.2l1.8 1.8"></path></svg>
   <div className='flex flex-col'>
    <p className='font-bold'>Location</p>
    <p className='text-gray-600'>Bayonne, France</p>
   </div>
  </div>

  <div className='flex flex-row items-center space-x-5 mt-20'>
  <svg className='text-blue-500' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" 
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
  class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 
  -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
   <div className='flex flex-col'>
    <p className='font-bold'>Mail</p>
    <a href={`mailto:giovanni.manzo.pro@outlook.fr`} className='hover:text-blue-500 text-gray-600'>giovanni.manzo.pro@outlook.fr</a>
   </div>
  </div>
  </div>


  </section>
);

export default GetStarted;