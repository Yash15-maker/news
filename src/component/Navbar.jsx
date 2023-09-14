import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut, auth, googleAuthProvider } from "../Firebase";
import {
  selectUserEmail,
  selectUserName,
  selectuserImage,
  selectuserNameNormal,
  setUserLogout,
} from "./redux/userSlice";
import { useNavigate } from "react-router-dom";
import "./css/Navbar.css";
export default function Navbar() {
  const userImage = useSelector(selectuserImage);
  const userEmail = useSelector(selectUserEmail);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userNameNormal = useSelector(selectuserNameNormal);
  const handleSignout = () => {
    signOut(auth, googleAuthProvider)
      .then(() => {
        dispatch(setUserLogout());
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <div className="flex justify-around relative top-0 lg:px-10  lg:py-3 py-1 shadow-xl">
        <span className="lg:text-3xl text-xl font-bold my-auto">NEWS</span>
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative lg:w-96 md:60 w-40">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search News..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-4 md:px-2 px-1 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        {userNameNormal ? (
          <span className="my-auto lg:text-xl text-xs">{userNameNormal}</span>
        ) : (
          <>
            <div class="relative inline-block text-left">
              <img src={userImage} alt="picprofile" />
              <div
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <span>{userName}</span>

                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                      onClick={handleSignout()}
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// <img
// src={userImage}
// alt="google-image"
// className="rounded-full w-10 h-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
// />

// <div>
//             <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
//               Options
//               <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                 <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
//               </svg>
//             </button>
//           </div>

// <button
// id="dropdownHoverButton"
// data-dropdown-toggle="dropdownHover"
// data-dropdown-trigger="hover"
// class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
// type="button"
// ></button>
