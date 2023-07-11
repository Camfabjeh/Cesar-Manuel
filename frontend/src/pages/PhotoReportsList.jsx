import React from "react";
import Header from "../components/Header";
import BreadCrumb from "../components/BreadCrumb";
import UserNavBar from "../components/UserNavBar";
import PictureCard from "../components/PictureCard";
import Footer from "../components/Footer";

function PhotoReportsList() {
  return (
    <div>
      <Header />
      <BreadCrumb />
      <UserNavBar />
      <PictureCard />
      <Footer />
    </div>
  );
}

export default PhotoReportsList;
