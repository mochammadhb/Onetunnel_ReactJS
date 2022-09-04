import React from "react";
import {
  RiHome3Line,
  RiStore2Line,
  RiArticleLine,
  RiMapPinUserLine,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";

function BtmNavbar() {
  return (
    <div className="fixed max-w-screen-sm mx-auto bottom-0 left-0 right-0 w-full bg-white py-2 border-t border-t-gray-100 z-50">
      <div id="tabs" className="flex justify-between px-2">
        <NavLink
          to="/"
          className={(nav) =>
            nav.isActive
              ? "w-full justify-center inline-block text-center pt-2 pb-1 bg-indigo-100 rounded-xl text-indigo-500"
              : "w-full hover:text-indigo-500 justify-center inline-block text-center pt-2 pb-1  hover:rounded-xl hover:ease-in hover:duration-300 text-zinc-400"
          }
        >
          <RiHome3Line className="h-5 w-5 inline-block mb-1" />
          <span className="tab block text-xs">Home</span>
        </NavLink>
        <NavLink
          to="/stores"
          className={(nav) =>
            nav.isActive
              ? "w-full justify-center inline-block text-center pt-2 pb-1 bg-indigo-100 rounded-xl text-indigo-500"
              : "w-full hover:text-indigo-500  justify-center inline-block text-center pt-2 pb-1 hover:rounded-xl hover:ease-in hover:duration-300 text-zinc-400"
          }
        >
          <RiStore2Line className="h-5 w-5 inline-block mb-1" />
          <span className="tab block text-xs">Stores</span>
        </NavLink>
        <NavLink
          to="/articles"
          className={(nav) =>
            nav.isActive
              ? "w-full justify-center inline-block text-center pt-2 pb-1 bg-indigo-100 rounded-xl text-indigo-500"
              : "w-full hover:text-indigo-500  justify-center inline-block text-center pt-2 pb-1 hover:rounded-xl hover:ease-in hover:duration-300 text-zinc-400"
          }
        >
          <RiArticleLine className="h-5 w-5 inline-block mb-1" />
          <span className="tab block text-xs">Articles</span>
        </NavLink>
        <NavLink
          to="accounts/login"
          className={(nav) =>
            nav.isActive
              ? "w-full justify-center inline-block text-center pt-2 pb-1 bg-indigo-100 rounded-xl text-indigo-500"
              : "w-full hover:text-indigo-500  justify-center inline-block text-center pt-2 pb-1  hover:rounded-xl hover:ease-in hover:duration-300 text-zinc-400"
          }
        >
          <RiMapPinUserLine className="h-5 w-5 inline-block mb-1" />
          <span className="tab block text-xs">Profile</span>
        </NavLink>
      </div>
    </div>
  );
}

export default BtmNavbar;
