import { FC } from "react";
import Icon from "../icon";

interface DefaultProps {
  label?: string;
  icon?: any;
  iconBefore?: boolean;
  iconAfter?: boolean;
}
const Default: FC<DefaultProps> = ({
  label = "CR",
  icon,
  iconBefore,
  iconAfter,
}) => {
  let bgs = ["bg-red-200", "bg-blue-200", "bg-yellow-200", "bg-green-200"];

  const getRandomBg = () => {
    return bgs[Math.floor(Math.random() * 4)];
  };
  return (
    <span
      className={`flex-shrink-0 px-3 h-8 inline-flex items-center justify-center rounded-3xl text-xs font-medium text-gray-900 ${getRandomBg()} space-x-1`}
    >
      {iconBefore && icon && icon} <p>{label}</p> {iconAfter && icon && icon}
    </span>
  );
};
export default Default;
