import { FC } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  error?: boolean;
  iconBefore?: any;
  iconAfter?: any;
  errorMessage?: any;
  size?: string;
  inputClass?: string;
}
const Input: FC<InputProps> = ({
  label,
  placeholder,
  name,
  id,
  error,
  iconBefore,
  iconAfter,
  errorMessage,
  size,
  inputClass,
}) => {
  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "h-8";
      case "medium":
        return "h-12";
      case "condensed":
        return "h-12 w-12";
      case "smallCondensed":
        return "h-8 w-12";
      default:
        return "h-12";
    }
  };
  return (
    <div className={inputClass}>
      <label
        htmlFor={id}
        className="block font-medium text-xs leading-4 text-gray-500 mb-2"
      >
        {label}
      </label>
      <div
        className={`inline-flex items-center rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 px-3 bg-gray-100 ${getSizeClass()} ${inputClass}${
          error
            ? "border-red-500 bg-red-50"
            : "  hover:border-indigo-500 border-gray-300"
        }`}
      >
        {iconBefore && (
          <div className="flex items-center pointer-events-none mr-1">
            <span className="text-gray-500 sm:text-sm">{iconBefore}</span>
          </div>
        )}
        <input
          type="text"
          name={name}
          id={id}
          className={`block w-full  sm:text-sm outline-none rounded-lg text-gray-900 placeholder-gray-800 bg-transparent  `}
          placeholder={placeholder}
        />
        {iconAfter && (
          <div className="flex items-center pointer-events-none ml-1">
            <span className="text-gray-500 sm:text-sm">{iconAfter}</span>
          </div>
        )}
      </div>
      {error && errorMessage && (
        <label
          htmlFor={id}
          className="block font-medium text-xs leading-4 text-red-500 mt-1"
        >
          {errorMessage}
        </label>
      )}
    </div>
  );
};

export default Input;
