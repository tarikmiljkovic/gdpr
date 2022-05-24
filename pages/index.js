import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useRef, useEffect, useContext, useState } from "react";
import dynamic from 'next/dynamic'
import Link from "next/link";
import { useRouter } from "next/router";

import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Terms from "../components/Terms";
// import { SiteContext } from "../contexts/SiteContext";
import SiteContext from "../contexts/SiteContext";


import { data } from "autoprefixer";


export default function Home() {

  let router = useRouter();
  const { locale } = router;

  const [fullName, setFullName] = useState("");
  const [means, setMeans] = useState("");
  const [request, setRequest] = useState("");
  const [address, setAddress] = useState("");

  console.log(fullName, means, request, address);

  const names = [
    "Right to Rectification",
    "Right to Access Personal Data",
    "Right to Restrict Data Processing",
    "Right to Object",
    "Right to Data Portability",
    "Right to Reject Automated Individual Decision-Making",
  ];

  // const { typeOfRequest, setTypeOfRequest } = useContext(SiteContext);

  return (
    <div>
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Logo></Logo>

              <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
                Create GDPR Request for your case
              </h2>
              <a href="/Datela.rar" download>
                Download the App for offline use
              </a>
            </div>
            <div className="mt-8">
              <div>
                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      With the following form, you are able to create requests
                      with your Information{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="input"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Name and Surename{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="nameSurename"
                        name="nameSurename"
                        value={data.fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        type="name"
                        autoComplete="input"
                        // required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="text"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Means of identification*{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="text"
                        name="text"
                        type="text"
                        value={data.means}
                        onChange={(event) => setMeans(event.target.value)}
                        autoComplete="current-password"
                        // required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="text"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Recipient{" "}
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="address"
                        name="address"
                        type="textarea"
                        value={data.means}
                        onChange={(event) => setAddress(event.target.value)}
                        autoComplete="current-password"
                        // required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Request
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      value={data.request}
                      onChange={(event) => setRequest(event.target.value)}
                    >
                      {names.map((name) => (
                        <option key={name}>{name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center justify-between"></div>
                  <div>
                    <Link
                      href={{
                        pathname: "/generate",
                        query: {
                          usersFullName: fullName,
                          usersMeans: means,
                          usersRequest: request,
                          usersAddress: address,
                        },
                      }}
                    >
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <a>Create Document</a>
                      </button>
                    </Link>
                  </div>
                </form>
                <br />
                <br />
                <a href="/Info_Ukr.pdf" download>
                  Download General Information in Ukrainian{" "}
                </a>
                <br />
                <br />
                <a href="/Info_Serbian.pdf" download>
                  Download General Information in Serbian{" "}
                </a>
                <br />
                <br />
                <a href="/21Ukr.pdf" download>
                  Download Information for Right to Object in Ukrainian{" "}
                </a>
                <br />
                <br />
                <a href="/21Rus.pdf" download>
                  Download Information for Right to Object in Russian{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hidden lg:block relative w-0 flex-1"> */}

        <Terms></Terms>
      </div>
      <Footer></Footer>
    </div>
  );
}
