import { useReducer } from "react";

const internalReducer = ({ count }: any, { type, payload }: any) => {
  switch (type) {
    case "increment":
      return {
        count: Math.min(count + 1, payload.max),
      };
    case "decrement":
      return {
        count: Math.max(0, count - 1),
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

interface CounterProps {
  initialCount: number;
  max: number;
}
const useCounter = (
  { initialCount, max }: CounterProps,
  reducer = internalReducer
) => {
  const [{ count }, dispatch] = useReducer(reducer, { count: initialCount });

  const handleIncrement = () => {
    dispatch({ type: "increment", payload: { max } });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
  };
};

useCounter.reducer = internalReducer;
useCounter.types = {
  increment: "increment",
  decrement: "decrement",
};

export default useCounter;
