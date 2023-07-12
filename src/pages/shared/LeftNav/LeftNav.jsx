import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  // console.log(categories);

  useEffect(() => {
    fetch("https://dragon-news-server-pritamdutta7498.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h2 className=" font-bold text-2xl ">All Categories:</h2>
      <div className="ps-10 my-5 text-xl text-slate-400 font-semibold">
        {categories.map((category) => (
          <p key={category.id} className="my-6">
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
