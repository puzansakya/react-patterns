import { useCounterContext } from "../useCounterContext";
import { FaPlus } from "react-icons/fa";

export const Increment = () => {
  const { handleIncrement } = useCounterContext();
  return (
    <button className="counter-button" onClick={handleIncrement}>
      <FaPlus />
    </button>
  );
};
