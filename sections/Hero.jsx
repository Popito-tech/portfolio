'use client';
import {motion} from 'framer-motion'
import styles from '@/styles';
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import { TypingText } from '../components';
import { TypingText2 } from '@/components/CustomTexts';
import { useState, useEffect } from "react";


function Hero () { 
  
  return(
  <section className='bg-gray-50' id="section1">
  <div className='max-w-screen-lg mx-auto pl-6 pt-28 md:pt-56 flex justify-center flex-col pb-[50px] md:pb-[150px]'>
    <div className='flex flex-col-reverse items-center md:flex-row md:space-x-56'>
      <div className='flex flex-col items-center md:flex-none md:items-start pt-5'>
      <p className="font-bold text-5xl md:text-7xl" > Next.js</p>
      <p className="font-bold text-5xl md:text-7xl" > Developer</p>

        <div className='flex flex-col items-center md:flex-none md:items-start'>
        <p className='text-lg mt-7'>Hi, I'm Giovanni MANZO. A passionate Next.js </p>
        
        <p className='text-lg mt-2'>Developer based in Bayonne, France.</p>
        </div>

        <div className='flex flex-row space-x-5 mt-5'>

      </div>
      </div>
        <img
          src="/moi.jpg"
          alt="hero_cover"
          className='h-[250px] w-[250px] md:h-[350px] md:w-[350px] animate-morph border-4 border-black '
        />

    </div>

    <div className='flex flex-col md:flex-row md:gap-5 items-center mt-10 md:mt-20'>
      <p className='border-b-2 md:border-r-2 md:border-b-0 border-gray-500 pb-7 md:pr-10 md:pb-0 text-xl'>Tech Stack </p>
      <img
        src='/icons1.svg'
        alt='dfg'
        className='w-[120px] h-[120px] object contain md:ml-10 hover:pb-7 hover:cursor-pointer transition-all duration-300'
      />
      <img
        src='/icons2.svg'
        alt='seafdgrch'
        className='w-[120px] h-[120px] -mt-10 md:mt-0 object contain hover:pb-7 hover:cursor-pointer transition-all duration-300'
      />
      <img
        src='/icons3.svg'
        alt='seardgbvch'
        className='w-[120px] h-[120px] -mt-10 md:mt-0 object contain hover:pb-7 hover:cursor-pointer transition-all duration-300'
      />
      <img
        src='/icons4.svg'
        alt='searxzcxch'
        className='w-[120px] h-[120px] -mt-10 md:mt-0 object contain hover:pb-7 hover:cursor-pointer transition-all duration-300'
      />

    </div>



    </div>
  </section>
);
      }

export default Hero;
