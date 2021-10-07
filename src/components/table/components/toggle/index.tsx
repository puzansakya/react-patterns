import { FC } from "react";
import "./index.css";

interface ToggleProps {
  label?: string;
  showLabel?: boolean;
  track?: string;
}
const Toggle: FC<ToggleProps> = ({
  label,
  showLabel = true,
  track = "toggle",
}) => {
  return (
    <>
      <div className="relative inline-block w-6 mr-2 align-middle select-none transition-all duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id={track}
          className="toggle-checkbox absolute block w-2 h-2 rounded-full bg-gray-700  appearance-none cursor-pointer top-0.5 transition-all duration-200 ease-in"
        />
        <label
          htmlFor={track}
          className="toggle-label block overflow-hidden h-3 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      {showLabel && (
        <label htmlFor={track} className="text-xs text-gray-700">
          Toggle me.
        </label>
      )}
    </>
  );
};

export default Toggle;
