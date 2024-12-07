import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>RET Company</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="description" content="RET Company - Your trusted partner in innovative solutions." />

        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        
        <meta property="og:title" content="RET Company" />
        <meta property="og:description" content="RET Company - Your trusted partner in innovative solutions." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.retcompany.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
