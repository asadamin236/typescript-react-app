import React, { useEffect, useState } from "react";

const Button = ({ text = "Increment" }) => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [direction, setDirection] = useState("up"); // "up" or "down"

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((c) => direction === "up" ? c + 1 : c - 1);
        console.log("Counter Value Updated");
      }, 100);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, direction]);

  const handleClick = () => {
    setDirection("up");
    setIsRunning(true);
  };

  const handleDecrement = () => {
    console.log("Decrement started");
    setDirection("down");
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
    console.clear();
  };

  return (
    <div>
      <h3>{count}</h3>
      <div className="mb-4 flex items-center justify-center w-full gap-2 sm:gap-4">
        <button
          className="bg-blue-500 text-black py-2 px-4 rounded"
          onClick={handleClick}
        >
          {text}
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-500 text-black py-2 px-4 rounded"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="bg-yellow-500 text-black py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Button;