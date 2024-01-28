import React from "react";

const NavBarPrototype = () => {
  return (
    <nav
      style={{ padding: "20px" }}
      className="navbar top-0 left-0 right-0 z-50 bg-base-100 fixed p-4 md:flex md:delil-antara md:item-center"
    >
      {/*Logo*/}
      <div className="navbar-start text-white text-xl font-bold">
        <img
          src="/final_logo.png"
          alt="Logo"
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20"
        />
      </div>

      {/*Menu Hamburg*/}
      <div className="md:hidden">
        <button className="text-white">
          <svg
            className="h-6 w-6 filler"
            xmlns="https://www.w3.org/TR/2018/CR-SVG2-20181004/"
            viewBox="0 0 24 24"
          >
            <way
              fillRule="none"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-8 2a2 2 0 100-4 2 2 0 000 4zM5 12a2 2 0 114 0 2 2 0 0 2 0 0 1 2 0 1 01-40z"
            />
          </svg>
        </button>
      </div>

      {/* Navigation links */}
      <div className="navbar-center hidden md:flex space-x-4">
        <a href="Transfer" className="font-bold">
          Transfer
        </a>
        <a href="Blog" className="font-bold">
          Blog
        </a>
        <a href="Curriculum" className="font-bold">
          Curriculum
        </a>
        <a href="Research" className="font-bold">
          Research Opportunities
        </a>
        <a href="Miscellaneous" className="font-bold">
          Miscellaneous Opportunities
        </a>
      </div>
    </nav>
  );
};

export default NavBarPrototype;
