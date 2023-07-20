import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import connexion from "../services/connexion";
import PictureCard from "./PictureCard";

function GalleryImage() {
  const [photoReport, setPhotoReport] = useState([]);
  const getPhotoReport = async () => {
    try {
      const photoreport = await connexion.get(`/photoreports/`);
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
          <div className="flex flex-col items-center ">
            <Link to={`/reportages/${pr.id}`}>
              <button
                type="button"
                className="flex p-0.5 mb-2 text-sm font-text rounded-sm "
              >
                <span className="font-bold px-5 py-2.5 text-black bg-gradient-to-b from-grey to-blue rounded-sm group-hover:bg-opacity-0">
                  voir le reportage photo de {pr.report_name}
                </span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GalleryImage;
