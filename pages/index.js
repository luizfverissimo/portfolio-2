import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Background from '../components/Background';
import FooterMenu from '../components/FooterMenu';
import Navbar from '../components/Navbar';
import {
  animationChildVariants,
  animationParentVariants
} from '../utils/animations';

function Home() {
  return (
    <>
      <Head>
        <title>LF Verissimo | Front-end Developer</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='w-full h-screen flex flex-col items-center'>
        <Background />
        <Navbar />
        <motion.section
          initial='hidden'
          animate='show'
          variants={animationParentVariants}
          className='w-full h-full sm:max-w-screen-xl px-4 xl:px-0 flex flex-col justify-center xl:justify-start'
        >
          <motion.p
            variants={animationChildVariants}
            className='font-pop text-xl sm:text-4xl text-white mt-0 xl:mt-20 2xl:mt-40'
          >
            Hi,
            <br /> I'm <span className='text-pink-theme'>LF Verissimo</span>!
          </motion.p>
          <motion.h1
            variants={animationChildVariants}
            className='chromatic font-pop font-bold text-white-theme text-6xl sm:text-9xl'
          >
            FRONT-END
            <br />
            DEVELOPER
          </motion.h1>
          <motion.h2
            variants={animationChildVariants}
            className='mt-12 font-pop font-light text-gray-theme text-xl sm:text-3xl'
          >
            JavaScript, Node.js, React.js, React Native and Next.js
          </motion.h2>
          <motion.h2
            variants={animationChildVariants}
            className='mt-12 font-pop font-bold text-pink-theme text-xl sm:text-4xl'
          >
            &darr; See my projects!
          </motion.h2>
        </motion.section>
        <FooterMenu />
      </main>
    </>
  );
}

export default Home;
