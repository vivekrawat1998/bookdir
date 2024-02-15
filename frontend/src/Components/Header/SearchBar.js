import React from "react";
import { TfiSearch } from "react-icons/tfi";
const SearchBar = () => {
  return (
    <div className="w-full max-w-[450px] relative border-2 py-3 hover:border-x-blue-500 border-blue-500 hover:border-green-500 p-5 rounded-[40px]">
      <input
        className="outline-none border-none px-3"
        type="text"
        placeholder="Search for items..."
      />
      <span className="absolute top-4 right-6 ">
        <TfiSearch className="text-xl text-blue-800 font-bold hover:text-green-600" />
      </span>
    </div>
  );
};

export default SearchBar;