import React from "react";
const Exercise = ({ data, setExercise, exercise }) => {

  const btnClass = "w-full py-2 mt-5 text-white text-lg font-bold rounded";

  /* ------------------ data destructuring------------------ */
  const { id, title, description, age, time, img } = data;

  const addExercise = () => {
    setExercise([...exercise, data]);
  };
  
  const removeExercise = (id) => {
    const rExercise = exercise.filter((e) => e.id !== id);
    setExercise(rExercise);
  };
  return (
    <div className="p-5 border w-full h-min">
      <img
        src={img}
        alt=""
        className="w-full max-h-[150px] object-cover rounded-lg"
      />
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
          exercise.includes(data) ? "hidden" : `bg-indigo-700 ${btnClass}`
        }
        onClick={addExercise}
      >
        Add to List
      </button>
      <button
        className={
          exercise.includes(data)
            ? "w-full py-2 mt-5 text-white font-bold rounded text-lg  bg-red-600"
            : "hidden"
        }
        onClick={() => removeExercise(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default Exercise;
