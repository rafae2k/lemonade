import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=optional"
            rel="stylesheet"
          />
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>
            Lemonade - Create a playlist based on the setlist of your favorite
            artists shows
          </title>
          <meta
            name="description"
            content="Lemonade helps you to create a playlist based on the setlist of your favorite artist's shows."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
