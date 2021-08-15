import { useCounterContext } from "../useCounterContext";
import { FaMinus } from "react-icons/fa";
import { MouseEventHandler } from "react";

interface DecrementProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
export const Decrement = ({ onClick, disabled = false }: DecrementProps) => {
  return (
    <button disabled={disabled} className="counter-button" onClick={onClick}>
      <FaMinus />
    </button>
  );
};
