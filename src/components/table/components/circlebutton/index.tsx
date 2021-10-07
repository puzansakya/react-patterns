import { FC } from "react";

interface CircleButtonProps {
  icon?: any;
  icon2?: any;
  variant?: string;
}
const CircleButton: FC<CircleButtonProps> = ({ icon, icon2, variant }) => {
  const getVariantBasedClass = () => {
    switch (variant) {
      case "single":
        return "w-7 h-7 hover:bg-indigo-200 rounded-full";
      case "square":
        return "w-7 h-7 hover:bg-indigo-200 rounded-lg";
      case "double":
        return "space-x-1 border border-transparent hover:border-indigo-700 rounded-full px-2 py-1";
      default:
        return "w-7 h-7 hover:bg-indigo-200 rounded-full";
    }
  };
  return (
    <button
      className={`text-gray-900 flex items-center justify-center hover:text-indigo-700 text-sm  ${getVariantBasedClass()} transition-all duration-200 ease-in`}
    >
      {icon}
      {icon2}
    </button>
  );
};

export default CircleButton;
