import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut, auth } from "../Firebase";
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
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(setUserLogout());
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <div className="flex justify-between relative top-0 lg:px-10 px-2 lg:py-6 py-2">
        <span className="lg:text-3xl text-xl font-bold">NEWS</span>
        <div className="">
          <i class="fa-solid fa-bars fa-lg"></i>
        </div>
        <div className="flex lg:gap-6 md:gap-3 gap-2" id="navbar-dashboard">
          <img
            src={userImage}
            alt="google-image"
            className="rounded-full w-10 h-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
          />
          <span className="my-auto lg:text-xl text-base">{userName}</span>

          {userName ? (
            <i
              class="fa-solid fa-right-from-bracket my-auto cursor-pointer"
              onClick={handleSignout}
            ></i>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
