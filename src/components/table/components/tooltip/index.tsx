import { FC } from "react";

interface TooltipProps {
  label?: string;
}
const Tooltip: FC<TooltipProps> = ({ label = "Open Calendar" }) => {
  return (
    <span className="p-1 rounded-md font-bold bg-indigo-600 hover:bg-indigo-700 text-white text-xs leading-3 tracking-tight cursor-pointer ">
      {label}
    </span>
  );
};

export default Tooltip;
