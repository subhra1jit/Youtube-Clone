import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="z-10 flex justify-between w-full sticky top-0 left-0 bg-black px-10 py-4 border-b-[1px] border-gray-50">
      <div className="flex justify-center gap-3 items-center">
        <img
          src={`https://i.ibb.co/s9Qys2j/logo.png`}
          alt="souTube"
          className="w-7 h-7"
        />
        <Link to="/">
          <h2 className="text-2xl font-bold text-white">SouTube</h2>
        </Link>
      </div>
      <SearchBar />
    </div>
  );
};

export default NavBar;
