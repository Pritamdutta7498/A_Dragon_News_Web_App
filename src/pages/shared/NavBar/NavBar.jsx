import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
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
        <Link to="/category/0">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="navbar-end ">
        {/* {user && (
          
        )} */}
        {user ? (
          <>
            {user?.photoURL ? (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <img
                  src={user.photoURL}
                  className="w-14 rounded-full"
                  alt="user img"
                />
              </label>
            ) : (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <BsPersonCircle className="text-4xl text-sky-600" title={user.email}/>
              </label>
            )}
          </>
        ) : (
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <BsPersonCircle className="text-4xl" title="Please login" />
          </label>
        )}
        {/* (
          
        ) */}
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-neutral px-8 rounded-none ml-3  "
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            {" "}
            <button className="btn btn-neutral px-8 rounded-none ml-3 ">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
