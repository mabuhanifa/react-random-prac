import React from "react";

const Break = ({ breakTime, setTime }) => {
  return (
    <div className="cursor-pointer" onClick={() => setTime(breakTime)}>
      <span>{breakTime}</span>
    </div>
  );
};

export default Break;
