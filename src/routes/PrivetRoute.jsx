import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return (
      <div className="font-bold text-sky-500 mx-auto text-center text-6xl mt-20">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoute;
