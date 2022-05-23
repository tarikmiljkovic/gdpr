import dynamic from "next/dynamic";
import React, { useRef, useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";



const DynamicLangSwitcher = dynamic(
  () => import("../components/LangSwitcher"),
  {
    ssr: false,
  }
);

const DynamicSiteContext = dynamic(() => import("../contexts/SiteContext"), {
  ssr: false,
});

import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  ReactPDF
} from "@react-pdf/renderer";

import { PDFViewer } from "@react-pdf/renderer";
import * as ReactDOM from 'react-dom';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const ref = React.createRef();

import { useTranslation } from "next-i18next";

export default function Generate() {


  const reference = useRef("");



  const [element, setElement] = useState("");


  const ref = useRef(null);
  const myElement = useRef(null);

  const App = () => (
    <PDFViewer width="100%" height="1000px">
      <MyDocument />
    </PDFViewer>
  );

  function handleClick() {
      ReactDOM.render(<App />, document.getElementById("root"));
  }

  useEffect(() => {});

  const generatePDF = () => {

  };

  let router = useRouter();
  const { query } = useRouter();


  const { locale } = router;

  const [fullName, setFullName] = useState(query.usersFullName);
  let [means, setMeans] = useState(query.usersMeans);
  const [request, setRequest] = useState(query.usersRequest);
  // const { typeOfRequest, setTypeOfRequest } = useContext(SiteContext);

  console.log(request);

  const { t } = useTranslation("Right to Access Personal Data");

  // Create styles



  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",

      fontSize: 11,
      padding: 30,
    },
    section: { color: "black", marginBottom: 30 },
    bold: { fontWeight: "700"},
  });

  let address = `epunkt GmbH
  Universitätsring 8,
  1010 Wien`;
  // means = "A26187G";


  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Reference: {t("title")}</Text>
        </View>
        <View style={styles.section}>
          <Text>Dear:</Text>
          <Text style={styles.bold}>{address}</Text>
        </View>
        <View style={styles.section}>
          <Text>{t("request", { name: fullName })}</Text>
        </View>
        <View style={styles.section}>
          <Text>Also I would like to add:</Text>

          <Text>{element}</Text>
        </View>
        <View style={styles.section}>
          <Text>Kind Regards</Text>
          <Text>{fullName}</Text>
          <Text>ID Number: {means}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <div className="relative py-16 bg-white overflow-hidden px-4 sm:px-48 lg:px-72">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <DynamicLangSwitcher></DynamicLangSwitcher>
        </div>
        <div className="relative">
          <div className="text-lg max-w-prose ">
            <h1>
              <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                {/* {request} */}
              </span>
              <span className="mt-2 block text-3xl text-left leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
                {/* {t("title", {name: fullName})} */}
                Here is your generated document:
              </span>
            </h1>
          </div>
          <div className="mt-6 prose prose-blue prose-lg text-black mx-auto">
            {/* <input
              type="text"
              clasName="w-full"
              name=""
              id=""
              ref={myElement}
              value=
            /> */}
          </div>

          <p>Reference: {t("title", { name: fullName })}</p>

          <br />

          {/*<p>Dear: {address}</p>*/}

          <br />
          <pre id="element">{t("request", { name: fullName })}</pre>
          <div className="mt-6 prose prose-blue prose-lg text-black mx-auto">
            <div>
              <label for="comment" class="block text-sm font-medium text-black">
                Add additional text to request
              </label>
              <div class="mt-1">
                <textarea
                  rows="4"
                  name="comment"
                  // ref={myElement}
                  onChange={(event) => setElement(event.target.value)}
                  id="comment"
                  class="shadow-sm focus:ring-indigo-500 border-solid border-gray-500 border-2 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded"
                ></textarea>
              </div>
            </div>
            <p>{fullName}</p>
            <p>{means}</p>

            <br />
          </div>
        </div>
      </div>
      <div className="relative bg-white overflow-hidden px-4 sm:px-48 lg:px-72">
        <div>
          <div className="bg-white">
            <div className="px-0 py-5 ">
              <h3 className="text-lg leading-6 font-medium text-black">
                <button
                  type="button"
                  // onClick={toPdf}
                  // onClick={generatePDF}
                  onClick={() => handleClick()}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Create Document
                </button>
              </h3>
              <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                <div className="max-w-xl text-sm text-black">
                  <p>
                    By clicking on the following button, you will get generated
                    request in the pdf format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink> */}

        <div id="root" className=""></div>
      </div>
      ;
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
