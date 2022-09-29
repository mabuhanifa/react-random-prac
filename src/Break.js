import React, { useEffect } from "react";

const Break = ({ breakTime, setTime, time }) => {
  const bgClass = "cursor-pointer bg-blue-500 p-2 rounded-full text-white";

  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTime(storedList);
    }
  }, [breakTime, setTime]);
  const addTime = () => {
    setTime(breakTime);
    localStorage.setItem("localTasks", JSON.stringify(breakTime));
  };
  return (
    <div
      className={time === breakTime ? bgClass : "cursor-pointer p-2"}
      onClick={addTime}
    >
      <span>{breakTime}s</span>
    </div>
  );
};

export default Break;
