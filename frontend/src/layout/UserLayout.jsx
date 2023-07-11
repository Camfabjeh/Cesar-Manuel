import React from "react";
import { Outlet } from "react-router-dom";
import UserNavBar from "../components/UserNavBar";

function UserLayout() {
  return (
    <div>
      <UserNavBar />
      <Outlet />
    </div>
  );
}

export default UserLayout;
