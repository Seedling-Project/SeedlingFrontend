import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Curriculum from "./Curriculum";
import Research from "./Research";

const Prototype = () => {
  return (
  <><>
  <div className="navbar bg-base-100 flex justify-center items-center">
  <div className="navbar-start  lg:justify-start flex justify-center items-center">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Transfer</a></li>
        <li>
          <a>Curriculum</a>
        </li>
        <li><a>Research</a></li>

      </ul>
    </div>
    <a className="btn btn-ghost text-xl lg:text-center ">Seedling Education</a>

    <a href="/" className = "min-w-24 min-h-24 w-24 h-24">
                <img
                  src="/final_logo.png"
                  alt="Logo"
                  width = "100px"
                  
                  />
              </a>
  </div>
  
<div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Transfer</a></li>
      <li><a>Curriculum</a></li>
      <li><a>Research</a></li>
    </ul>
  </div>
</div>
  
  
  
  <Routes>
        <Route path="/transfer" element={<Home />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/research" element={<Research />} />
        <Route path="/other" element={<Home />} />
      </Routes></>
    </>
  );
};

export default Prototype;
