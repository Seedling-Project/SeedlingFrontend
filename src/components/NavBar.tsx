// get axios
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Navbar: React.FC = () => {
  return (
    <div
      style={{ padding: "20px" }}
      className="navbar fixed top-0 left-0 right-0 z-50 bg-base-100"
    >
      {/* Flex container for overall navbar */}
      <div className="flex justify-center w-full">
        {/* Flex container for centered content with limited width */}
        <div className="flex justify-between items-center w-5/6">
          <div className="navbar-start">
            <div className="flex items-center space-x-2">
              {" "}
              {/* Use flex for inline elements */}
              <a href="/">
                <img
                  src="/final_logo.png"
                  alt="Logo"
                  className="sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20"
                />
              </a>{" "}
              {/* Your image */}
              <span className="navbar-center text-xl">
                Seedling Education
              </span>{" "}
              {/* Text next to the image */}
            </div>
          </div>
          <div className="navbar-end w-2/3">
            <ul className="menu menu-horizontal p-0 space-x-1 text-xs">
              <li>
                <a href="Transfer" className="font-bold">
                  Transfer
                </a>
              </li>
              <li>
                <a href="Blog" className="font-bold">
                  Blog
                </a>
              </li>
              <li>
                <a href="Curriculum" className="font-bold">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="Research" className="font-bold">
                  Research Opportunities
                </a>
              </li>
              <li>
                <a href="Miscellaneous" className="font-bold">
                  Miscellaneous Opportunities
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="navbar-end"> */}
          {/*   <div className="form-control"></div> */}
          {/* <div className="relative text-gray-400 focus-within:text-gray-600 w-full lg:w-auto"> */}
          {/*   <input */}
          {/*     type="text" */}
          {/*     placeholder="Search" */}
          {/*     className="input input-bordered pl-10" */}
          {/*   /> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
