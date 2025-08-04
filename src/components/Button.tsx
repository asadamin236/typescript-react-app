import React, { useEffect, useState } from "react";
const Button = ({ text = "Increment" }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    // Show message only once when component mounts
    console.log(`Button mounted with initial count: ${count}`);
  }, [count]);
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h3>{count}</h3>
      <div className="mb-4 flex items-center">
        <button
          className="bg-blue-500 text-black py-2 px-4 rounded"
          onClick={handleClick}
        >
          {text}
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-500 text-black py-2 px-4 rounded ml-2"
        >
          Decrement
        </button>
        <button onClick={handleReset} className="bg-yellow-500 text-black py-2 px-4 rounded ml-2">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Button;
