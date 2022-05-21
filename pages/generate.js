const { API_URL } = process.env;

import { useContext, useState } from "react";
import { useRouter } from "next/router";
import LangSwitcher from '../components/LangSwitcher';
import { SiteContext } from "../contexts/SiteContext";
import React from 'react';
import Link from "next/link";

// import i18next from "i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import de from "../locales/de/requests";
// import en from "../locales/en/requests";

import Pdf from "react-to-pdf";
const ref = React.createRef();

import { useTranslation } from "next-i18next";

export default function Generate() {

  let router = useRouter();
  const { query } = useRouter();

  // const { locale } = router;
  // const t = locale === "en" ? en : de;

  const { locale } = router;

  const [fullName, setFullName] = useState(query.usersFullName);
  const [means, setMeans] = useState(query.usersMeans);
  const [request, setRequest] = useState(query.usersRequest);
  // const { typeOfRequest, setTypeOfRequest } = useContext(SiteContext);

  console.log(request);


  //  console.log("query::", query);
  //  console.log("entity key:-", query.usersFullName);

  // const { t } = useTranslation(request);
  const { t } = useTranslation("Right to Access Personal Data");


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
                {/* {request} */}
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {t("title", {name: fullName})}
              </span>
            </h1>
          </div>
          <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
            <p>{t("request", { name: fullName })}</p>
            {/* <h2>Everything you need to get up and running</h2> */}
          </div>
        </div>
      </div>
      <div className="relative bg-white overflow-hidden px-4 sm:px-48 lg:px-72">
        <div>
          <div className="bg-white">
            <div className="px-0 py-5 ">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                <Link href="">
                  <a onClick={() => setUserInformation("0vh")}>
                    Create Document
                  </a>
                </Link>
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


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "Right to Object",
        "Right to Access Personal Data",
        "Right to Data Portability",
        "Right to Rectification",
        "Right to Reject Automated Individual Decision-Making",
        "Right to Restrict Data Processing",
      ])),
      // Will be passed to the page component as props
    },
  };
}