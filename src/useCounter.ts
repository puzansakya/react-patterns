import { useState } from "react";

export const useCounter = (initialCount: number) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  return { count, handleIncrement, handleDecrement };
};
