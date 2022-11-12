import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/codestr.jpeg"
          />
          <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/codestr.jpeg"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/codestr.jpeg"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
