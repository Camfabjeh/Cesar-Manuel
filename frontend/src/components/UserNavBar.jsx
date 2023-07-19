import React from "react";
import { Link } from "react-router-dom";

function NavBarUser() {
  return (
    <nav className="flex-wrap relative flex w-full items-center justify-between bg-lightgrey">
      <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
        <ul className="list-style-none flex flex-col pl-0 lg:flex-row ml-auto p-2 font-text font-semibold">
          <li className="lg:mb-0 lg:pr-2">
            <Link to="/">Accueil</Link>
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2">
            <Link
              className={({ isActive }) =>
                isActive
                  ? "text underline underline-offset-8 decoration-2 decoration-yellow"
                  : ""
              }
              to="/listereportages"
            >
              Reportages
            </Link>
          </li>
          <li className="lg:mb-0 lg:pr-2">
            <Link
              className={({ isActive }) =>
                isActive
                  ? "text underline underline-offset-8 decoration-2 decoration-yellow"
                  : ""
              }
              to="/apropos"
            >
              À propos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarUser;
