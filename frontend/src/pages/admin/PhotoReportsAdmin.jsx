import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

function PhotoReportsAdmin() {
  const photoReportModel = {
    id: null,
    report_name: "",
    report_date: "",
    report_description: "",
    photo_preview: "",
    photo_preview_alt: "",
    place: "",
    artist_id: "",
  };

  const [photoReport, setPhotoReport] = useState(photoReportModel);
  const [artists, setArtists] = useState([]);
  const [photoReports, setPhotoReports] = useState([]);
  const image = useRef();

  const refreshPhotoReport = (id) => {
    if (id === "") {
      setPhotoReport(photoReportModel);
    } else {
      const find = photoReports.find((pr) => pr.id === +id);
      setPhotoReport(find);
    }
  };

  const getPhotoReports = async () => {
    const pr = await connexion.get("/photoreports");
    try {
      if (pr) {
        setPhotoReports(pr);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePhotoReport = (name, value) => {
    console.warn(photoReport);
    setPhotoReport({ ...photoReport, [name]: value });
  };

  const notifyWrong = () =>
    toast("Un problème est survenu, veuillez recommencer.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifyAdd = () =>
    toast(
      "Le reportage photo a été correctement ajouté à la base de données.",
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

  const postPhotoReport = async () => {
    try {
      const pr = await connexion.post("/photoreports", photoReport);
      setPhotoReport(pr);
      setPhotoReport(photoReportModel);
      notifyAdd();
      getPhotoReports();
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
  };
  const notifyUpdate = () =>
    toast("Le reportage a été correctement mis à jour.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const updatePhotoReport = async () => {
    try {
      await connexion.put(`/photoreports/${photoReport.id}`, photoReport);
      getPhotoReports();
      notifyUpdate();
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
  };

  const managePhotoReport = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("json", JSON.stringify(photoReport));
    if (photoReport.id) {
      updatePhotoReport(formData);
    } else {
      postPhotoReport(formData);
    }
  };

  const notifyDelete = () =>
    toast("Le reportage a bien été supprimé de la base de données.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const deletePhotoReport = async (e) => {
    e.preventDefault();
    try {
      await connexion.delete(`/photoreports/${photoReport.id}`);
      setPhotoReport(photoReportModel);
      getPhotoReports();
      notifyDelete();
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
  };

  const getArtists = async () => {
    try {
      const art = await connexion.get("/artists");
      setArtists(art);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArtists();
    getPhotoReports();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <svg>
        <text x="69%" y="50%" dy=".35em" textAnchor="middle">
          administration des reportages photo
        </text>
      </svg>
      <div className="pl-10 font-title">
        <form className="gap-20" onSubmit={(event) => postPhotoReport(event)}>
          <div className="w-8/12">
            <h1 className="font-bold pb-2">
              Reportage photo à modifier ou supprimer :
            </h1>
            <label className="flex flex-col font-semibold pb-5">
              <select
                onChange={(e) => refreshPhotoReport(e.target.value)}
                className="border-0 h-7 bg-lightgrey shadow-md"
              >
                <option value="">aucun reportage sélectionné</option>
                {photoReports.map((pr) => (
                  <option key={pr.id} value={pr.id}>
                    {pr.report_name}
                  </option>
                ))}
              </select>
            </label>
            <h1 className="font-bold pb-2">
              Enregistrement d'un nouveau reportage :
            </h1>
            <label className="flex flex-col font-semibold">
              nom du reportage
              <input
                className="border-0 h-7 bg-lightgrey shadow-md font-normal"
                type="text"
                required
                placeholder=""
                minLength={5}
                maxLength={50}
                name="report_name"
                onChange={(event) =>
                  handlePhotoReport(event.target.name, event.target.value)
                }
                value={photoReport.report_name}
              />
            </label>
            <div className="pt-4">
              <label className="flex flex-col font-semibold">
                année du reportage
                <input
                  className="border-0 h-7 bg-lightgrey shadow-md font-normal"
                  type="number"
                  required
                  placeholder="noter uniquement l'année"
                  min="2000"
                  max="2025"
                  name="report_date"
                  onChange={(event) =>
                    handlePhotoReport(event.target.name, event.target.value)
                  }
                  value={photoReport.report_date}
                />
              </label>
            </div>
            <div className="pt-4">
              <label className="flex flex-col font-semibold">
                description
                <textarea
                  className="border-0 font-normal bg-lightgrey shadow-md"
                  required
                  placeholder=""
                  minLength={50}
                  name="report_description"
                  onChange={(event) =>
                    handlePhotoReport(event.target.name, event.target.value)
                  }
                  value={photoReport.report_description}
                />
              </label>
            </div>
            <div className="pt-4">
              <label className="flex flex-col font-semibold ">
                lieu
                <input
                  className="border-0 h-7 bg-lightgrey shadow-md font-normal"
                  type="text"
                  required
                  placeholder=""
                  minLength={6}
                  maxLength={50}
                  name="place"
                  onChange={(event) =>
                    handlePhotoReport(event.target.name, event.target.value)
                  }
                  value={photoReport.place}
                />
              </label>
            </div>
            <div className="w-8/12">
              <div className="pt-4">
                <label className="flex flex-col font-semibold">
                  fichier photo
                  <input
                    className="border-0 h-7 bg-lightgrey shadow-md font-normal form-control"
                    type="file"
                    required
                    placeholder="fichier photo"
                    accept="jpg, png, jpeg"
                    name="photo_preview"
                    ref={image}
                    onChange={(event) =>
                      handlePhotoReport(
                        event.target.name,
                        event.target.files[0].name
                      )
                    }
                  />
                </label>
                {photoReport.id && (
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                      photoReport.photo_preview
                    }`}
                    alt={photoReport.photo_preview_alt}
                  />
                )}
              </div>
              <div>
                <label className="flex flex-col font-semibold pt-4">
                  texte alternatif de l'image
                  <input
                    className="border-0 h-7 bg-lightgrey shadow-md font-normal"
                    type="text"
                    required
                    placeholder=""
                    minLength={6}
                    maxLength={50}
                    name="photo_preview_alt"
                    onChange={(event) =>
                      handlePhotoReport(event.target.name, event.target.value)
                    }
                    value={photoReport.photo_preview_alt}
                  />
                </label>
              </div>
            </div>
            <label className="flex flex-col font-semibold pt-4 pb-5">
              artiste
              <select
                className="border-0 h-7 bg-lightgrey shadow-md"
                name="artist_id"
                type="text"
                onChange={(event) =>
                  handlePhotoReport(event.target.name, event.target.value)
                }
                value={photoReport.artist_id}
              >
                <option>...</option>
                {artists.map((art) => (
                  <option key={art.id} value={art.id}>
                    {art.artist_name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="w-8/12 font-text">
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              className="font-text"
            />
          </div>
          <div className="pt-6 pb-5 pr-10 gap-4">
            {!photoReport.id && (
              <button
                type="submit"
                className="bg-black text-yellow font-bold py-2 px-4 font-text rounded shadow-md"
                onClick={(e) => managePhotoReport(e)}
              >
                Ajouter
              </button>
            )}
          </div>
        </form>
        <div className="pt-6 pb-5 pr-10 flex gap-4">
          {photoReport.id && (
            <button
              type="button"
              className="bg-black text-yellow font-bold py-2 px-4 font-text rounded shadow-md"
              onClick={(e) => managePhotoReport(e)}
            >
              Mettre à jour
            </button>
          )}
          {photoReport.id && (
            <button
              type="button"
              className="bg-yellow text-black font-bold py-2 px-4 font-text rounded shadow-md"
              onClick={(e) => deletePhotoReport(e)}
            >
              Supprimer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PhotoReportsAdmin;
