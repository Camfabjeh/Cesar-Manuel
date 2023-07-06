/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Outlet } from "react-router-dom";
import NavBarAdmin from "../components/NavBarAdmin";

function AdminLayout() {
  return (
    <div>
      <NavBarAdmin />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
