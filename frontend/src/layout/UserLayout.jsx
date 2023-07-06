import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from "react-router-dom";
import NavBarUser from "../components/NavBarUser";

function UserLayout() {
  return (
    <div>
      <NavBarUser />
      <Outlet />
    </div>
  );
}

export default UserLayout;
