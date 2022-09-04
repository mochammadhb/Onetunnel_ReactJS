import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { FaRocket } from "react-icons/fa";

function TopNavbar() {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState(false);

  return (
    <div
      id="navbar"
      className="w-full flex justify-between items-center fixed left-0 top-0 py-3 px-4 bg-slate-50 z-50"
    >
      <a
        href="/"
        className={
          input
            ? "text-indigo-500 sm:flex hidden items-center"
            : "text-indigo-500 flex items-center"
        }
      >
        <FaRocket className="w-6 h-6 mr-1" />
        <span className="text-lg font-extrabold text-gray-600">
          ONE
          <span className="text-lg font-extrabold text-indigo-500">TUNNEL</span>
        </span>
      </a>

      <div className=" text-indigo-500 flex items-center w-full justify-end">
        <input
          type="search"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => {
            setInput(true);
          }}
          onBlur={() => {
            setSearch("");
            setInput(false);
          }}
          className="relative peer z-10  outline-none px-3 bg-transparent w-12 h-12 rounded-full border cursor-pointer focus:sm:w-auto focus:w-full focus:border-line-300 focus:cursor-text pl-4 pr-4 focus:pr-16 focus:pl-4 text-gray-800"
        />
        <RiSearchLine className="absolute inset-y-0 my-auto h-8 w-12 px-3.5 stroke-gray-200 border-l border-transparent peer-focus:border-gray-200 peer-focus:stroke-gray-200" />
      </div>
    </div>
  );
}

export default TopNavbar;
