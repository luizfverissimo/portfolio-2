import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import { motion } from 'framer-motion';

import Background from '../../components/Background';
import FooterMenu from '../../components/FooterMenu';
import Navbar from '../../components/Navbar';
import CodeButton from '../../components/CodeButton';
import ViewButton from '../../components/ViewButton';
import {
  animationChildVariants,
  animationParentVariants
} from '../../utils/animations';

const importProjects = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/projects', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/projects/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

const Projects = ({ projectsList }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 650) setIsMobile(true);
  }, []);

  return (
    <>
      <Head>
        <title>Projects - LF Verissimo | Front-end Developer</title>
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
          content='Projects of LF Verissimo, front-end developer.'
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
          content='Projects of LF Verissimo, front-end developer.'
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
        <div className='w-full max-w-screen-xl flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-end px-4 xl:px-0 '>
          <motion.h1
            variants={animationChildVariants}
            className='chromatic font-pop font-bold text-white-theme text-6xl sm:text-8xl'
          >
            PROJECTS
          </motion.h1>
          <motion.a
            variants={animationChildVariants}
            className='font-pop transition-all mt-2 sm:mt-0 text-white-theme text-base sm:text-xl hover:text-pink-theme'
            rel='external'
            href='https://github.com/luizfverissimo?tab=repositories'
            target='_blank'
            rel='noopener'
          >
            All Projects on GITHUB &rarr;
          </motion.a>
        </div>

        <section className='w-full h-full sm:h-auto flex flex-auto mt-5 lg:mt-10'>
          {!isMobile && (
            <Carousel
              defaultControlsConfig={{
                nextButtonStyle: {
                  fontFamily: 'Poppins',
                  fontWeight: 'bold',
                  borderRadius: '40px 0 0 40px',
                  fontSize: '24px',
                  outline: 0
                },
                nextButtonText: '>',
                prevButtonStyle: {
                  fontFamily: 'Poppins',
                  fontWeight: 'bold',
                  borderRadius: '0 40px 40px 0',
                  fontSize: '24px',
                  outline: 0
                },
                prevButtonText: '<',
                pagingDotsStyle: {
                  display: 'none'
                }
              }}
              wrapAround
              slidesToShow={4}
              transitionMode={'scroll3d'}
              cellSpacing={100}
              slideWidth='400px'
            >
              {projectsList.map((project, index) => {
                return (
                  <article
                    key={index}
                    className='w-full bg-black-theme h-auto p-4 sm:p-8 border rounded-xl border-gray-theme flex flex-col items-start justify-between relative shadow-2xl'
                  >
                    <div className='w-full flex flex-col'>
                      <h3 className='w-full font-pop font-light text-pink-theme text-lg sm:text-xl'>
                        {project.attributes.type}
                      </h3>
                      <h2 className='w-full mt-2 font-pop font-bold text-white-theme text-2xl sm:text-3xl'>
                        {project.attributes.title}
                      </h2>
                    </div>

                    <div className='w-full flex flex-col'>
                      <Link
                        href='/projects/project/[slug]'
                        as={`/projects/project/${project.slug}`}
                      >
                        <a>
                          <img
                            className='my-6'
                            src={project.attributes.coverImg}
                            alt={project.attributes.title}
                          />
                        </a>
                      </Link>
                      <p className='w-full font-pop text-gray-theme text-lg sm:text-xl'>
                        {project.attributes.desc}
                      </p>
                      <div>
                        <ViewButton slug={project.slug} />
                        <CodeButton href={project.attributes.codeLink} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </Carousel>
          )}
          {isMobile && (
            <div className='w-full h-auto flex flex-col mt-5 mb-20 px-5'>
              {projectsList.map((project, index) => {
                return (
                  <article
                    key={index}
                    className='w-full bg-black-theme h-auto p-8 my-5 border rounded-xl border-gray-theme flex flex-col items-start justify-between relative shadow-2xl'
                  >
                    <div className='w-full flex flex-col'>
                      <h3 className='w-full font-pop font-light text-pink-theme text-lg sm:text-xl'>
                        {project.attributes.type}
                      </h3>
                      <h2 className='w-full mt-2 font-pop font-bold text-white-theme text-2xl sm:text-3xl'>
                        {project.attributes.title}
                      </h2>
                    </div>

                    <div className='w-full flex flex-col'>
                      <Link
                        href='/projects/project/[slug]'
                        as={`/projects/project/${project.slug}`}
                      >
                        <a>
                          <img
                            className='my-6'
                            src={project.attributes.coverImg}
                            alt={project.attributes.title}
                          />
                        </a>
                      </Link>
                      <p className='w-full font-pop text-gray-theme text-lg sm:text-xl'>
                        {project.attributes.desc}
                      </p>
                      <div>
                        <ViewButton slug={project.slug} />
                        <CodeButton href={project.attributes.codeLink} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <FooterMenu />
      </motion.main>
    </>
  );
};

export async function getStaticProps() {
  const projectsList = await importProjects();

  return {
    props: {
      projectsList
    }
  };
}

export default Projects;
