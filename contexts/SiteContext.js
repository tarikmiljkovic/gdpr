import { createContext, useState } from "react";
import React, {useRef} from "react";

const SiteContext = createContext();

const SiteProvider = ({ children }) => {

  const [fullName, setFullName] = useState("");
  const [means, setMeans] = useState("");
  const [request, setRequest] = useState("");
  const [element, setElement] = useState("");

  return (
    <SiteContext.Provider
      value={{fullName, setFullName, means, setMeans, request, setRequest}}
    >
      {children}
    </SiteContext.Provider>
  );
};

export { SiteProvider, SiteContext };
