import { FC } from "react";

interface CardBodyProps {
  children: any;
}
const CardBody: FC<CardBodyProps> = ({ children }) => {
  return (
    <div
      className="pt-3 bg-white rounded-2xl shadow-md"
      style={{ width: "455px" }}
    >
      {children}
    </div>
  );
};

export default CardBody;
