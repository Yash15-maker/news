import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserSign } from "./redux/userSlice";
export default function NewsGrid() {
  const navigate = useNavigate();
  const [newsState, setnewsState] = useState([]);
  const userSignedIn = useSelector(selectUserSign);

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

  if (userSignedIn) {
    navigate("/news");
  }

  return (
    <div>
      <Navbar />
      <div className="lg:px-32 xl:px-36 pt-4 lg:pt-8 xl:pt-16 px-16">
        <div>
          <div className="align-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
            {newsState ? (
              newsState.map((curr) => {
                return (
                  <div key={curr.source.id}>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full h-36 mx-auto"
                        src={curr.urlToImage}
                        alt="pic"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          {curr.source.name}
                        </div>
                        <p class="text-gray-700 text-base">{curr.content}</p>
                      </div>
                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #photography
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
