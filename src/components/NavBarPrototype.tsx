import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Curriculum from "./Curriculum";
import Research from "./Research";

const Prototype = () => {
  return (
    <div className="navbar p-[20px] bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <nav>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/transfer">Transfer</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/curriculum">Curriculum</Link>
              </li>
              <li>
                <Link to="/research">Research Opportunities</Link>
              </li>
              <li>
                <Link to="/other">Other Opportunities</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/transfer" element={<Home />} />
            <Route path="/blog" element={<Home />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/research" element={<Research />} />
            <Route path="/other" element={<Home />} />
          </Routes>
        </div>
      </div>
      <div className="navbar-center">
        <a href="/">
          <img
            src="/final_logo.png"
            alt="Logo"
            className="sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20"
          />
        </a>{" "}
        <a className="text-xl">Seedling Education</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Prototype;
