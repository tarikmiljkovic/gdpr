const { API_URL } = process.env;

import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import LangSwitcher from '../components/LangSwitcher';
import { SiteContext } from "../contexts/SiteContext";
import React from 'react';

import de from "../locales/de";
import en from "../locales/en";

import Pdf from "react-to-pdf";
const ref = React.createRef();

export default function Generate({ result }) {

  let router = useRouter();

  const { locale } = router;
  const t = locale === "en" ? en : de;

  console.log(t);

  const { typeOfRequest, setTypeOfRequest } = useContext(SiteContext);

  return (
    <>
      <div className="relative py-16 bg-white overflow-hidden px-4 sm:px-48 lg:px-72">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <LangSwitcher></LangSwitcher>
        </div>
        <div className="relative">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                § 10 b
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {t.title}
              </span>
            </h1>
          </div>
          <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
            <p ref={ref}>{t.request}</p>
            {/* <h2>Everything you need to get up and running</h2> */}
          </div>
        </div>
      </div>
      <div className="relative bg-white overflow-hidden px-4 sm:px-48 lg:px-72">
        <div>
          <div className="bg-white">
            <div className="px-0 py-5 ">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Create Document
              </h3>
              <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                <div className="max-w-xl text-sm text-gray-500">
                  <p>
                    By clicking on the following button, you will get generated
                    request in the pdf format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Pdf targetRef={ref} filename="request.pdf">
            {({ toPdf }) => (
              <button
                type="button"
                onClick={toPdf}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create Document
              </button>
            )}
          </Pdf>
        </div>
      </div>
    </>
  );
}

// export async function getStaticProps(context) {
//   // set context locale, default.

//   // console.log(context.locale);

//   // const res = await fetch(
//   //   context.locale == "bs"
//   //     ? `${API_URL}/o-nama`
//   //     : `${API_URL}/o-nama?_locale=en`
//   // );
//   // const result = await res.json();

//   return {
//     props: { result },
//   };
// }
