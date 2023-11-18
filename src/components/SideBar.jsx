import React from "react";
import { categories } from "../utils/constant";

const SideBar = ({ selected, setSelected }) => {
  return (
    <div className="  flex md:flex-col flex-row justify-start items-center gap-1">
      {categories.map((data, index) => (
        <button
          key={index}
          className="rounded-md w-full flex justify-start items-center gap-2 px-10  py-2 text-white"
          onClick={() => setSelected(data.name)}
          style={{
            background: selected === data.name ? "red" : "",
          }}
        >
          <span className="w-7 h-7 fill-white">
            {React.createElement(data.icon)}
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: selected !== data.name ? "gray" : "" }}
          >
            {data.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SideBar;
