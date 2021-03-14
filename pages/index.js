import React from 'react';
import Head from 'next/head';

import Background from '../components/Background';
import FooterMenu from '../components/FooterMenu';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>LF Verissimo | Front-end Developer</title>
        <link rel='icon' href='/favicon.ico' />
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
      <main className='w-full min-h-full flex flex-col items-center'>
        <Background />
        <Navbar />
        <section className='w-full max-w-screen-xl flex flex-col justify-center'>
          <p className='font-pop text-4xl text-white mt-40'>
            Hi,
            <br /> I'm <span className='text-pink-theme'>LF Verissimo</span>!
          </p>
          <h1 className='chromatic font-pop font-bold text-white-theme text-9xl'>
            FRONT-END
            <br />
            DEVELOPER
          </h1>
          <h2 className='mt-12 font-pop font-light text-gray-theme text-4xl'>
            JavaScript, Node.js, React.js, React Native and Next.js
          </h2>
        </section>
        <FooterMenu />
      </main>
    </>
  );
}

export default Home;
