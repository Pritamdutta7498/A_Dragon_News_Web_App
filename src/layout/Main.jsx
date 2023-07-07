import React from "react";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";
import LeftNav from "../pages/shared/LeftNav/LeftNav";
import RightNav from "../pages/shared/RightNav/RightNav";

const Main = () => {
  return (
    <div className="my-container">
      <Header />
      <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-3">
          <LeftNav />
        </div>
        <div className="col-span-6 ">
          <h1>Main content is coming</h1>
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
