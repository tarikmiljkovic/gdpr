import { createContext, useState } from "react";

const SiteContext = createContext();

const SiteProvider = ({ children }) => {

  const [pageTranslate, setPageTranslate] = useState("0vh");
  const [pageTranslateSecond, setPageTranslateSecond] = useState("0vh");
  const [carouselState, mutateCarousel] = useState(true);
  const [typeOfRequest, setTypeOfRequest] = useState(1);

  const [category, setCategory] = useState("svi");

  return (
    <SiteContext.Provider
      value={{
        typeOfRequest,
        setTypeOfRequest,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export { SiteProvider, SiteContext };
