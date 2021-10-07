import Icon from "../icon";
import { Box } from "pz-react-component";
import Button from "../button";
import Chip from "../chip";

const HorizontalFilter = () => {
  return (
    <Box boxClass="space-x-1 flex items-center ">
      <Icon name="filter" />
      <Chip
        label="Value"
        iconAfter={true}
        icon={<Icon width="20" name="cross" />}
      />
      <Chip
        label="Value"
        iconAfter={true}
        icon={<Icon width="20" name="cross" />}
      />
      <Button
        label="Filter"
        variant="small"
        iconBefore={<Icon name="plus" />}
      />
    </Box>
  );
};

export default HorizontalFilter;
