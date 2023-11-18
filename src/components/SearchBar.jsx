import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../svgs/SearchIcon";

const SearchBar = () => {
  const [searchedText, setSearchedText] = useState();

  const navigate = useNavigate();

  const submitSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(`/search/${searchedText}`);
    }
  };

  const handleChange = (e) => {
    setSearchedText(e.target.value);
  };

  return (
    <div className="flex justify-center items-center bg-white px-2 rounded-md w-1/2 ">
      <input
        type="text"
        value={searchedText}
        name="searchtext"
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => submitSearch(e)}
        placeholder="search...."
        className="px-2 py-2 border-none ring-0 ring-transparent mx-2 outline-none w-full "
      />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
