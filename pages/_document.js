import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          fcm_service_path="/firebase-messaging-sw.js"
          src="https://sdk.smartdx.co/handlers/ddf8945035fa4d6f939e13012a6b5b17.sdk"
          defer="defer"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
