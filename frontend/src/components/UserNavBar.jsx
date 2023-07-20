import React from "react";
import { NavLink } from "react-router-dom";
import DisplayPhotoReports from "./DisplayPhotoReports";

function NavBarUser() {
  return (
    <nav className="flex-wrap relative flex w-full items-center justify-between bg-lightgrey ">
      <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto mb-12">
        <ul className="list-style-none flex flex-col pl-0 lg:flex-row ml-auto p-2 font-text font-semibold items-center">
          <div className="flex gap-5">
            <li className="lg:mb-0 lg:pr-2 flex">
              <DisplayPhotoReports title="reportages" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
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
