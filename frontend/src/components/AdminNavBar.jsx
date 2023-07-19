import React from "react";
import { Link } from "react-router-dom";
import BACKOFFICELOGO from "../assets/backoffice/BACK_OFFICE_LOGO.png";
import BACKOFFICEDECO from "../assets/backoffice/BACK_OFFICE_DECONNECT.png";

function NavBarAdmin() {
  return (
    <div className="mb-[-8rem] pl-5 text-white z-20 relative pt-3 bg-black">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/">
            <img
              className="h-16"
              src={BACKOFFICELOGO}
              alt="trio de couleurs permettant de revenir à la page d'accueil du site"
            />
          </Link>
        </li>
        <div className="flex gap-4">
          <Link className="pt-6 font-text font-bold" to="/admin/reportages">
            Reportages
          </Link>
          <Link className="pt-6 font-text font-bold" to="/admin/artistes">
            Artistes
          </Link>
          <Link className="pt-6 font-text font-bold" to="/admin/photos">
            Photos
          </Link>
        </div>
        <Link to="/" className="pb-8">
          <img
            src={BACKOFFICEDECO}
            alt="bouton de déconnexion administratrice"
          />
        </Link>
      </ul>
    </div>
  );
}

// link du backofficedeco à revoir

export default NavBarAdmin;
