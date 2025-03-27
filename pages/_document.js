import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script
          fcm_service_path="/firebase-messaging-sw.js"
          src="https://sdk.smartdx.co/handlers/d91a8e6c_82fe_4cdb_a9a8_0f5040699a4c.sdk"
          defer="defer"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
