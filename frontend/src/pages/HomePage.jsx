import React from "react";
import { Link } from "react-router-dom";
import BANNIEREACCUEIL from "../assets/front/BANNIERE_ACCUEIL.png";
import BUTTONNEXT from "../assets/front/BUTTON_NEXT.png";

function HomePage() {
  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen bg-lightgrey">
      <img
        src={BANNIEREACCUEIL}
        alt="logo représentant deux branches d'olivier en rond entourant le nom de l'artiste César Manuel"
      />
      <Link to="/listereportages">
        <img
          src={BUTTONNEXT}
          alt="trio blanc, bleu et orange à cliquer pour entrer sur le site"
        />
      </Link>
    </div>
  );
}

export default HomePage;
