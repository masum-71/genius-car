import React from "react";

const BannerItem = ({ data }) => {
  const { image, id, next, prev } = data;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-image">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-20 top-1/3">
        <h1 className="text-5xl font-bold text-white">
          Affordable <br />
          Price for car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-start transform w-1/3 -translate-y-1/2 left-20 top-1/2">
        <p className="text-white font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore fuga,
          provident vel eaque ducimus ea!
        </p>
      </div>
      <div className="absolute flex justify-start transform w-1/3 -translate-y-1/2 left-20 top-2/3">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-4">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
