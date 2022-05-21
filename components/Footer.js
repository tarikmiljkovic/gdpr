import { useEffect, useContext, useState } from "react";
import { SiteContext } from "../contexts/SiteContext";
import Link from "next/link";
import { useRouter } from "next/router";
// import { RiMenuLine, RiMenu4Fill } from "react-icons/ri";

// import de from "../locales/de/requests";
// import en from "../locales/en/requests";

function LangSwitcher({ requestJ, currentProjectIndex }) {
  let router = useRouter();

  const { locale } = router;
  // const t = locale === "de" ? de : en;

const navigation = {
  main: [
    { name: "Impressum", href: "/impressum" },
    { name: "Terms Explanation", href: "/terms" },
  ],
};

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {/* {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))} */}
        </div>
        <p>
          *Disclaimer: This website does not offer any legal advice but only
          provides the service of creating a .pdf document which can be sent to
          a data controller and if a proper means of identification is attached
          to the .pdf, help the data subject to claim their rights as mentioned
          in §15-22 GDPR. Since this is a service free of charge, the provider
          shall not be liable in any way and matter. We do not guarantee the
          legal correctness and useability of our documents. Our documents were
          neither created by experts, nor by professional legal advisors, we do
          not advice for any legal action.
        </p>
        <p className="mt-4 text-center text-base text-gray-400">
          IT Team: Tarik Miljkovic, Elmi Abdullahi, Turgut Aydemir
        </p>
        <p className="mt-0 text-center text-base text-gray-400">
          Law Team: Julia Damian, Vasilje, Josef
        </p>
      </div>
    </footer>
  );
}

export default LangSwitcher;
