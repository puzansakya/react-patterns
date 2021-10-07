import { FC } from "react";
import Default from "./default";
import Variant2 from "./variant2";

interface ChipProps {
  label?: string;
  icon?: any;
  iconBefore?: boolean;
  iconAfter?: boolean;
  variant?: string;
}
const Chip: FC<ChipProps> = ({
  label = "CR",
  icon,
  iconBefore,
  iconAfter,
  ...props
}) => {
  const getVariant = () => {
    switch (props.variant) {
      case "variant2":
        return (
          <Variant2
            label={label}
            icon={icon}
            iconBefore={iconBefore}
            iconAfter={iconAfter}
          />
        );
      default:
        return (
          <Default
            label={label}
            icon={icon}
            iconBefore={iconBefore}
            iconAfter={iconAfter}
          />
        );
    }
  };
  return getVariant();
};
export default Chip;
