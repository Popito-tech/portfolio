'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section id="section5" className='bg-footer-color mt-40 h-[150px] relative px-5'>
    <div className='max-w-screen-lg mx-auto flex items-center'>
      <p className='text-white absolute bottom-1/2 transform translate-y-1/2'>Copyright © 2023. All rights are reserved</p>
    </div>
  </section>
);

export default WhatsNew;