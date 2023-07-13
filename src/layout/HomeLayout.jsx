import React from "react";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";

import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";

const HomeLayout = () => {
    return (
        <div  className="my-container">
          <Header />
          <div className="my-3">
            <NavBar/>
          </div>
          <Outlet/>
          
             <Footer />
         
         
        </div>
      );
};

export default HomeLayout;