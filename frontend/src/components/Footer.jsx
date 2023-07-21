import React from "react";

import INSTA_LOGO from "../assets/front/INSTA_LOGO.svg";
import FB_LOGO from "../assets/front/FB_LOGO.svg";

function Footer() {
  return (
    <div className="flex h-16 bg-yellow w-full space-between">
      <div className="object-contain h-24 w-24 flex">
        <a href="https://www.instagram.com/desartsetdesmains/" className="">
          <img src={INSTA_LOGO} alt="logo instagram" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100087295007190"
          className=""
        >
          <img src={FB_LOGO} alt="logo instagram" />
        </a>
      </div>
      <div className="font-text font-bold flex items-center text-xl">
        <h1>© César Manuel - tous droits réservés</h1>
      </div>
    </div>
  );
}

export default Footer;
