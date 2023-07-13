import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://media.npr.org/assets/img/2020/11/04/2020-11-04t185430z_422758727_rc2gwj9fblom_rtrmadp_3_usa-election-reaction-526366d934133a3f194ba3e339bbd16b604a2228-s800-c85.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md backdrop-blur-md  p-10 rounded-full  animate-pulse">
            <h1 className="mb-5 text-5xl font-bold ">News Highlights</h1>
            <p className="mb-5 ">
            News helps us stay up to date with the latest developments, trends, and advancements in various fields such as technology, science, health, business, sports, and more. It enables us to keep pace with rapidly changing information and adapt to the evolving world around us.
            </p>
            <Link to='/category/0'>
            <button className="btn btn-accent">Get Started</button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
