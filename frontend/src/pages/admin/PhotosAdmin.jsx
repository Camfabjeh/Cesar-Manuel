import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

function PhotosAdmin() {
  const photoReportModel = {
    id: null,
    report_name: "",
    report_date: "",
    report_description: "",
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
      theme: "light",
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

  const postPhotoReport = async (form) => {
    try {
      const pr = await connexion.postFile("/photoreports", form);
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

  const updatePhotoReport = async (form) => {
    try {
      await connexion.putFile(`/photoreports/${photoReports.id}`, form);
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
    formData.append("image", image.current.files[0]);
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
      <h2 className="text-xl font-bold font-text p-4 pb-10">
        administration des reportages photo
      </h2>
      <div className="flex pl-10">
        <form
          className="flex gap-20"
          onSubmit={(event) => postPhotoReport(event)}
        >
          <div className="w-5/12">
            <div>
              <label className="flex flex-col font-semibold pb-5">
                Reportage photo à modifier ou supprimer :
                <select
                  onChange={(e) => refreshPhotoReport(e.target.value)}
                  value=""
                  className="border border-black h-7"
                >
                  <option value="">
                    Sélectionnez le nom du reportage photo à modifier ou
                    supprimer
                  </option>
                  {photoReports.map((pr) => (
                    <option key={pr.id} value={pr.id}>
                      {pr.report_name}
                    </option>
                  ))}
                </select>
              </label>
              <h1>Enregistrement d'un nouveau reportage</h1>
              <label className="flex flex-col font-semibold">
                Nom du reportage
                <input
                  className="border border-black h-7 placeholder:pl-2"
                  type="text"
                  required
                  placeholder="Tapez ici le nom du reportage photo"
                  minLength={5}
                  maxLength={12}
                  name="name"
                  onChange={(event) =>
                    handlePhotoReport(event.target.name, event.target.value)
                  }
                  value={photoReport.report_name}
                />
              </label>
            </div>
            <div className="pt-5">
              <label className="flex flex-col font-semibold pb-5">
                Date
                <input
                  className="border border-black h-7 placeholder:pl-2"
                  type="text"
                  required
                  placeholder="Date du reportage"
                  minLength={5}
                  maxLength={255}
                  name="date"
                  onChange={(event) =>
                    handlePhotoReport(event.target.name, event.target.value)
                  }
                  value={photoReport.report_date}
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col font-semibold pb-5">
                Description
                <textarea
                  className="border border-black placeholder:pl-2"
                  required
                  placeholder="Description"
                  minLength={50}
                  name="description"
                  onChange={(event) =>
                    handlePhotoReport(event.target.name, event.target.value)
                  }
                  value={photoReport.report_description}
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col font-semibold pb-5">
                Lieu
                <input
                  className="border border-black h-7 placeholder:pl-2"
                  type="text"
                  required
                  placeholder="Lieu"
                  minLength={6}
                  maxLength={50}
                  name="lieu"
                  onChange={(event) =>
                    handlePhotoReport(event.target.name, event.target.value)
                  }
                  value={photoReport.place}
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col font-semibold pb-5">
                Artiste
                <select
                  className="border border-black h-7 placeholder:pl-2"
                  name="artist_id"
                  type="text"
                  onChange={(event) =>
                    handlePhotoReport(event.target.name, +event.target.value)
                  }
                  value=""
                >
                  <option value="">
                    Choisissez l'artiste à associer avec le reportage photo
                  </option>
                  {artists.map((art) => (
                    <option key={art.id} value={art.id}>
                      {art.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="w-5/12 font-text">
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
            <div className="flex justify-end pt-60 pb-5 pr-10 gap-10">
              <button
                type="submit"
                className="bg-black text-yellow font-bold py-2 px-4 font-text"
                onClick={(e) => managePhotoReport(e)}
              >
                Ajouter
              </button>
              <button
                type="button"
                className="bg-black text-yellow font-bold py-2 px-4 font-text"
                onClick={(e) => managePhotoReport(e)}
              >
                Mettre à jour
              </button>
              <button
                type="button"
                className="bg-black text-yellow font-bold py-2 px-4 font-text"
                onClick={(e) => deletePhotoReport(e)}
              >
                Supprimer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PhotosAdmin;
