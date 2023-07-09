import React from "react";
import { FcBookmark, FcShare } from "react-icons/fc";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import moment from "moment/moment";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
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
  } = news;
  console.log(news);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl my-5 rounded-md">
        <div className="flex justify-between items-center bg-sky-100 px-10 py-3 rounded-md">
          <div className="flex gap-2">
            <img
              width={60}
              className="border-2 border-indigo-600 rounded-full"
              src={author.img}
              alt=""
            />
            <div>
              <h3 className="font-semibold">{author.name}</h3>
              <p className="text-slate-400">
                {moment(author?.published_date).format("yyyy-MM-D")}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link className="cursor-pointer">
              {" "}
              <FcBookmark className="text-3xl" />
            </Link>
            <Link className="cursor-pointer">
              <FcShare className="text-3xl" />
            </Link>
          </div>
        </div>

        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <figure>
            <img src={image_url} alt="news_img" />
          </figure>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`} className="text-orange-400 font-bold">
                Read More
              </Link>{" "}
            </>
          )}
          <hr className="border-3 border-slate-950" />
          <div className="card-actions flex justify-between items-center">
            <div className="flex items-center justify-end align-middle gap-2">
              <Rating
                placeholderRating={rating.number}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar className="text-warning" />}
                fullSymbol={<FaStar className="text-warning" />}
              />
              <p>{rating.number}</p>
            </div>
            <div className="flex items-center gap-2 ">
              <AiFillEye className="text-xl mt-1" />
              <p>{total_view}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
