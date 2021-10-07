import { FC } from "react";
import Icon from "../icon";

interface Variant2Props {
  label?: string;
  icon?: any;
  iconBefore?: boolean;
  iconAfter?: boolean;
}
const Variant2: FC<Variant2Props> = ({
  label = "CR",
  icon,
  iconBefore,
  iconAfter,
}) => {
  return (
    <span
      className={`flex-shrink-0 px-3 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium  bg-gray-200 text-gray-700 space-x-1 outline-none hover:bg-indigo-200 hover:text-indigo-700 transition-all duration-200 ease-in cursor-pointer`}
    >
      {iconBefore && icon && icon} <p>{label}</p> {iconAfter && icon && icon}
    </span>
  );
};
export default Variant2;
