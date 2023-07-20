import React from "react";
import { NavLink } from "react-router-dom";
import BACKOFFICELOGO from "../assets/backoffice/BACK_OFFICE_LOGO.png";
import BACKOFFICEDECO from "../assets/backoffice/BACK_OFFICE_DECONNECT.png";

function NavBarAdmin() {
  return (
    <nav className="flex-wrap relative flex w-full items-center justify-between bg-black shadow-2xl 0px 7px 11px 0px rgba(0, 0, 0, 1)">
      <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
        <ul className="list-style-none gap-5 flex flex-col pl-0 lg:flex-row mr-auto p-2 font-text font-semibold text-white items-center">
          <div className="flex" />
          <NavLink to="/">
            <img
              src={BACKOFFICELOGO}
              alt="trio de couleurs permettant de revenir à la page d'accueil du site"
            />
          </NavLink>
          <li className="lg:mb-0 lg:pr-2">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text underline underline-offset-8 decoration-2 decoration-yellow"
                  : ""
              }
              to="/admin/reportages"
            >
              Reportages
            </NavLink>
          </li>
          <li className="lg:mb-0 lg:pr-2">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text underline underline-offset-8 decoration-2 decoration-yellow"
                  : ""
              }
              to="/admin/artistes"
            >
              Artistes
            </NavLink>
          </li>
          <li className="lg:mb-0 lg:pr-2">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text underline underline-offset-8 decoration-2 decoration-yellow"
                  : ""
              }
              to="/admin/photos"
            >
              Photos
            </NavLink>
          </li>
        </ul>
        <NavLink to="/" className="mr-3">
          <img
            src={BACKOFFICEDECO}
            alt="trio de couleurs permettant de revenir à la page d'accueil du site"
          />
        </NavLink>
      </div>
    </nav>
  );
}

// link du backofficedeco à revoir

export default NavBarAdmin;
