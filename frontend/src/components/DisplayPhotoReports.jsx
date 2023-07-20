import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import connexion from "../services/connexion";

function DisplayPhotoReports({ title }) {
  const [open, setOpen] = useState(false);
  const [photoReportsList, setPhotoReportsList] = useState([]);

  const getPhotoReports = async () => {
    try {
      const photoreports = await connexion.get("/photoreports");
      setPhotoReportsList(photoreports);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPhotoReports();
  }, []);

  return (
    <div className={open ? "open" : null}>
      <button type="button" onClick={() => setOpen(!open)}>
        <div className="lg:mb-0 lg:pr-2">Reportages</div>
      </button>
      {open && (
        <>
          <Link to={title} />
          <div>
            {photoReportsList.map((prl) => (
              <Link to={`/photoreports/${prl.report_name}`}>
                <div key={prl.id}>{prl.report_name}</div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

DisplayPhotoReports.propTypes = {
  title: PropTypes.string,
};

DisplayPhotoReports.defaultProps = {
  title: "",
};

export default DisplayPhotoReports;
