import React, { useContext } from "react";
import logo from "../../../assets/assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

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
        <Link to="/">
          <button className="btn btn-outline btn-error border-spacing-0 font-bold  shadow-md shadow-slate-700">
            Latest
          </button>
        </Link>

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
      
    </div>
  );
};

export default Header;
