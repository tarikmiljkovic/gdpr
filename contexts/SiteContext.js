import { createContext, useState } from "react";
import React, {useRef} from "react";

const SiteContext = createContext();

const SiteProvider = ({ children }) => {

  const [fullName, setFullName] = useState("");
  const [means, setMeans] = useState("");
  const [request, setRequest] = useState("");
  const [element, setElement] = useState("");
  const [address, setAddress] = useState("");

  return (
    <SiteContext.Provider
      value={{fullName, setFullName, means, setMeans, request, setRequest, address, setAddress}}
    >
      {children}
    </SiteContext.Provider>
  );
};

export { SiteProvider, SiteContext };
