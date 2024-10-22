import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container mt-12 lg:mt-6 mx-auto p-5 ">
      <div className="px-6 lg:mx-5 lg:mt-6">
        <h1 className="text-grey-600 font-bold text-2xl lg:text-3xl text-left">
          Quick <span className="text-orange-500">Links</span>
        </h1>
        <hr className="my-6 border-orange-500"></hr>
        <div className="max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8">
          <div>
            <p className="py-4">
            <span className="text-orange-500 font-bold">Foodie</span>, our food ordering app, ensures a delightful dining experience. With a diverse menu and secure transactions, we guarantee satisfaction. Order with Foodie for a tasteful journey.
            </p>
            <div className="flex justify-between md:w-[75%] my-6">
              <a href="https://api.whatsapp.com/send?phone=919492838146"
              target="_blank" rel="noreferrer">
                {" "}
                <FaWhatsapp
                  size={30}
                  className="hover:scale-110 duration-300 hover:text-orange-500"
                />{" "}
              </a>
              <a href="https://www.instagram.com/mr_neelesh__03/" target="_blank" rel="noreferrer">
                {" "}
                <FaInstagram
                  size={30}
                  className="hover:scale-110 duration-300 hover:text-orange-500"
                />{" "}
              </a>
              <a href="mailto:saineelesh03@gmail.com" target="_blank" rel="noreferrer">
                <FiMail
                  size={30}
                  className="hover:scale-110 duration-300 hover:text-orange-500"
                />
              </a>
              <a href="https://www.linkedin.com/in/mandula-neeleshkumar-a89752249/" target="_blank" rel="noreferrer">
                <FaLinkedin
                  size={30}
                  className="hover:scale-110 duration-300 hover:text-orange-500"
                />
              </a>
            </div>
            <h3 className="text-sm">&copy; 2023 Created By Neelesh</h3>
          </div>
          <div className="lg:col-span-2 flex justify-between sm:mx-10 lg:mx-14  mt-6">
            <div>
              <h6 className="text-orange-500 font-bold">Links</h6>
              <ul>
                <li className="py-2 text-sm hover:text-orange-600 cursor-pointer">
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li className="py-2 text-sm hover:text-orange-600 cursor-pointer">
                  <Link to="/menu">Menu</Link>
                </li>
                <li className="py-2 text-sm hover:text-orange-600 cursor-pointer">
                  <Link to="/categories">Categories</Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-orange-500 font-bold">Support</h6>
              <ul>
                <li className="py-2 text-sm ">
                  About
                </li>
                <li className="py-2 text-sm ">
                  FAQ
                </li>
                <li className="py-2 text-sm ">
                  Ts&Cs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
