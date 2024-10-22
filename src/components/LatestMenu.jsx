import React from "react";
import { food,  } from "../data/data.js";
import FoodCard from "./FoodCard.jsx";
import {Link} from 'react-router-dom'


function LatestMenu() {
  return (
    <div className="container vs:mt-32 mt-auto p-5 relative mx-auto">
    <div className="sm:px-6 lg:mx-5 lg:mt-6 px-6">
      <div className="flex justify-between items-center">
      <h1 className="font-bold text-2xl lg:text-3xl text-left">
          Latest <span className="text-orange-500">Menu</span>
        </h1>
        <Link to="/menu" className="flex justify-center items-center p-1 cursor-pointer hover:shadow-sm text-orange-500">
        <div className="">View All</div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          </Link>
      </div>
      <hr className="my-6 border-orange-500"></hr>
      <div className="flex items-center bg-orange-100 rounded-lg p-2 lg:p-0">
      <div className="grid grid-cols sm:ml-2 md:grid-cols-2 lg:grid-cols-4 lg:m-5 lg:p-8 gap-4 bg-orange-100 rounded-2xl">
        {food.slice(-4).map((item, index) => (
          <FoodCard key={index} item={item} />
        ))}
      </div>
      </div>
    </div>
    </div>
  );
}

export default LatestMenu;
