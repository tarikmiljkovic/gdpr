import '../styles/globals.css'

import { SiteProvider } from "../contexts/SiteContext";
import { appWithTranslation } from "next-i18next";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <>

        <SiteProvider>
          <Component {...pageProps} />
        </SiteProvider>

    </>
  );
}

export default appWithTranslation(MyApp);
