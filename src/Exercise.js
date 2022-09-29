import React, { useState } from "react";

const Exercise = ({ data, setExercise, exercise }) => {
  const [disable, setDisable] = useState(false);
  const btnClass = "w-full py-2 mt-5 text-white font-bold rounded-lg";
  const { title, description, age, time, img } = data;

  const addExercise = () => {
    setExercise([...exercise, time]);
    setDisable(true);
  };
  return (
    <div className="p-5 border w-full h-min">
      <img src={img} alt="" className="w-full max-h-[150px] object-cover rounded-lg" />
      <div className="p-5">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500 py-3 pr-2">{description}</p>
        <p>
          For Age : <span className="font-bold">{age} </span>
        </p>
        <p className="py-3">
          Time Required : <span className="font-bold">{time}s</span>
        </p>
      </div>
      <button
        className={
          disable ? `bg-green-500 ${btnClass}` : `bg-blue-500 ${btnClass}`
        }
        onClick={addExercise}
        disabled={disable}
      >
        {disable ? "Added" : "Add to List"}
      </button>
    </div>
  );
};

export default Exercise;
