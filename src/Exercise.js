import React from "react";

const Exercise = ({ data }) => {
  const { title, description, age, time, img } = data;
  return (
    <div className="p-5">
      <div className="p-5">
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500 py-3 pr-2">{description}</p>
        <p>
          For Age : <span className="font-bold">{age} </span>
        </p>
        <p className="py-3">
          Time Required : <span className="font-bold">{time} </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Exercise;
