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
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff'></meta>
        <meta
          name='description'
          content='LF Verissimo personal portfolio, front-end developer, solving problems through code.'
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta name='twitter:card' value='summary'></meta>
        <meta
          name='twitter:image'
          content='http://lfverissimo.com/twittermeta.png'
        ></meta>

        <meta
          property='og:title'
          content='LF Verissimo Portfolio | Front-end Developer'
        />
        <meta property='og:type' content='article' />
        <meta property='og:url' content='http://lfverissimo.com/' />
        <meta
          property='og:image'
          content='http://lfverissimo.com/twittermeta.png'
        />
        <meta
          property='og:description'
          content='LF Verissimo personal portfolio, front-end developer, solving problems through code.'
        />
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
