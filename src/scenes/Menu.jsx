import React from "react";
import { food } from "../data/data";
import FoodCard from "../components/FoodCard.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container vs:mt-40 mt-28 lg:mt-20 mx-auto p-5 bg-orange-100">
      <div className="px-6 vs:px-1 lg:mx-5 lg:mt-6 bg-orange-100">
        <div className="vs:pt-35 flex justify-between items-center">
          <h1 className="font-bold text-2xl lg:text-3xl text-left">
            Our <span className="text-orange-500">Menu</span>
          </h1>
          <Link to="/categories" className="flex justify-center items-center p-1 cursor-pointer hover:shadow-sm text-orange-500">
            <div className="">View Categories</div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        <hr className="my-6 border-orange-500"></hr>
        <div className="bg-orange-100 rounded p-6 lg:p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-transparent rounded-2xl">
            {food.map((item, index) => (
              <FoodCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
