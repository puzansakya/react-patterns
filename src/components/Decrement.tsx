import { useCounterContext } from "../useCounterContext";
import { FaMinus } from "react-icons/fa";

export const Decrement = () => {
  const { handleDecrement } = useCounterContext();
  return (
    <button className="counter-button" onClick={handleDecrement}>
      <FaMinus />
    </button>
  );
};
