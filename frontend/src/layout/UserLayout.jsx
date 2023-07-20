import React from "react";
import { Outlet } from "react-router-dom";
import UserNavBar from "../components/UserNavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function UserLayout() {
  return (
    <div>
      <Header />
      <UserNavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserLayout;
