import React from "react";
import { Outlet } from "react-router-dom";
import UserNavBar from "../components/UserNavBar";
import Header from "../components/Header";

function UserLayout() {
  return (
    <div>
      <Header />
      <UserNavBar />
      <Outlet />
    </div>
  );
}

export default UserLayout;
