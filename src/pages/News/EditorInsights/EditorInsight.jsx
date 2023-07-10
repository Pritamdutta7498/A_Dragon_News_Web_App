import React from "react";
import editorInsights1 from "../../../assets/assets/editorsInsight1.png";
import editorInsights2 from "../../../assets/assets/editorsInsight2.png";
import editorInsights3 from "../../../assets/assets/editorsInsight3.png";

const EditorInsight = () => {
  return (
    <div className="flex gap-5 mt-10">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={editorInsights1} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Editor news one</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            asperiores neque.</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={editorInsights2} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Editor news two</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            asperiores neque.</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={editorInsights3} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Editor news three</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            asperiores neque.</p>
        </div>
      </div>
    </div>
  );
};

export default EditorInsight;
