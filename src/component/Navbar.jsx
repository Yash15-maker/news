import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut, auth, googleAuthProvider } from "../Firebase";
import {
  selectUserName,
  selectuserImage,
  setUserLogout,
} from "./redux/userSlice";
import { useNavigate } from "react-router-dom";
import "./css/Navbar.css";
export default function Navbar() {
  const userImage = useSelector(selectuserImage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
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
      <div className="flex justify-between relative top-0 lg:px-10 px-2 lg:py-3 py-1 shadow-xl">
        <span className="lg:text-3xl text-xl font-bold my-auto">NEWS</span>

        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative w-96">
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
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <button
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          <img
            src={userImage}
            alt="google-image"
            className="rounded-full w-10 h-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
          />
        </button>

        <div
          id="dropdownHover"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {userName}
            </a>
          </li>
          <li
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            {userName ? (
              <i
                class="fa-solid fa-right-from-bracket my-auto cursor-pointer"
                onClick={handleSignout}
              ></i>
            ) : (
              <></>
            )}
          </li>
        </div>
      </div>
    </div>
  );
}
