import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/admin.css";

function PhotosAdmin() {
  const photoModel = {
    id: null,
    photo_report_id: "",
    alt: "",
  };

  const [photo, setPhoto] = useState(photoModel);
  const [photoReports, setPhotoReports] = useState([]);
  const [photos, setPhotos] = useState([]);
  const image = useRef();

  const refreshPhoto = (id) => {
    if (id === "") {
      setPhoto(photoModel);
    } else {
      const find = photos.find((pr) => pr.id === +id);
      setPhoto(find);
    }
  };

  const getPhotos = async () => {
    const pr = await connexion.get("/photos");
    try {
      if (pr) {
        setPhotos(pr);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePhoto = (name, value) => {
    setPhoto({ ...photo, [name]: value });
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
    toast("📸 la photo a été correctement ajoutée à la base de données", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const postPhoto = async (form) => {
    try {
      const pr = await connexion.postFile("/photos", form);
      setPhoto(pr);
      setPhoto(photoModel);
      notifyAdd();
      getPhotos();
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
  };
  const notifyUpdate = () =>
    toast("📷 la photo a été correctement mise à jour", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const updatePhoto = async (form) => {
    try {
      await connexion.putFile(`/photos/${photo.id}`, form);
      getPhotos();
      notifyUpdate();
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
  };

  const managePhoto = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.current.files[0]);
    formData.append("json", JSON.stringify(photo));
    if (photo.id) {
      updatePhoto(formData);
    } else {
      postPhoto(formData);
    }
  };

  const notifyDelete = () =>
    toast("La photo a bien été supprimée de la base de données.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const deletePhoto = async (e) => {
    e.preventDefault();
    try {
      await connexion.delete(`/photos/${photo.id}`);
      setPhoto(photoModel);
      getPhotos();
      notifyDelete();
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
  };

  const getPhotoReports = async () => {
    try {
      const pr = await connexion.get("/photoreports");
      setPhotoReports(pr);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPhotoReports();
    getPhotos();
  }, []);

  return (
    <div className="flex flex-col w-full wrapper">
      <svg>
        <text x="75%" y="50%" dy=".35em" textAnchor="middle">
          administration des photos
        </text>
      </svg>
      <div className="pl-10 font-title">
        <form className="gap-20" onSubmit={(event) => postPhoto(event)}>
          <div className="w-5/12">
            <h1 className="font-bold pb-2">Photo à modifier ou supprimer :</h1>
            <label className="flex flex-col font-semibold pb-5">
              <select
                onChange={(e) => refreshPhoto(e.target.value)}
                value={photo.id}
                className="border-0 h-7 bg-lightgrey shadow-md"
              >
                <option value="">photo</option>
                {photos.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.src}
                  </option>
                ))}
              </select>
            </label>
            <h1 className="font-bold pb-2">
              Enregistrement d'une nouvelle photo :
            </h1>
            <label className="flex flex-col font-semibold pb-5">
              nom du reportage
              <select
                className="border-0 h-7 bg-lightgrey shadow-md"
                name="photo_report_name"
                type="text"
                required
                onChange={(event) =>
                  handlePhoto(event.target.name, +event.target.value)
                }
                value=""
              >
                <option value="">choisissez le reportage photo concerné</option>
                {photoReports.map((pr) => (
                  <option key={pr.id} value={pr.report_name}>
                    {pr.report_name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="w-5/12">
            <div className="pt-3">
              <label className="flex flex-col font-semibold pb-5">
                fichier photo
                <input
                  className="border-0 h-7 bg-lightgrey shadow-md font-normal form-control"
                  type="file"
                  required
                  placeholder="fichier photo"
                  accept="jpg, png, jpeg"
                  name="src"
                  ref={image}
                  onChange={(event) =>
                    handlePhoto(event.target.name, event.target.value)
                  }
                />
              </label>
              {photo.src && (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                    photo.src
                  }`}
                  alt={photo.alt}
                />
              )}
            </div>
            <div>
              <label className="flex flex-col font-semibold pb-5">
                texte alternatif de l'image
                <input
                  className="border-0 h-7 bg-lightgrey shadow-md font-normal"
                  type="text"
                  required
                  placeholder=""
                  minLength={6}
                  maxLength={50}
                  name="texte alternatif"
                  onChange={(event) =>
                    handlePhoto(event.target.name, event.target.value)
                  }
                  value={photo.place}
                />
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
          </div>
          <div className="pt-6 pb-5 pr-10 gap-4">
            {!photo.id && (
              <button
                type="submit"
                className="bg-black text-yellow font-bold py-2 px-4 font-text rounded shadow-md"
                onClick={(e) => managePhoto(e)}
              >
                Ajouter
              </button>
            )}
          </div>
        </form>
        <div className="pt-6 pb-5 pr-10 flex gap-4">
          {photo.id && (
            <button
              type="button"
              className="bg-black text-yellow font-bold py-2 px-4 font-text rounded shadow-md"
              onClick={(e) => managePhoto(e)}
            >
              Mettre à jour
            </button>
          )}
          {photo.id && (
            <button
              type="button"
              className="bg-yellow text-black font-bold py-2 px-4 font-text rounded shadow-md"
              onClick={(e) => deletePhoto(e)}
            >
              Supprimer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PhotosAdmin;
