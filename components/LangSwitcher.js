

import { useEffect, useContext, useState } from "react";
import { SiteContext } from "../contexts/SiteContext";
import Link from "next/link";
import { useRouter } from "next/router";
// import { RiMenuLine, RiMenu4Fill } from "react-icons/ri";

// import de from "../locales/de/requests";
// import en from "../locales/en/requests";





function LangSwitcher() {

  let router = useRouter();
  const { locale } = router;

  // const t = locale === "de" ? de : en;

  return (
    <span className="relative z-0 inline-flex py-4">
      <button
        type="button"
        className="relative inline-flex items-center px-4 py-2  border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <Link href="" locale={(router.locale = "de")}>
          <a>Deutsch</a>
        </Link>
      </button>
      <button
        type="button"
        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <Link href="" locale={(router.locale = "en")}>
          <a>English</a>
        </Link>
      </button>
      <button
        type="button"
        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <Link href="" locale={(router.locale = "uk")}>
          <a>Ukrainian</a>
        </Link>
      </button>
    </span>
  );
}

export default LangSwitcher;
