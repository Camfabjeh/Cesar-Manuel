import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import connexion from "../services/connexion";
import PictureCard from "../components/PictureCard";


function PhotoReport() {
  const { id } = useParams();
  const [photoReport, setPhotoReport] = useState([]);
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      const photo = await connexion.get(`/photoreports/${id}/photos`);
      setPhotos(photo);
    } catch (error) {
      console.error(error);
    }
  };

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
    getPhotos();
  });

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
      {photos.map((p) => (
        <div key={p.id}>
          <PictureCard
            cls="max-h-[32rem] bg-gradient-to-t from-pink to-purple p-1"
            src={p.src}
            alt={p.alt}
          />
        </div>
      ))}
    </div>
  );
}

export default PhotoReport;
