import fs from 'fs';
import path from 'path';
import Carousel from 'nuka-carousel';
import Head from 'next/head';

import Background from '../../../components/Background';
import FooterMenu from '../../../components/FooterMenu';
import Navbar from '../../../components/Navbar';
import CodeButton from '../../../components/CodeButton';
import LaunchButton from '../../../components/LaunchButton';

const Project = ({ project }) => {
  if (!project) return <div>not found</div>;

  const { html, attributes } = project;

  return (
    <>
      <Head>
        <title>{attributes.title} - LF Verissimo | Front-end Developer</title>
        <link rel='icon' href='/favicon.ico' />
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
      <main className='w-full min-h-full flex flex-col items-center'>
        <Background />
        <Navbar />
        <div className='w-full max-w-screen-xl flex justify-between items-end'>
          <h1 className='chromatic font-pop font-bold text-white-theme text-8xl'>
            PROJECTS
          </h1>
        </div>

        <section className='w-full max-w-screen-xl flex justify-between items-center'>
          <div className='flex flex-col mt-6 mr-5'>
            <p className='font-pop font-light text-pink-theme text-2xl'>
              {attributes.type}
            </p>
            <h2 className='font-pop font-bold text-white-theme text-4xl'>
              {attributes.title}
            </h2>
            <p className='mt-6 font-pop font-light text-gray-theme text-2xl'>
              {attributes.desc}
            </p>
            <p className='mt-6 font-pop font-light text-white-theme text-2xl'>
              <strong className='font-bold'>Tech's</strong>
              <br />
              {attributes.tech}
            </p>
            <p className='my-6 font-pop font-light text-gray-theme text-2xl'>
              {attributes.extraInfo}
            </p>

            <div
              className='my-6 font-pop font-light text-gray-theme text-2xl'
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>

            <LaunchButton href={attributes.link} />
            <CodeButton href={attributes.codeLink} />
          </div>

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
        </section>

        <FooterMenu />
      </main>
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
