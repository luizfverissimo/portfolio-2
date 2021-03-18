import Head from 'next/head';
import Link from 'next/link';

import Background from '../../components/Background';
import FooterMenu from '../../components/FooterMenu';
import Navbar from '../../components/Navbar';
import CodeButton from '../../components/CodeButton';
import ViewButton from '../../components/ViewButton';

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
  return (
    <>
      <Head>
        <title>Projects - LF Verissimo | Front-end Developer</title>
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

        <section className='w-full max-w-screen-xl flex flex-auto mt-10 overflow-x-scroll'>
          {projectsList.map((project, index) => {
            return (
              <article
                key={index}
                style={{ width: 256 }}
                className='w-52 mr-28 flex flex-col flex-grow-0 flex-shrink-0 items-start justify-between relative mb-12'
              >
                <div className='w-full flex flex-col'>
                  <h3 className='w-full font-pop font-light text-pink-theme text-xl'>
                    {project.attributes.type}
                  </h3>
                  <h2 className='w-full mt-2 font-pop font-bold text-white-theme text-3xl'>
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
                  <p className='w-full font-pop text-gray-theme text-xl'>
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
        </section>

        <FooterMenu />
      </main>
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
