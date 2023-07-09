import React from "react";
import { useLoaderData } from "react-router-dom";

const News = ({ news }) => {
  const newsDetails = useLoaderData();
  console.log(newsDetails);
  const {
    author,
    category_id,
    details,
    image_url,
    others_info,
    rating,
    thumbnail_url,
    title,
    total_view,
    _id,
  } = newsDetails;

  return (
    <div>
      <div className="card w-5/6 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
