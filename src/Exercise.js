import React from "react";

const Exercise = ({ data, setExercise, exercise }) => {
  const { title, description, age, time, img } = data;
  return (
    <div className="p-5">
      <div className="p-5">
        <img src={img} alt="" className="w-full h-40 object-cover" />
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
        <button
          className="bg-blue-500 px-20 py-2 my-5 text-white font-bold"
          onClick={() => setExercise([...exercise, time])}
        >
          Add to List
        </button>
      </div>
    </div>
  );
};

export default Exercise;
