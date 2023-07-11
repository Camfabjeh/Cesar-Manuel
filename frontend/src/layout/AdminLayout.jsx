import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavBar from "../components/AdminNavBar";

function AdminLayout() {
  return (
    <div>
      <AdminNavBar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
