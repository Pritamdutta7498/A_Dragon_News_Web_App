import React from "react";
import logo from "../../../assets/assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* logo section */}
      <div className="py-5 text-center">
        <img className="mx-auto" src={logo} alt="website logo" />
        <p className="text-slate-700 text-sm py-2">
          Journalism without fear and favour
        </p>
        <p className="font-medium">{moment().format("dddd, MMMM Do, YYYY")}</p>
      </div>
      {/* marquee section */}
      <div className="flex bg-slate-300 rounded-md p-3  gap-2">
        <button className="btn btn-outline btn-accent shadow-md shadow-slate-700">Latest</button>
        <Marquee speed={120} className="font-semibold" pauseOnHover="true">
          “Creativity is allowing yourself to make mistakes. Art is knowing
          which ones to keep.” – Scott Adams{" "}
          <p className="mx-20">
            “Creativity is allowing yourself to make mistakes. Art is knowing
            which ones to keep.” – Scott Adams
          </p>
        </Marquee>
      </div>
      {/* navbar section */}
      <div>
        <div className="navbar bg-base-100 ml-2 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/career">Career</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex gap-5">
          <Link to="/">Home</Link>
            <Link>About</Link>
            <Link>Career</Link>
          </div>
          <div className="navbar-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-14 rounded-full">
                <img src="https://static.vecteezy.com/system/resources/previews/011/483/813/original/guy-anime-avatar-free-vector.jpg" />
              </div>
            </label>
            <button className="btn btn-neutral px-8 rounded-none ml-[-20px] ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
