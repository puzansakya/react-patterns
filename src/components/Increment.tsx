import { FaPlus } from "react-icons/fa";
import { MouseEventHandler } from "react";

interface IncrementProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Increment = ({
  onClick,
  disabled = false,
  ...props
}: IncrementProps) => {
  return (
    <button
      disabled={disabled}
      className="counter-button"
      onClick={onClick}
      {...props}
    >
      <FaPlus />
    </button>
  );
};
