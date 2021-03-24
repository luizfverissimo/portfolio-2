import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';
import * as emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

import Background from '../components/Background';
import FooterMenu from '../components/FooterMenu';
import Navbar from '../components/Navbar';
import validateContact from '../utils/validation';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    init(`${process.env.NEXT_PUBLIC_EMAILJS_USER}`);
  }, []);

  const handleSubmitContactForm = async (event) => {
    event.preventDefault();

    const res = validateContact(name, email, message);

    if (!res.status) {
      setStatus(res.message);
      return;
    }

    if (!isVerified) {
      setStatus('Verify reCaptcha field.');
      return;
    }

    try {
      setStatus('Sending message...');
      await emailjs.send('service_bsg0df3', 'template_xwi0imb', {
        from_name: name,
        from_email: email,
        message: message
      });

      setStatus('The message was sent, I will reply you soon!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.log(err);
      setStatus('An Error occurred, please resubmit.');
    }
  };

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
        <div className='w-full max-w-screen-xl flex justify-between items-end px-4 xl:px-0'>
          <h1 className='chromatic font-pop font-bold text-white-theme text-6xl sm:text-8xl'>
            CONTACT
          </h1>
        </div>

        <section className='w-full max-w-screen-xl flex justify-between items-center mb-20 sm:mb-0'>
          <div className='w-full px-4 xl:px-0 sm:w-1/2 flex flex-col items-start justify-start'>
            <label
              for='Name'
              className='mt-4 sm:mt-8 font-pop font-bold text-xl sm:text-2xl text-white-theme'
            >
              Name
            </label>
            <input
              id='Name'
              type='text'
              className='w-full transition-all bg-transparent border-b-2 focus:border-pink-theme font-pop font-light text-white text-lg sm:text-xl p-2  outline-none'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label
              for='Email'
              className='mt-4 sm:mt-8 font-pop font-bold text-xl sm:text-2xl text-white-theme'
            >
              E-mail
            </label>
            <input
              id='Email'
              type='text'
              className='w-full transition-all bg-transparent border-b-2 focus:border-pink-theme font-pop font-light text-white text-lg sm:text-xl p-2 outline-none'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label
              for='Message'
              className='mt-4 sm:mt-8 font-pop font-bold text-xl sm:text-2xl text-white-theme'
            >
              Message
            </label>
            <textarea
              id='Message'
              type='text'
              className='w-full mt-2 h-15 sm:h-40  transition-all bg-transparent border-2 focus:border-pink-theme font-pop font-light rounded-xl text-white text-lg sm:text-xl p-2 outline-none'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className='w-full mt-4 flex flex-col items-center'>
              <p className='font-pop h-auto sm:h-5 text-lg sm:text-xl text-pink-theme'>{status}</p>
              <div className='w-full mt-4 sm:mt-8 flex flex-col sm:flex-row justify-start sm:justify-between items-center '>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                  onChange={recaptchaVerify}
                  theme='dark'
                  hl='en'
                />
                <button
                  onClick={handleSubmitContactForm}
                  className='group flex outline-none mt-5 sm:mt-0 items-center font-pop font-bold text-white-theme text-2xl transition-all transform hover:text-pink-theme hover:-translate-y-1'
                >
                  <svg
                    className='mr-2 fill-current outline-none text-white-theme transition-all group-hover:text-pink-theme'
                    width='24'
                    height='24'
                    viewBox='0 0 29 28'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M27.6401 12.1428L2.14011 0.142751C1.88333 0.021926 1.59755 -0.0235801 1.31595 0.0115168C1.03434 0.0466137 0.768474 0.160874 0.54921 0.341028C0.329946 0.521182 0.166286 0.75984 0.0772323 1.02929C-0.0118211 1.29873 -0.0226134 1.58792 0.0461091 1.86325L1.86411 9.13675L13.5011 13.5003L1.86411 17.8638L0.0461091 25.1373C-0.0239064 25.4128 -0.0140149 25.7026 0.0746267 25.9727C0.163268 26.2428 0.326995 26.4821 0.546654 26.6626C0.766313 26.8431 1.03282 26.9573 1.31501 26.9918C1.59719 27.0264 1.88339 26.9799 2.14011 26.8578L27.6401 14.8578C27.8978 14.7366 28.1157 14.5446 28.2683 14.3042C28.4209 14.0639 28.502 13.785 28.502 13.5003C28.502 13.2155 28.4209 12.9366 28.2683 12.6963C28.1157 12.4559 27.8978 12.2639 27.6401 12.1428Z' />
                  </svg>
                  Contact!
                </button>
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
