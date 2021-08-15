import { useState } from "react";

//Function which concat all functions together
const callFnsInSequence =
  (...fns: any[]) =>
  (...args: any[]) =>
    fns.forEach((fn) => fn && fn(...args));

interface CounterProps {
  initialCount: number;
  max: number;
}
export const useCounter = ({ initialCount, max }: CounterProps) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };
  //props getter for 'Counter'
  const getCounterProps = ({ ...otherProps } = {}) => ({
    value: count,
    "aria-valuemax": max,
    "aria-valuemin": 0,
    "aria-valuenow": count,
    ...otherProps,
  });

  //props getter for 'Decrement'
  const getDecrementProps = ({ onClick, ...otherProps }: any = {}) => ({
    onClick: callFnsInSequence(handleDecrement, onClick),
    disabled: count === 0,
    ...otherProps,
  });

  //props getter for 'Increment'
  const getIncrementProps = ({ onClick, ...otherProps }: any = {}) => ({
    onClick: callFnsInSequence(handleIncrement, onClick),
    disabled: count === max,
    ...otherProps,
  });

  return {
    count,
    handleIncrement,
    handleDecrement,
    getCounterProps,
    getDecrementProps,
    getIncrementProps,
  };
};
