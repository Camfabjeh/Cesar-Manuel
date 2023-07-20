import React from "react";
import { Link } from "react-router-dom";
import BANNIEREACCUEIL from "../assets/front/BANNIERE_ACCUEIL.png";

function HomePage() {
  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen bg-lightgrey">
      <Link to="/reportages">
        <img
          src={BANNIEREACCUEIL}
          alt="logo représentant deux branches d'olivier en rond entourant le nom de l'artiste César Manuel"
        />
      </Link>
    </div>
  );
}

export default HomePage;
