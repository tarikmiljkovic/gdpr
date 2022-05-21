import '../styles/globals.css'

import { SiteProvider } from "../contexts/SiteContext";

function MyApp({ Component, pageProps }) {
  return <>
    <SiteProvider>
      <Component {...pageProps} />
    </SiteProvider>
  </>;
}

export default MyApp
