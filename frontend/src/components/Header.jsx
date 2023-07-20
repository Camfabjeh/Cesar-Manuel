import React from "react";
import BANNIERE_PAGES from "../assets/front/BANNIERE_PAGES.png";

function Header() {
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-lightgrey">
      <img
        src={BANNIERE_PAGES}
        alt="logo et nom de l'artiste + texte Ces mains façonnent, ça me fascine"
      />
    </div>
  );
}

export default Header;
