import { FC } from "react";
import { useCounterContext } from "../useCounterContext";

interface CountProps {
  max: number;
}
export const Count: FC<CountProps> = ({ max }) => {
  const { count } = useCounterContext();
  const hasError = max ? count > max : false;

  return (
    <div
      className={`${
        hasError ? "bg-red-500" : "bg-green-400"
      } text-white py-1 px-2`}
    >
      {count}
    </div>
  );
};
