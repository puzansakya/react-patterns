import { FC } from "react";
import { StackX, StackY, Box } from "pz-react-component";
import Icon from "../icon";
import CircleButton from "../circlebutton";
import CardBody from "../cardBody";
import Button from "../button";
import Chip from "../chip";
import ModalBottomBar from "../modalBottomBar";
interface ModalFilterProps {}
const ModalFilter: FC<ModalFilterProps> = ({}) => {
  return (
    <CardBody>
      <Box boxClass="px-3">
        <StackY gap={2}>
          <StackX gap={1}>
            <Button
              label="ASC"
              variant="small"
              iconAfter={<Icon name="arrowUp" />}
            />
            <Button
              label="DSC"
              variant="small"
              iconAfter={<Icon name="arrowDown" />}
            />
          </StackX>
          <Box boxClass="space-x-2 flex items-center">
            <p className="font-medium text-sm leading-5 text-gray-900">Spend</p>
            <Chip label="exactly" variant="variant2" />
            <Chip label="more than" variant="variant2" />
            <Chip label="less than" variant="variant2" />
            <Chip label="$ 100" variant="variant2" />
          </Box>
        </StackY>
      </Box>

      <ModalBottomBar />
    </CardBody>
  );
};

export default ModalFilter;
