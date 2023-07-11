import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import UserLayout from "./layout/UserLayout";

import HomePage from "./pages/HomePage";
import PhotoReportsList from "./pages/PhotoReportsList";
import PhotoReport from "./pages/PhotoReport";

import AdminLayout from "./layout/AdminLayout";
import Login from "./pages/admin/Login";
import PhotoReportsAdmin from "./pages/admin/PhotoReportsAdmin";
import ArtistsAdmin from "./pages/admin/ArtistsAdmin";
import PhotosAdmin from "./pages/admin/PhotosAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/" element={<UserLayout />}>
          <Route path="/listereportages" element={<PhotoReportsList />} />
          <Route path="/reportage/:id" element={<PhotoReport />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<Login />} />
          <Route path="/admin/reportages" element={<PhotoReportsAdmin />} />
          <Route path="/admin/artistes" element={<ArtistsAdmin />} />
          <Route path="/admin/photos" element={<PhotosAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
