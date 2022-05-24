

import { useEffect, useContext, useState } from "react";
// import { SiteContext } from "../contexts/SiteContext";
import Link from "next/link";
// import { useRouter } from "next/router";


function Logo({ requestJ, currentProjectIndex }) {

  return (
    <Link
      href={{
        pathname: "/",
      }}
    >
      <a>
        <img className="h-24 w-auto" src="logo.png" alt="Logo" />
      </a>
    </Link>

  );
}

export default Logo;

