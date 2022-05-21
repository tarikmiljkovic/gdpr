// import { useEffect, useContext, useState } from "react";
// import { SiteContext } from "../contexts/SiteContext";
// import Link from "next/link";
// import { useRouter } from "next/router";
// // import { RiMenuLine, RiMenu4Fill } from "react-icons/ri";

// import de from "../locales/de";
// import en from "../locales/en";

function Terms() {

  return (
    <div className="lg:px-4 xl:px-4 py-12">
      <h1>
        <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
          Am I a data subject?
        </span>
      </h1>
      <p>
        The identified or identifiable living individual to whom personal data
        relates is the data subject. Personal data’ means any information
        relating to an identified or identifiable natural person (‘data
        subject’). An identifiable natural person is one who can be identified,
        directly or indirectly, in particular by reference to an identifier such
        as a name, an identification number, location data, an online identifier
        or to one or more factors specific to the physical, physiological,
        genetic, mental, economic, cultural or social identity of that natural
        person.
      </p>
      <h1>
        <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
          Who is a data controller?
        </span>
      </h1>
      <p>
        The Controller is the Person , who shall take appropriate measures to
        provide any information to data subject. The data controller has to
        provide data subject with:
      </p>
      <ul className="list-disc">
        <li>
          the identity and the contact details of the controller and, where
          applicable, of the controller’s representative;
        </li>
        <li>
          the contact details of the data protection officer, where applicable;
        </li>
        <li>
          the purposes of the processing for which the personal data are
          intended as well as the legal basis for the processing;
        </li>
        <li>
          where the processing is based on, the legitimate interests pursued by
          the controller or by a third party
        </li>
        <li>
          the recipients or categories of recipients of the personal data, if
          any;
        </li>
        <li>
          where applicable, the fact that the controller intends to transfer
          personal data to a third country or international organisation and the
          existence or absence of an adequacy decision by the Commission
        </li>
        <li>
          provide the data subject with the following further information
          necessary to ensure fair and transparent processing:
        </li>
      </ul>
      <h1>
        <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
          Rights of the data subject eight fundamental rights (GDPR)
        </span>
      </h1>
      <ul className="list-disc">
        <li>Right to Access Personal Data</li>
        <ul>
          <li>
             Data subjects have the right to access the data, which are
            collected on them by a data controller.
          </li>
        </ul>
        <li>Right to Rectification</li>
        <ul>
          <li>
             Data subjects have the right to request modification of their data,
            including the correction or errors and the updating of incomplete
            information (Article 16).
          </li>
        </ul>
        <li>Right to Erasure</li>
        <ul>
          <li>
             The right to erasure – also referred to as the right to deletion or
            the right to be forgotten – allows a data subject to stop all
            processing of their data and request their personal data be erased
            (Article 17).
          </li>
        </ul>
        <li>Right to Access Personal Data</li>
        <ul>
          <li>
             Data subjects have the right to access the data, which are
            collected on them by a data controller.
          </li>
        </ul>
        <li>Right to Restrict Data Processing</li>
        <ul>
          <li>
             Data subjects, under certain circumstances, can request that all
            processing of their personal data be stopped (Article 18).
          </li>
        </ul>
        <li>Right to be Object</li>
        <ul>
          <li>
            If a request to stop data processing is rejected by a data
            controller, the data subject has the right to object to their
            Article 18 right being denied (Article 21).
          </li>
        </ul>
        <li>Right to Data Portability</li>
        <ul>
          <li>
             A data subject can request that their personal data file be sent
            electronically to a third party. Data must be provided in a commonly
            used, machine readable format, if doing so is technically feasible
            (Article 20).
          </li>
        </ul>
        <li>Right to Reject Automated Individual Decision-Making</li>
        <ul>
          <li>
             Data subjects have the right to refuse the automated processing of
            their personal data to make decisions about them if that
            significantly affects the data subject or produces legal effects –
            profiling for example (Article 22).
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Terms;
