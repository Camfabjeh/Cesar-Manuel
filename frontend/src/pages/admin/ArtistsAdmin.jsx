import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

function ArtistsAdmin() {
  const artistModel = {
    id: null,
    artist_name: "",
    website: "",
  };

  const [artist, setArtist] = useState(artistModel);
  const [artists, setArtists] = useState([]);

  const refreshArtist = (id) => {
    if (id === "") {
      setArtist(artistModel);
    } else {
      const find = artists.find((art) => art.id === +id);
      setArtist(find);
    }
  };

  const getArtists = async () => {
    const art = await connexion.get("/artists");
    try {
      if (art) {
        setArtists(art);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleArtist = (name, value) => {
    setArtist({ ...artist, [name]: value });
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
    toast("L'artiste a été correctement ajouté·e à la base de données.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const postArtist = async () => {
    try {
      const art = await connexion.post("/artists", artist);
      setArtist(art);
      setArtist(artistModel);
      notifyAdd();
      getArtists();
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
  };
  const notifyUpdate = () =>
    toast("L'artiste a été correctement mis·e à jour.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const updateArtist = async () => {
    try {
      await connexion.put(`/artists/${artist.id}`, artist);
      getArtists();
      notifyUpdate();
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
  };

  const manageArtist = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("json", JSON.stringify(artist));
    if (artist.id) {
      updateArtist(formData);
    } else {
      postArtist(formData);
    }
  };

  const notifyDelete = () =>
    toast("L'artiste a bien été supprimé·e de la base de données.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const deleteArtist = async (e) => {
    e.preventDefault();
    try {
      await connexion.delete(`/artists/${artist.id}`);
      setArtist(artistModel);
      getArtists();
      notifyDelete();
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
  };

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <svg>
        <text x="75%" y="50%" dy=".35em" textAnchor="middle">
          administration des artistes
        </text>
      </svg>
      <div className="pl-10 font-title">
        <form className="gap-20" onSubmit={(event) => postArtist(event)}>
          <div className="w-5/12">
            <h1 className="font-bold pb-2">
              Artiste à modifier ou supprimer :
            </h1>
            <label className="flex flex-col font-semibold pb-5">
              <select
                onChange={(e) => refreshArtist(e.target.value)}
                className="border-0 h-7 bg-lightgrey shadow-md"
              >
                <option value="">artiste</option>
                {artists.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.artist_name}
                  </option>
                ))}
              </select>
            </label>
            <h1 className="font-bold pb-2">
              Enregistrement d'un·e nouveau·lle artiste :
            </h1>
            <label className="flex flex-col font-semibold pb-5">
              nom de l'artiste
              <input
                className="border-0 h-7 bg-lightgrey shadow-md font-normal"
                type="text"
                required
                placeholder=""
                minLength={6}
                maxLength={50}
                name="artist_name"
                onChange={(event) =>
                  handleArtist(event.target.name, event.target.value)
                }
                value={artist.artist_name}
              />
            </label>
          </div>
          <div className="w-5/12">
            <div>
              <label className="flex flex-col font-semibold pb-5">
                site web de l'artiste
                <input
                  className="border-0 h-7 bg-lightgrey shadow-md font-normal"
                  type="text"
                  required
                  placeholder=""
                  minLength={6}
                  maxLength={50}
                  name="website"
                  onChange={(event) =>
                    handleArtist(event.target.name, event.target.value)
                  }
                  value={artist.website}
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
            {!artist.id && (
              <button
                type="submit"
                className="bg-black text-yellow font-bold py-2 px-4 font-text rounded shadow-md"
                onClick={(e) => manageArtist(e)}
              >
                Ajouter
              </button>
            )}
          </div>
        </form>
        <div className="pt-6 pb-5 pr-10 flex gap-4">
          {artist.id && (
            <button
              type="button"
              className="bg-black text-yellow font-bold py-2 px-4 font-text rounded shadow-md"
              onClick={(e) => manageArtist(e)}
            >
              Mettre à jour
            </button>
          )}
          {artist.id && (
            <button
              type="button"
              className="bg-yellow text-black font-bold py-2 px-4 font-text rounded shadow-md"
              onClick={(e) => deleteArtist(e)}
            >
              Supprimer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArtistsAdmin;
