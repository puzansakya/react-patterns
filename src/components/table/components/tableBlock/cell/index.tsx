import { FC } from "react";

interface Cell {
  label?: string;
  className?: string;
  width?: string;
  children?: any;
}
const Cell: FC<Cell> = ({ label, width = "w-44", className, children }) => {
  return (
    <div className={`px-5 py-4  text-xs leading-4 ${className} ${width}`}>
      <p>{label && label}</p>
      {children && children}
    </div>
  );
};

export default Cell;
