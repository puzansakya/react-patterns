import Icon from "../icon";
import { Box } from "pz-react-component";
import Button from "../button";
import Chip from "../chip";
import Input from "../input";
import CircleButton from "../circlebutton";

const DyanmicInputFilter = () => {
  return (
    <Box boxClass="flex items-start space-x-2 ">
      <Box boxClass="mt-3">
        <Icon name="filter" />
      </Box>
      <Box boxClass="flex flex-col space-y-2">
        <Box boxClass="flex items-center space-x-2">
          <Input
            iconAfter={<Icon name="chevronDown" />}
            placeholder="ID"
            inputClass="w-20"
            size="smallCondensed"
          />
          <Input
            iconAfter={<Icon name="chevronDown" />}
            placeholder="contains"
            size="smallCondensed"
            inputClass="w-28"
          />
          <Input
            placeholder="enter value"
            size="smallCondensed"
            inputClass="w-24"
          />
          <Box boxClass="mt-2">
            <CircleButton icon={<Icon name="trash" />} />
          </Box>
        </Box>
        <Box boxClass="flex items-center space-x-2">
          <Input
            iconAfter={<Icon name="chevronDown" />}
            placeholder="ID"
            inputClass="w-20"
            size="smallCondensed"
          />
          <Input
            iconAfter={<Icon name="chevronDown" />}
            placeholder="contains"
            size="smallCondensed"
            inputClass="w-28"
          />
          <Input
            placeholder="enter value"
            size="smallCondensed"
            inputClass="w-24"
          />
          <Box boxClass="mt-2">
            <CircleButton icon={<Icon name="trash" />} />
          </Box>
        </Box>
        <Box boxClass="flex">
          <Button
            label="Filter"
            variant="small"
            iconBefore={<Icon name="plus" />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DyanmicInputFilter;
