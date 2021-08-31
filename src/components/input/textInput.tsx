import React from "react";

const TextInput = (props: any) => {
  const {
    name,
    value,
    type,
    autoFocus,
    placeholder,
    inputClassName,
    disabled,

    onChange,
    onChangeRHF,
  } = props;

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    onChangeRHF && onChangeRHF(value);
    onChange && onChange(name, value);
  };

  return (
    <div className="flex">
      <input
        className={`${
          inputClassName
            ? inputClassName
            : "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        }`}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value && value}
        autoFocus={autoFocus}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
};

TextInput.defaultProps = {
  notFormGroup: false,
  name: "",
  value: "",
  type: "text",
  autoFocus: false,
  placeholder: "",
};

export default React.memo(TextInput);
