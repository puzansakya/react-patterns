import { FC } from "react";

interface LiItemProps {
  label?: string;
  textColor?: string;
}
const LiItem: FC<LiItemProps> = ({
  label = "Open Calendar",
  textColor = "text-gray-900",
}) => {
  return (
    <span
      className={`p-2 w-full cursor-pointer rounded-md ${textColor} text-sm leading-4 hover:bg-indigo-200 hover:text-indigo-600 transition-all duration-200 ease-in`}
    >
      {label}
    </span>
  );
};

export default LiItem;
