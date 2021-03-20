import React from 'react';
import Head from 'next/head';

import Background from '../components/Background';
import FooterMenu from '../components/FooterMenu';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About - LF Verissimo | Front-end Developer</title>
        <link rel='icon' href='/favicon.ico' />
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

      <main className='w-full min-h-full flex flex-col items-center'>
        <Background />
        <Navbar />
        <div className='w-full max-w-screen-xl flex justify-between'>
          <h1 className='chromatic font-pop font-bold text-white-theme text-8xl'>
            ABOUT
          </h1>
        </div>
        <section className='w-full max-w-screen-xl flex justify-between'>
          <div className='w-1/2 flex flex-col items-start mt-12'>
            <h2 className='font-pop text-3xl text-white-theme'>
              Hi, my name is <strong>Luiz Fernando Verissimo</strong>,
            </h2>
            <p className='font-pop font-light text-3xl text-gray-theme mt-6'>
              I’m a self-taught front-end JavaScript developer, a geek developer
              exploring programming dungeons!
            </p>
            <p className='font-pop text-2xl text-white-theme mt-6'>
              I am currently an front-end developer intern at the <a className="underline hover:text-pink-theme" href="https://mandarin.com.br" rel="external" target="_blank" rel="noopener">Mandarin agency</a>
            </p>
            <h3 className='font-pop font-bold text-3xl text-pink-theme mt-12'>
              What can I do for you?
            </h3>
            <ul className='font-pop font-bold text-2xl text-white-theme ml-4 mt-4'>
              <li>Fullstack projects (CRUD)</li>
              <li>Mobile apps</li>
              <li>Websites</li>
              <li>Landing pages</li>
              <li>E-mail template</li>
            </ul>
          </div>
          <div className='w-1/2 flex flex-col items-end mt-12'>
            <img src='/avatar.jpg' alt='LF Verissimo avatar' />
            <p className='font-pop text-white-theme text-xl text-right mt-6'>
              <strong>Based in:</strong>
              <br />
              Londrina/PR - Brazil
            </p>
          </div>
        </section>
        <FooterMenu />
      </main>
    </>
  );
}

export default About;
