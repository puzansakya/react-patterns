import { FC } from "react";

interface ButtonProps {
  label?: string;
  icon?: any;
  iconBefore?: any;
  iconAfter?: any;
  variant?: string;
}
const Button: FC<ButtonProps> = ({
  label = "CR",
  icon,
  iconBefore,
  iconAfter,
  ...props
}) => {
  const getSize = () => {
    switch (props.variant) {
      case "small":
        return "px-2 py-1";
      case "medium":
        return "px-3 py-2";
      case "large":
        return "px-4 py-3";
      default:
        return "px-2 py-1";
    }
  };
  return (
    <button
      className={`flex-shrink-0 ${getSize()} text-gray-900  hover:bg-indigo-200 hover:text-indigo-700 text-sm font-medium rounded-lg space-x-1 flex items-center transition-all duration-200 ease-in`}
    >
      {iconBefore && iconBefore}
      <p>{label}</p>
      {iconAfter && iconAfter}
    </button>
  );
};
export default Button;
