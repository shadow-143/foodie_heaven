import React, { useState, useContext } from "react";
import {
  AiFillHome,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineRestaurantMenu, MdCategory } from "react-icons/md";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/foodielogo.jpg";
import logo1 from "../assets/foodie-1.jpg"

function Navbar() {
  const [nav, setNav] = useState(false);
  const { items } = useContext(CartContext);
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  const goToSearchPage = (e) => {
    e.preventDefault();
    navigate("/search/" + searchItem);
  };

  return (
    <div>
    <div className="bg-black text-white fixed top-0 left-0 right-0 z-10 pt-2 pb-2 mb-40">
      <div className="container ml-1 mr-1 p-2">
        <div className="flex flex-col gap-1 lg:flex lg:justify-between lg:flex-row">
          <div 
              onClick={() => setNav(!nav)}
              className="flex gap-2 items-center"
            >
              <AiOutlineMenu size={30} className="vs:mb-1 lg:ml-3 w-[40px] h-[40px] text-white cursor-pointer hover:shadow-md hover:text-orange-500 hover:skew-y-12 transition duration-100" />
              <div className="lg:ml-2 vs:ml-2 vs:pb-1">
              <Link to="/" className="flex justify-center items-center gap-1 cursor-pointer">
              <img
                src={logo}
                alt="Logo"
                className="w-20 h-auto"
              />
            </Link>
              </div>
            </div> 
            <form
              onSubmit={goToSearchPage}
              className="vs:w-[260px] bg-orange-500 rounded-full flex items-center pl-3 pr-0.5 lg:mr-4"
            >
              <AiOutlineSearch size={25} />
              <input
                onChange={(e) => setSearchItem(e.target.value)}
                className="bg-orange-100 p-2.5 w-full focus:outline-none rounded-full placeholder-orange-500 placeholder-bold text-orange-500"
                type="text"
                placeholder="Are You Hungry ?"
              />
            </form>
            <div className="block vs:hidden td:hidden lg:block md:hidden">
            <Link
              to="/checkout"
              className="bg-orange-300 hover:bg-orange-500 px-4 py-2 hover:shadow-md rounded-s-full flex justify-between items-center gap-3 cursor-pointer hover:translate-x-4 transition duration-400"
            >
              <div className="flex justify-center items-center text-xl text-white">
                <FaShoppingCart size={25} className="mr-4" /> Cart
                <div className="w-6 h-6 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold ml-4 text-white">
                    {items.length > 0 ? items.length : ""}
                  </span>
                </div>
              </div>
            </Link>
            </div>
          </div>
        </div>
        {nav && <div className=" absolute w-full h-screen z-10 top-0 left-0"></div>}
        <div
          className={`${
            nav
              ? "left-0"
              : "left-[-150%]"
          } fixed top-0 w-[300px] h-screen bg-gradient-to-b from-black via-black to-transparent z-10 duration-300 rounded-br-full`}
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer text-orange-500 hover:translate-x--6 pr-3 transition duration-400"
          />
          <div className="flex items-center flex-row p-5 gap-1">
            <img
              src={logo1}
              alt="Logo"
              className=" pw-10 h-auto"
            />
          </div>
          <nav>
            <ul className="flex flex-col p-4">
              <Link to="/">
                <li
                  onClick={() => setNav(!nav)}
                  className="text-xl py-2 px-4 flex cursor-pointer hover:bg-orange-500 hover:rounded-s-full"
                >
                  <div className="flex justify-between items-center text-white">
                    <AiFillHome size={25} className=" text-white mr-4" /> Home
                  </div>
                </li>
              </Link>
              <Link to="/menu">
                <li
                  onClick={() => setNav(!nav)}
                  className="text-xl py-2 px-4 flex cursor-pointer hover:bg-orange-500 hover:rounded-s-full"
                >
                  <div className="flex justify-between items-center text-white">
                    <MdOutlineRestaurantMenu size={25} className="text-white mr-4" /> Menu
                  </div>
                </li>
              </Link>
              <Link to="/categories">
                <li
                  onClick={() => setNav(!nav)}
                  className="text-xl py-2 px-4 flex cursor-pointer hover:bg-orange-500 hover:rounded-s-full"
                >
                  <div className="flex justify-between items-center text-white">
                    <MdCategory size={25} className="font-poppins text-white mr-4" /> Categories
                  </div>
                </li>
              </Link>
              <Link
              to="/checkout"
              className="bg-transparent hover:bg-orange-500 px-4 py-2 hover:shadow-md rounded-s-full flex justify-between items-center gap-3 cursor-pointer "
            >
              <div className="flex justify-center items-center text-xl text-white">
                <FaShoppingCart size={25} className="mr-4" /> Cart
                <div className="w-6 h-6 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold ml-4 text-white">
                    {items.length > 0 ? items.length : ""}
                  </span>
                </div>
              </div>
            </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
