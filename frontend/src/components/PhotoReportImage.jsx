import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import connexion from "../services/connexion";
import PictureCard from "./PictureCard";

function PhotoReportImage() {
  const { id } = useParams();
  const [photoReport, setPhotoReport] = useState([]);
  const getPhotoReport = async () => {
    try {
      const photoreport = await connexion.get(`/photoreports/${id}/photos`);
      setPhotoReport(photoreport);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPhotoReport();
  }, []);

  return (
    <div className="h-max grid grid-cols-2 gap-24 place-items-center justify-center ml-6 mr-6 bg-lightgrey shadow-xl rounded-sm mb-4">
      {photoReport.map((pr) => (
        <div key={pr.id}>
          <PictureCard
            cls="max-h-[32rem] bg-gradient-to-t from-pink to-purple p-1"
            src={pr.photo_preview}
            alt={pr.photo_preview_alt}
          />
        </div>
      ))}
    </div>
  );
}

export default PhotoReportImage;
