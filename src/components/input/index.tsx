import { Controller } from "react-hook-form";
import { isEmpty, regex, resolveObjectValueByPath } from "../../helpers";

// COMPONENTS
import TextInput from "./textInput";

function Input({
  inputName = "textinput",
  name,
  label,
  type,
  alignment = "vertical",
  className,
  wrapperClassName,
  labelClassName,
  width,
  disabled = false,
  control,
  ignoreControl = false,
  required = false,
  errors,
  ...rest
}: any) {
  const error = errors && resolveObjectValueByPath(errors, name)?.message;

  //   let inputclass = classnames({
  //     "genericForm-group": true,
  //     "input-group-disabled": disabled,
  //     error: !isEmpty(error) && error,
  //     horizontalGenericForm: alignment && alignment == "horizontal",
  //     [className]: className,
  //   });

  const getClassNames = () => {
    let classNameStr = "genericForm-group";

    if (disabled) {
      classNameStr += "input-group-disabled";
    }
    if (!isEmpty(error) && error) {
      classNameStr += "error";
    }
    if (alignment && alignment == "horizontal") {
      classNameStr += "horizontalGenericForm";
    }

    if (className) {
      classNameStr += className;
    }
    return classNameStr;
  };

  let InputComponent = getInputComponent(inputName);

  return (
    <div className={getClassNames()} style={{ width }}>
      {label && (
        <div
          className={`${
            wrapperClassName ? wrapperClassName : "genericForm-group__label"
          }`}
        >
          <label
            htmlFor={name}
            className={`${
              labelClassName ? labelClassName : "genericForm-group__label"
            }`}
          >
            {label}
            {required ? " *" : ""}
          </label>
        </div>
      )}

      {InputComponent && (
        <>
          {!control || ignoreControl ? (
            <InputComponent {...rest} />
          ) : (
            <Controller
              control={control}
              name={name}
              rules={{
                required: {
                  value: required,
                  message: "required",
                },
                pattern: {
                  value: type === "email" && regex.Email ? "" : required,
                  message: "invalid e-mail",
                },
              }}
              render={(controllerProps) => {
                const {
                  field: { onChange, value },
                } = controllerProps;

                return (
                  <InputComponent
                    {...rest}
                    value={value}
                    onChangeRHF={onChange}
                  />
                );
              }}
            />
          )}
        </>
      )}

      {error && <div className="genericForm-group__message">{error}</div>}
    </div>
  );
}

// Input.defaultProps = {
//   inputName: "textinput",
//   name: "",
//   label: "",
//   type: "",
//   alignment: "vertical",
//   disabled: false,
//   ignoreControl: false,
//   required: false,
// };

const getInputComponent = (inputName: string) => {
  let components: any = {
    textinput: TextInput,
  };

  return components[inputName];
};

export default Input;
