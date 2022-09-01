import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        {/* <Script
          id="paimentScript"
          src="https://checkout.epayco.co/checkout.js"
        /> */}
      </body>
    </Html>
  );
}
