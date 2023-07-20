import React from "react";
import { NavLink } from "react-router-dom";

function NavBarUser() {
  return (
    <nav className="flex-wrap relative flex w-full items-center justify-between bg-lightgrey">
      <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
        <ul className="list-style-none flex flex-col pl-0 lg:flex-row ml-auto p-2 font-text font-semibold items-center">
          <div className="flex gap-5">
            <li className="lg:mb-0 lg:pr-2">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text underline underline-offset-8 decoration-2 decoration-yellow"
                    : ""
                }
                to="/listereportages"
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
                to="/apropos"
              >
                À propos
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarUser;
