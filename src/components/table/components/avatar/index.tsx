import { FC } from "react";

interface CompanyAvatarProps {
  label?: string;
}
const CompanyAvatar: FC<CompanyAvatarProps> = ({ label = "CR" }) => {
  let bgs = ["bg-red-200", "bg-blue-200", "bg-yellow-200", "bg-green-200"];

  const getRandomBg = () => {
    return bgs[Math.floor(Math.random() * 4)];
  };
  return (
    <span
      className={`flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg ring-2  font-bold text-lg text-gray-900 ${getRandomBg()}`}
    >
      <span>{label}</span>
    </span>
  );
};
export default CompanyAvatar;
