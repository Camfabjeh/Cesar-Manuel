import React from "react";

function Auth() {
  return (
    <div className="flex justify-center pt-40 ">
      <form className="flex justify-center bg-blue border-grey border-solid border-4 p-6 rounded-lg shadow-lg w-3/6 h-100">
        <div className="w-6/12">
          <label className="flex flex-col font-semibold font-title">
            login
            <input
              className="border-20 h-7 bg-lightgrey shadow-md font-normal mt-2"
              type="text"
              required
              placeholder=""
              minLength={5}
              maxLength={50}
              name="user_login"
            />
          </label>
          <div className="pt-4">
            <label className="flex flex-col font-semibold font-title">
              mot de passe
              <input
                className="border-0 h-7 bg-lightgrey shadow-md font-normal mt-2"
                type="text"
                required
                placeholder=""
                minLength={5}
                maxLength={50}
                name="user_password"
              />
            </label>
          </div>

          <button type="submit" className="pt-10 pb-10 font-bold font-title">
            <span className="relative text-white px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Connexion
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
