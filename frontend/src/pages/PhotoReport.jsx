import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import connexion from "../services/connexion";
import PhotoReportImage from "../components/PhotoReportImage";

function PhotoReport() {
  const { id } = useParams();
  const [photoReport, setPhotoReport] = useState([]);

  const getPhotoReport = async () => {
    try {
      const photoreport = await connexion.get(`/photoreports/${id}`);
      setPhotoReport(photoreport);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPhotoReport();
  }, []);

  return (
    <div className="bg-lightgrey h-full">
      <svg>
        <text x="30%" y="50%" dy=".35em" textAnchor="middle">
          {photoReport.report_name} - {photoReport.artist}
        </text>
      </svg>
      <div className="columns-1 p-12">
        <p className="w-full font-text bg-grey p-12">
          {photoReport.report_description} <br />
          {photoReport.place} <br />
          <br />
          {photoReport.report_date}
        </p>
        <p />
      </div>
      <PhotoReportImage />
    </div>
  );
}

export default PhotoReport;
