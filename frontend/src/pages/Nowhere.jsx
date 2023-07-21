import React from "react";
import { Link } from "react-router-dom";

function Nowhere() {
  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen bg-lightgrey">
      <svg>
        <text x="69%" y="50%" dy=".35em" textAnchor="middle">
          erreur de destination
        </text>
      </svg>
      <div className="flex flex-col items-center">
        <Link to="/">
          <button
            type="button"
            className="flex p-0.5 mb-2 text-sm font-text rounded-sm "
          >
            <span className="font-bold px-5 py-2.5 text-black bg-gradient-to-b from-grey to-blue rounded-sm group-hover:bg-opacity-0">
              cliquez ici pour retourner à l'accueil
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nowhere;
