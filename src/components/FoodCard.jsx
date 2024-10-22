import React, { useContext, useState } from "react";
import CartContext from "../CartContext";
import { useNavigate } from "react-router-dom";
import {AiOutlineCheck} from 'react-icons/ai';

const FoodCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [addedItem, setAddedItem] = useState(false);

  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    addToCart(item.id);
    setAddedItem(true);

    setTimeout(() => {
      setAddedItem(false);
    }, 2500);
  };

  const handleFoodClick = () => {
    navigate(`/menu/${item.id}`);
  };
  return (
    <div onClick={handleFoodClick} className="flex-row cursor-pointer backdrop-blur-sm rounded-2xl  shadow-orange-200 hover:scale-105 shadow-2xl duration-500 shadow-full">
      <div className="">
        <img
          src={item.image}
          alt={item.name}
          className="rounded-2xl h-[270px] p-2 hover:scale-130 hover:shadow-2xl hover:shadow-orange-200 w-full object-cover"
        />
      </div>
      <div className="flex px-3 pb-5 pt-2 flex-col gap-2 items-start">
        <h2 className="md:text-2xl lg:text-xl font-sans font-bold border-b border-b-orange-500">
          {item.name}
        </h2>
        <p className="text-sm font-sans">Price: <b>${item.price}</b></p>
        <div className="flex gap-4 items-center">
          <button
            onClick={handleAddToCart}
            className="border-none bg-orange-500 rounded py-1 px-2 text-white hover:bg-yellow-700 relative rounded-full "
          >
            Add to Cart
          </button>
          {addedItem && (
            <div
              className={`fixed bottom-0 z-50 vs:mb-40 left-0 right-0 bg-orange-300 rounded-full flex justify-center items-center gap-3 text-white p-4 transform transition-transform duration-300 ease-in-out translate-y-full
              `}>
              <h1>Added to Cart</h1> <AiOutlineCheck size={24}/>
            </div>
          )}</div>
      </div>
    </div>
  );
};

export default FoodCard;
