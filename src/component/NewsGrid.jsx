import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserSign } from "./redux/userSlice";
export default function NewsGrid() {
  const navigate = useNavigate();
  const [newsState, setnewsState] = useState([]);
  const userSignedIn = useSelector(selectUserSign);
  // const dispatch = useDispatch();

  const TopUs = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c92f90c58a524bc99f951e284a294078"
      )
      .then((data) => {
        setnewsState(data.data.articles);
      });
  };

  const Apple = () => {
    console.log("1");
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2023-09-12&to=2023-09-12&sortBy=popularity&apiKey=c92f90c58a524bc99f951e284a294078"
      )
      .then((data) => {
        console.log(data.data.articles);
        setnewsState(data.data.articles);
      });
  };

  const Tesla = () => {
    // dispatch(selectnewsText("Tesla"));
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-08-14&sortBy=publishedAt&apiKey=c92f90c58a524bc99f951e284a294078"
      )
      .then((data) => {
        setnewsState(data.data.articles);
      });
  };

  const Wall = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c92f90c58a524bc99f951e284a294078"
      )
      .then((data) => {
        setnewsState(data.data.articles);
      });
  };
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=c92f90c58a524bc99f951e284a294078"
      )
      .then((data) => {
        console.log(data.data.articles);
        setnewsState(data.data.articles);
      });
  }, []);

  const All = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=c92f90c58a524bc99f951e284a294078"
      )
      .then((data) => {
        console.log(data.data.articles);
        setnewsState(data.data.articles);
      });
  };
  if (userSignedIn) {
    navigate("/news");
  }

  return (
    <div>
      <Navbar />
      <div className="px-10 mt-10">
        <span className="xl:text-4xl lg:text-3xl text-xl my-auto">
          All News
        </span>
        <div className="float-right ">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="text-black bg-white-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-stone-950 border-2"
            type="button"
          >
            News Categories{" "}
            <svg
              class="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <span
                  // href="#"
                  onClick={All}
                  class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  All
                </span>
              </li>
              <li>
                <span
                  // href="#"
                  class="block cursor-pointer  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={Tesla}
                >
                  Tesla
                </span>
              </li>
              <li>
                <span
                  // href="#"
                  class="block cursor-pointer  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={Apple}
                >
                  Apple News
                </span>
              </li>
              <li>
                <span
                  // href="/news"
                  onClick={Wall}
                  class="block px-4 cursor-pointer  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Wall Street Journal
                </span>
              </li>
              <li>
                <span
                  // href="#"
                  class="block px-4 py-2 cursor-pointer  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={TopUs}
                >
                  Top in US
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:py-16 py-10 w-full flex justify-center">
        <span className="lg:px-36 md:px-24 px-6 xl:text-4xl text-2xl lg:text-3xl font-light">
          {"Top News"}
        </span>
      </div>
      <div className="lg:px-16 xl:px-20 pt-4 lg:pt-8 xl:pt-16 px-6 shadow-xl bg-slate-100">
        <div className="flex justify-center">
          <div className=" shadow-md align-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5 ">
            {newsState ? (
              newsState.map((curr) => {
                return (
                  <div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full h-36 mx-auto"
                        src={curr.urlToImage}
                        alt={curr.source.name}
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 ">{curr.title}</div>
                        <p class="text-gray-700 text-base">{curr.content}</p>
                      </div>
                      <div class="px-6 pt-4 pb-2 flex justify-center">
                        <span
                          onClick={() => {
                            window.open(curr.url, "_blank");
                          }}
                          class="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >
                          Read More
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <skeleton />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="flex flex-col justify-around lg:flex-row">
//             <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 lg:px-20 px-4 border border-blue-500 hover:border-transparent rounded">
//               All
//             </button>
//             <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 lg:px-20 px-4 border border-blue-500 hover:border-transparent rounded">
//               Button
//             </button>
//             <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 lg:px-20 px-4 border border-blue-500 hover:border-transparent rounded">
//               Button
//             </button>
//             <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 lg:px-20 px-4 border border-blue-500 hover:border-transparent rounded">
//               Button
//             </button>
//             <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 lg:px-20 px-4 border border-blue-500 hover:border-transparent rounded">
//               Button
//             </button>
// </div>
