import React from "react";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";
import LeftNav from "../pages/shared/LeftNav/LeftNav";
import RightNav from "../pages/shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className="my-container">
      <Header />
      <NavBar/>
      <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-3">
          <LeftNav />
        </div>
        <div className="col-span-6 ">
          <Outlet/>
        </div>
        <div className="col-span-3 ">
          <RightNav />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;



/* 
<div className="my-container">
      <Header />
      <NavBar/>
      <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-3">
          <LeftNav />
        </div>
        <div className="col-span-6 ">
          <Outlet/>
        </div>
        <div className="col-span-3 ">
          <RightNav />
        </div>
      </div>
      <Footer />
    </div> */
