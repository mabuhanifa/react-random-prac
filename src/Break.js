import React from "react";

const Break = ({ breakTime, setTime, time }) => {
  const bgClass = "cursor-pointer bg-blue-500 p-2 rounded-full text-white";
  return (
    <div
      className={time === breakTime ? bgClass : "cursor-pointer p-2"}
      onClick={() => setTime(breakTime)}
    >
      <span>{breakTime}</span>
    </div>
  );
};

export default Break;
