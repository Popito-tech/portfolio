'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import Link from 'next/link';

const Explore = () => {
  const handleImageClick1 = () => {
    // Redirect to the specified link
    window.open('https://amazon-portfolio-tau.vercel.app', '_blank');
  };
  const handleImageClick2 = () => {
    // Redirect to the specified link
    window.open('https://gymate-xi.vercel.app', '_blank');
  };
  return (
    <section id="section3" className='  bg-gray-50'>
    <div className='max-w-screen-lg mx-auto flex flex-col pt-[75px] pb-[75px] lg:pt-[150px] lg:pb-[150px] px-5'>
      <h2 className='font-extrabold  text-blue-500'>PORTFOLIO</h2>
      <h3 className='text-2xl font-bold mb-8 mt-4'>Each project is a unique piece of development</h3>
      <div className='space-y-10'>


      <div className='flex flex-row border border-gray-300 shadow-lg 
      shadow-gray-300 p-5 rounded-xl h-[480px] relative bg-white'>
  
    <img src='/amazon-clone.png' onClick={handleImageClick1} alt='pioupiou' className='w-full h-full rounded-xl top-0 
    object-cover object-top hover:object-bottom duration-[3000ms] hover:cursor-pointer' />

  <div className='text-center px-5 w-3/5 space-y-8'>
    <h4 className='font-medium'>AMAZON CLONE</h4>
    <p className='text-gray-600'>
      The Amazon clone website is a fully ready e-commerce application. Custommers can login, 
      buy, and check their order history.
    </p>
    <div className=''>
    <div className='technoUsed'>
      <p >redux</p>
    </div>
    <div className='technoUsed'>
      <p >stripe</p>
    </div>
    <div className='technoUsed'>
      <p >mongoose</p>
    </div>
    <div className='technoUsed'>
      <p >nodemailer</p>
    </div>
    <div className='technoUsed'>
      <p >react</p>
    </div>
    <div className='technoUsed'>
      <p >typescript</p>
    </div>
    <div className='technoUsed'>
      <p >next-auth</p>
    </div>
    <div className='technoUsed'>
      <p >full-stack website</p>
    </div>
    </div>
    <div>
    <Link href="https://github.com/Popito-tech/amazon-portfolio" target="_blank" rel="noopener noreferrer">
      <p className='font-bold hover:text-blue-500 hover:cursor-pointer'>GET THE CODE</p>
    </Link>
    <Link href="https://amazon-portfolio-tau.vercel.app" target="_blank" rel="noopener noreferrer">
      <p className='font-bold hover:text-blue-500 hover:cursor-pointer'>VISIT WEBSITE</p>
    </Link>

</div>

  </div>
</div>


<div className='flex flex-row-reverse border border-gray-300 shadow-lg 
      shadow-gray-300 p-5 rounded-xl h-[480px] relative bg-white'>

    <img src='/gymate-home.png' alt='pioupiou' onClick={handleImageClick2} className='w-full h-full rounded-xl top-0 
    object-cover object-top hover:object-bottom duration-[12000ms] hover:cursor-pointer' />

  <div className='text-center px-5 w-3/5 space-y-8'>
    <h4 className='font-medium'>GYMATE</h4>
    <p className='text-gray-600'>
    Gymate is a comprehensive resource for fitness information, class schedules, 
    membership options, and tools to help users achieve their fitness goals.
    </p>
    <div>
    <div className='technoUsed'>
      <p >react</p>
    </div>
    <div className='technoUsed'>
      <p >javascript</p>
    </div>
    <div className='technoUsed'>
      <p >front-end only website</p>
    </div>
    </div>
    <div>
    <Link href="https://github.com/Popito-tech/gymate" target="_blank" rel="noopener noreferrer">
      <p className='font-bold hover:text-blue-500 hover:cursor-pointer'>GET THE CODE</p>
    </Link>
    <Link href="https://gymate-xi.vercel.app" target="_blank" rel="noopener noreferrer">
      <p className='font-bold hover:text-blue-500 hover:cursor-pointer'>VISIT WEBSITE</p>
    </Link>

  </div>
  </div>

</div>


      </div>
      </div>
    </section>
  );
};

export default Explore;
