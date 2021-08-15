import { FC, ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
}
export const Label: FC<LabelProps> = ({ children }) => {
  return <div className="counter-label">{children}</div>;
};
