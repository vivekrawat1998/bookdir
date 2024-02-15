import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import SearchBar from "../Header/SearchBar";
import { HiShoppingCart } from "react-icons/hi";
import CounterBadge from "./CounterBadge";

const Navbar = () => {
  return (
    <div>
      <div className="container sticky pt-5 lg:block  hidden borde">
        <div className=" grid grid-cols-4 gap-5 grid-flow-col  ">
          <h1 className="text-4xl font-bold text-blue-700 col-span-1">
            LOGO
          </h1>
          <div className="col-span-2">

          <SearchBar className="" />
          </div>

          <div className="flex items-center text-blue-700 gap-10 font-semibold text-[16px] col-span-2 ">
            <h1 className="hover:text-green-600">About</h1>
            <h1 className="hover:text-green-600">Contact us</h1>
            <h1 className="hover:text-green-600">Blogs</h1>
          </div>
          <div className="flex items-center gap-5  text-[24px] text-blue-700  col-span-2 ">
            <span className="items-wrapper relative">
              <FaRegHeart />
              <CounterBadge />
            </span>
            <span className="items-wrapper relative">
              <HiShoppingCart />
              <CounterBadge />
            </span>
            <span className="w-[50px] h-[50px] object-cover rounded-full overflow-hidden">
              <img
                className="object-cover"
                src="/WhatsApp Image 2023-11-16 at 11.15.18 AM.jpeg"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;