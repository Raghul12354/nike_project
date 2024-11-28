import "../styles/index.css";
// import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Script fcm_service_path="/firebase-messaging-sw.js" src="https://sdk.smartdx.co/handlers/d91a8e6c82fe4cdba9a80f5040699a4c.sdk" defer="defer" /> */}
    </>
  );
}
