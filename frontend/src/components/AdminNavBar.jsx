import React from "react";
import { Link } from "react-router-dom";
import BACKOFFICELOGO from "../assets/backoffice/BACK_OFFICE_LOGO.png";
import BACKOFFICEDECO from "../assets/backoffice/BACK_OFFICE_DECONNECT.png";

function NavBarAdmin() {
  return (
    <div className="h-screen">
      <div className="flex justify-between bg-black w-60 h-full text-lightgrey pl-5 flex-col items-left">
        <div className="pb-8">
          <Link to="/">
            <img
              src={BACKOFFICELOGO}
              alt="trio de couleurs permettant de revenir à la page d'accueil du site"
            />
          </Link>
        </div>
        <div className="pb-12 flex">
          <Link className="pt-2 font-title" to="/admin/reportages">
            Reportages
          </Link>
        </div>
        <div className="pb-12 flex">
          <Link className="pt-2 font-title" to="/admin/artistes">
            Artistes
          </Link>
        </div>
        <div className="pb-12 flex">
          <Link className="pt-2 font-title" to="/admin/photos">
            Photos
          </Link>
        </div>
        <Link to="/" className="font-title">
          <img
            src={BACKOFFICEDECO}
            alt="bouton de déconnexion administratrice"
          />
          Déconnexion
        </Link>
      </div>
    </div>
  );
}

// link du backofficedeco à revoir

export default NavBarAdmin;
