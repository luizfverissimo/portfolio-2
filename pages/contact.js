import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';
import * as emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

import Background from '../components/Background';
import FooterMenu from '../components/FooterMenu';
import Navbar from '../components/Navbar';

function Contact() {
  const [isVerified, setIsVerified] = useState(false);
  const [erro, setErro] = useState('Mensagem de erro!')

  useEffect(() => {
    init(`${process.env.NEXT_PUBLIC_EMAILJS_USER}`);
  }, []);

  const recaptchaVerify = () => {
    console.log('verificou');
    setIsVerified(true);
    return;
  };

  return (
    <>
      <Head>
        <title>Contact - LF Verissimo | Front-end Developer</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Contact LF Verissimo, front-end developer.'
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
          content='Contact LF Verissimo, front-end developer.'
        />
      </Head>
      <main className='w-full min-h-full flex flex-col items-center'>
        <Background />
        <Navbar />
        <div className='w-full max-w-screen-xl flex justify-between items-end'>
          <h1 className='chromatic font-pop font-bold text-white-theme text-8xl'>
            CONTACT
          </h1>
        </div>

        <section className='w-full max-w-screen-xl flex justify-between items-center'>
          <div className='w-1/2 flex flex-col items-start justify-start'>
            <legend className='mt-8 font-pop font-bold text-2xl text-white-theme'>
              Name
            </legend>
            <input
              type='text'
              className='w-full transition-all bg-transparent border-b-2 focus:border-pink-theme font-pop font-light text-white text-xl p-2  outline-none'
            ></input>
            <legend className='mt-8 font-pop font-bold text-2xl text-white-theme'>
              E-mail
            </legend>
            <input
              type='text'
              className='w-full transition-all bg-transparent border-b-2 focus:border-pink-theme font-pop font-light text-white text-xl p-2 outline-none'
            ></input>
            <legend className='mt-8 font-pop font-bold text-2xl text-white-theme'>
              Message
            </legend>
            <textarea
              type='text'
              className='w-full mt-2 h-40 transition-all bg-transparent border-2 focus:border-pink-theme font-pop font-light text-white text-xl p-2 outline-none'
            ></textarea>
            <div className='w-full mt-4 flex flex-col items-center'>
              <p className='font-pop h-5 text-xl text-pink-theme'>
                {erro}
              </p>
              <div className='w-full mt-8 flex justify-between'>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                  onChange={recaptchaVerify}
                  theme='dark'
                  hl='en'
                />
                <button className="font-pop font-bold text-white-theme text-2xl transition-all transform hover:text-pink-theme hover:-translate-y-1">Contact!</button>
              </div>
            </div>
          </div>
        </section>
        <FooterMenu />
      </main>
    </>
  );
}

export default Contact;
