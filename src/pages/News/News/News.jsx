import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import EditorInsight from "../EditorInsights/EditorInsight";

const News = ({ news }) => {
  const newsDetails = useLoaderData();
  // console.log(newsDetails);
  const { details, image_url, title, category_id } = newsDetails;

  return (
    <div>
      <div className="card w-full mx-auto bg-base-100 shadow-xl mt-20">
        <figure>
          <img src={image_url} alt="details img of news" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{title}</h2>
          <p>{details}</p>
          <div className="card-actions my-4">
            <Link to={`/category/${category_id}`}>
              <button className="btn btn-error btn-outline">
                {" "}
                <AiOutlineArrowLeft /> All news in this category
              </button>
            </Link>
          </div>
        </div>
        
      </div>
      {/* editor insights section in here */}
      <EditorInsight/>

    </div>
  );
};

export default News;
