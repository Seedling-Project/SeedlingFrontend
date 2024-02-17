import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Curriculum from './Curriculum'
import Research from './Research'

const Prototype = () => {
  return (
    <>
      <>
        <div className="navbar bg-base-100 flex justify-evenly items-center w-full">
          <div className="navbar-start  lg:justify-start flex justify-around items-center w-full">
            <div className="dropdown mr-100px">
              <div
                tabIndex={0}
                role="button"
                className="btn  btn-ghost margin lg:hidden"
              >
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/transfer">Transfer</Link>
                </li>
                <li>
                  <Link to="/curriculum">Curriculum</Link>
                </li>
                <li>
                  <Link to="/research">Research</Link>
                </li>
                <li>
                  <Link to="/research">Opportunities</Link>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl lg:text-center hidden md:unhidden :block">
              Seedling Education
            </a>

            <a href="/" className="min-w-24 min-h-24 w-24 h-24 ">
              <img src="/final_logo.png" alt="Logo-seedling" width="80px" />
            </a>
            <button className="btn btn-ghost btn-circle lg:hidden">
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

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/transfer">Transfer</Link>
              </li>
              <li>
                <Link to="/curriculum/*">Curriculum</Link>
              </li>
              <li>
                <Link to="/research">Research</Link>
              </li>
              <li>
                <Link to="/research">Opportunities</Link>
              </li>
            </ul>
            <button className="btn btn-ghost btn-circle ">
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/curriculum/*" element={<Curriculum />} />
          <Route path="/research" element={<Research />} />
          <Route path="/other" element={<Home />} />
        </Routes>
      </>
    </>
  )
}

export default Prototype
