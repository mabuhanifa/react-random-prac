import { useState } from "react";
import "./App.css";
import data from "./data";
import Exercise from "./Exercise";
import Profile from "./Profile";
import Qna from "./Qna";

function App() {
  const [exercise, setExercise] = useState([]);

  return (
    <div>
      <h1 className="text-4xl font-bold m-5 text-indigo-700">
        Fusion Gym Center
      </h1>
      <h1 className="text-2xl font-bold m-5">Select today’s exercise</h1>
      <div className="sm:flex m-5 gap-5">
        <div className="sm:w-9/12 grid sm:grid-cols-3 gap-5">
          {data.map((data) => {
            return (
              <Exercise
                data={data}
                key={data.id}
                setExercise={setExercise}
                exercise={exercise}
              />
            );
          })}
        </div>
        <div className="sm:w-3/12 sm:grid-cols-1 border">
          <Profile exercise={exercise} />
        </div>
      </div>
      <div className="m-20">
        <Qna />
      </div>
    </div>
  );
}

export default App;
