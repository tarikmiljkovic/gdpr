import '../styles/globals.css'

import { SiteProvider } from "../contexts/SiteContext";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return <>
    <SiteProvider>
      <Component {...pageProps} />
    </SiteProvider>
  </>;
}

export default appWithTranslation(MyApp);
