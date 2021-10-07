import { FC } from "react";

interface Header {
  label?: string;
  className?: string;
  width?: string;
  children?: any;
}
const Header: FC<Header> = ({ label, width = "w-44", className, children }) => {
  return (
    <div
      className={`px-5 py-4 font-bold text-xs leading-4 ${className} ${width}`}
    >
      <p>{label && label}</p>
      {children && children}
    </div>
  );
};

export default Header;
