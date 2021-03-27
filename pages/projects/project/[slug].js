import fs from 'fs';
import path from 'path';
import Carousel from 'nuka-carousel';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Background from '../../../components/Background';
import FooterMenu from '../../../components/FooterMenu';
import Navbar from '../../../components/Navbar';
import CodeButton from '../../../components/CodeButton';
import LaunchButton from '../../../components/LaunchButton';
import {
  animationChildVariants,
  animationParentVariants
} from '../../../utils/animations';

const Project = ({ project }) => {
  if (!project) return <div>not found</div>;

  const { html, attributes } = project;

  return (
    <>
      <Head>
        <title>{attributes.title} - LF Verissimo | Front-end Developer</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
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
          className='w-full max-w-screen-xl flex justify-between items-end px-4 sm:px-0'
        >
          <h1 className='chromatic font-pop font-bold text-white-theme text-6xl sm:text-8xl'>
            PROJECTS
          </h1>
        </motion.div>

        <section className='w-full max-w-screen-xl mb-20 sm:mb-0 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-0'>
          <div className='w-full sm:w-1/2 flex flex-col mt-6 mr-0 mb-10 sm:mb-0 sm:mr-5'>
            <motion.p
              variants={animationChildVariants}
              className='font-pop font-light text-pink-theme text-xl sm:text-2xl'
            >
              {attributes.type}
            </motion.p>
            <motion.h2
              variants={animationChildVariants}
              className='font-pop font-bold text-white-theme text-2xl sm:text-4xl'
            >
              {attributes.title}
            </motion.h2>
            <motion.p
              variants={animationChildVariants}
              className='mt-6 font-pop font-light text-gray-theme text-xl sm:text-2xl'
            >
              {attributes.desc}
            </motion.p>
            <motion.p
              variants={animationChildVariants}
              className='mt-6 font-pop font-light text-white-theme text-xl sm:text-2xl'
            >
              <strong className='font-bold'>Tech's</strong>
              <br />
              {attributes.tech}
            </motion.p>
            {attributes.extra && (
              <>
                <motion.p
                  variants={animationChildVariants}
                  className='my-6 font-pop font-light text-gray-theme text-xl sm:text-2xl'
                >
                  {attributes.extraInfo}
                </motion.p>

                <div
                  className='my-6 font-pop font-light text-gray-theme text-xl sm:text-2xl'
                  dangerouslySetInnerHTML={{ __html: html }}
                ></div>
              </>
            )}

            <motion.div variants={animationChildVariants}>
              <LaunchButton href={attributes.link} />
              <CodeButton href={attributes.codeLink} />
            </motion.div>
          </div>

            <div className="w-full sm:w-1/2">
            <Carousel
              defaultControlsConfig={{
                nextButtonStyle: {
                  fontFamily: 'Poppins',
                  fontWeight: 'bold',
                  borderRadius: '20px 0 0 20px',
                  outline: 0
                },
                nextButtonText: '>',
                prevButtonStyle: {
                  fontFamily: 'Poppins',
                  fontWeight: 'bold',
                  borderRadius: '0 20px 20px 0',
                  outline: 0
                },
                prevButtonText: '<',
                pagingDotsStyle: {
                  display: 'none'
                }
              }}
              autoplay
              wrapAround
              
            >
              {attributes.images.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt={`${attributes.title}-${index}`}
                  />
                );
              })}
            </Carousel>
            </div>
        </section>

        <FooterMenu />
      </motion.main>
    </>
  );
};

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'content/projects'))
    .map((project) => {
      const trimmedName = project.substring(0, project.length - 3);
      return {
        params: { slug: trimmedName }
      };
    });

  return {
    paths,
    fallback: false // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const project = await import(`../../../content/projects/${slug}.md`).catch(
    () => null
  );

  return {
    props: {
      project: project.default
    }
  };
}

export default Project;
