import { FC } from "react";
import { ReactNode } from "react";

interface MainWrapperProps {
  children: ReactNode;
}
export const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  return (
    <div className="h-screen bg-gradient-to-tr from-gray-900 to-gray-700  flex items-center justify-center text-white">
      {children}
    </div>
  );
};
