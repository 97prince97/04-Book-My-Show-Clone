import React, { Fragment } from "react";
import {
  BiChevronDown,
  BiChevronRight,
  BiMenu,
  BiSearch,
} from "react-icons/bi";

const NavSm = () => {
  return (
    <div className="text-white flex items-center justify-between">
      <div>
        <h3 className="text-2xl font-bold">It All Starts Here!</h3>
        <span className="text-gray-300 text-xs flex items-center">
          Agra <BiChevronRight />
        </span>
      </div>
      <div className="w-7 h-7">
        <BiSearch className="w-full h-full" />
      </div>
    </div>
  );
};
const NavMd = () => {
  return (
    <>
      <div className="w-full flex items-center gap-2 bg-white px-3 py-1.5 rounded-sm mt-1">
        <BiSearch className="text-lg" />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
          placeholder="Search for Movies, Events, Plays, Sports, and Activities"
        />
      </div>
    </>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-28 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="flex items-center text-white text-xl">
            <div>
              <span>book</span>
            </div>
            <div className="w-9 h-9 flex text-white items-center text-xl">
              <img
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div>
              <span>show</span>
            </div>
          </div>
          <div className="w-full flex items-center gap-2 bg-white px-3 py-1.5 rounded-sm mt-1">
            <BiSearch className="text-lg" />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for Movies, Events, Plays, Sports, and Activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-300 text-sm flex items-center hover:text-white cursor-pointer">
            Agra <BiChevronDown />
          </span>
          <button className="bg-signInColor-300 text-white px-4 py-1.5 text-xs rounded">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-navBarColor-700 px-4 py-3">
        <div className="md:hidden">
          {/*Mobile Screen*/}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/*Medium/Tab Screen*/} <NavMd />
        </div>
        <div className="hidden lg:flex">
          {/*Large Screen*/}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
