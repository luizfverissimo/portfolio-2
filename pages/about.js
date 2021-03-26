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

function About() {
  return (
    <>
      <Head>
        <title>About - LF Verissimo | Front-end Developer</title>
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
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#1c1c1c' />
        <meta name='msapplication-TileColor' content='#1c1c1c' />
        <meta name='theme-color' content='#1c1c1c'></meta>
        <meta
          name='description'
          content='About - LF Verissimo personal portfolio, front-end developer, solving problems through code.'
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
          content='About - LF Verissimo Portfolio | Front-end Developer'
        />
        <meta property='og:type' content='article' />
        <meta property='og:url' content='http://lfverissimo.com/' />
        <meta
          property='og:image'
          content='http://lfverissimo.com/twittermeta.png'
        />
        <meta
          property='og:description'
          content='About -  LF Verissimo personal portfolio, front-end developer, solving problems through code.'
        />
      </Head>

      <motion.main
        initial='hidden'
        animate='show'
        variants={animationParentVariants}
        className='w-full min-h-full flex flex-col items-center'
      >
        <Background />
        <Navbar />
        <motion.div
          variants={animationChildVariants}
          className='w-full max-w-screen-xl flex justify-between px-4 xl:px-0'
        >
          <h1 className='chromatic font-pop font-bold text-white-theme text-6xl sm:text-8xl'>
            ABOUT
          </h1>
        </motion.div>
        <section className='w-full max-w-screen-xl flex flex-col sm:flex-row justify-between px-4 xl:px-0'>
          <div className='w-full sm:w-1/2 flex flex-col items-start mt-12'>
            <motion.h2
              variants={animationChildVariants}
              className='font-pop text-2xl sm:text-3xl text-white-theme'
            >
              Hi, my name is <strong>Luiz Fernando Verissimo</strong>,
            </motion.h2>
            <motion.p
              variants={animationChildVariants}
              className='font-pop font-light text-2xl sm:text-3xl text-gray-theme mt-6'
            >
              I’m a self-taught front-end JavaScript developer, a geek developer
              exploring programming dungeons!
            </motion.p>
            <motion.p
              variants={animationChildVariants}
              className='font-pop text-2xl text-white-theme mt-6'
            >
              I am currently an front-end developer intern at the{' '}
              <a
                className='underline hover:text-pink-theme'
                href='https://mandarin.com.br'
                rel='external'
                target='_blank'
                rel='noopener'
              >
                Mandarin agency
              </a>
            </motion.p>
            <motion.h3
              variants={animationChildVariants}
              className='font-pop font-bold text-2xl sm:text-3xl text-pink-theme mt-12'
            >
              What can I do for you?
            </motion.h3>
            <motion.ul
              variants={animationChildVariants}
              className='font-pop font-bold text-xl sm:text-2xl text-white-theme ml-4 mt-4'
            >
              <li>Fullstack projects (CRUD)</li>
              <li>Mobile apps</li>
              <li>Websites</li>
              <li>Landing pages</li>
              <li>E-mail template</li>
            </motion.ul>
          </div>
          <div className='w-full sm:w-1/2 flex flex-col items-center sm:items-end mt-12 mb-20 sm:mb-0'>
            <img src='/avatar.jpg' alt='LF Verissimo avatar' />
            <p className='w-full font-pop text-white-theme text-lg sm:text-xl text-center sm:text-right mt-6'>
              <strong>Based in:</strong>
              <br />
              Londrina/PR - Brazil
            </p>
          </div>
        </section>
        <FooterMenu />
      </motion.main>
    </>
  );
}

export default About;
