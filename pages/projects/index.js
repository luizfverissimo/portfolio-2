import Link from 'next/link'

const importProjects = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/projects', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/projects/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Projects = ({ projectsList }) => {
  return (
    <h1>Olá Mundão!</h1>
  )
}

export async function getStaticProps() {
  const projectsList = await importProjects()

  return {
    props: {
      projectsList,
    },
  }
}

export default Projects