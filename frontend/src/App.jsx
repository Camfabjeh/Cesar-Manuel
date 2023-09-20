import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import UserLayout from "./layout/UserLayout";

import HomePage from "./pages/HomePage";
import PhotoReportsList from "./pages/PhotoReportsList";
import PhotoReport from "./pages/PhotoReport";
import About from "./pages/About";

import AdminLayout from "./layout/AdminLayout";
import Auth from "./pages/admin/Auth";
import PhotoReportsAdmin from "./pages/admin/PhotoReportsAdmin";
import ArtistsAdmin from "./pages/admin/ArtistsAdmin";
import PhotosAdmin from "./pages/admin/PhotosAdmin";
import Nowhere from "./pages/Nowhere";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="*" element={<Nowhere />} />

        <Route path="/" element={<UserLayout />}>
          <Route path="/reportages" element={<PhotoReportsList />} />
          <Route path="/reportages/:id" element={<PhotoReport />} />
          <Route path="/apropos" element={<About />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/auth" element={<Auth />} />
          <Route path="/admin/reportages" element={<PhotoReportsAdmin />} />
          <Route path="/admin/" element={<ArtistsAdmin />} />
          <Route path="/admin/photos" element={<PhotosAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
