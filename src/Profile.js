import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Break from "./Break";

const Profile = ({ exercise }) => {
  const breakTime = [10, 20, 30, 40, 50];
  const exerciseTime = exercise.reduce((a, c) => a + c, 0);
  const [time, setTime] = useState(0);
  const notify = () => toast.success("Great, Activity Completed!");
  return (
    <div className="p-5">
      <ToastContainer />
      <div>
        <h4>Abul Hasan</h4>
      </div>
      <div className="p-5 flex justify-between">
        <div>
          <p>
            <span className="text-xl font-bold">75</span>
            <span className="text-gray-500">kg</span>
          </p>
          <p className="text-gray-700 text-lg">Weight</p>
        </div>
        <div>
          <p>
            <span className="text-xl font-bold">6.5</span>
          </p>
          <p className="text-gray-700 text-lg">Height</p>
        </div>
        <div>
          <p>
            <span className="text-xl font-bold">25</span>
            <span className="text-gray-500">years</span>
          </p>
          <p className="text-gray-700  text-lg">Age</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold">Add A Break</h2>
        <div className="flex justify-between text-xl mt-10  px-5">
          {breakTime.map((b) => {
            return (
              <Break breakTime={b} key={b} setTime={setTime} time={time} />
            );
          })}
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold">Exercise Details</h2>
        <div className="p-2">
          <h2 className="text-xl font-bold my-10">
            Exercise Time{" "}
            <span className="text-gray-400 ml-2">{exerciseTime} Seconds</span>
          </h2>
          <h2 className="text-xl font-bold my-10">
            Break Time{" "}
            <span className="text-gray-400 ml-2">{time} Seconds</span>
          </h2>
        </div>
      </div>
      <button
        className="mt-20 py-5 w-full bg-blue-700 text-white font-bold text-lg rounded"
        onClick={notify}
      >
        Activity Completed
      </button>
    </div>
  );
};

export default Profile;
