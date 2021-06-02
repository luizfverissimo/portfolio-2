import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
            content='LF Verissimo personal portfolio, front-end developer.'
          />
          <meta name='robots' content='index, follow' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta name='twitter:card' value='summary'></meta>
          <meta
            name='twitter:image'
            content='http://lfverissimo.com/link-img.png'
          ></meta>

          <meta
            property='og:title'
            content='LF Verissimo Portfolio | Front-end Developer'
          />
          <meta property='og:type' content='article' />
          <meta property='og:url' content='http://lfverissimo.com/' />
          <meta
            property='og:image'
            content='http://lfverissimo.com/link-img.png'
          />
          <meta
            property='og:description'
            content='LF Verissimo personal portfolio, front-end developer.'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
