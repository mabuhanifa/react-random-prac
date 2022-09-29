import { useState } from "react";
import "./App.css";
import data from "./data";
import Exercise from "./Exercise";
import Profile from "./Profile";

function App() {
  const [exercise, setExercise] = useState([]);
  
  return (
    <div className="flex m-10 gap-5">
      <div className="w-9/12 grid grid-cols-3 border">
        {data.map((data) => {
          return <Exercise data={data} key={data.id} setExercise={setExercise} exercise={exercise}/>;
        })}
      </div>
      <div className="w-3/12 grid-cols-1 border">
        <Profile exercise={exercise}/>
      </div>
    </div>
  );
}

export default App;
