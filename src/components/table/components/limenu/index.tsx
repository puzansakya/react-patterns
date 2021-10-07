import { FC } from "react";
import LiItem from "../li";
import { Box, StackY } from "pz-react-component";

interface LiMenuProps {}
const LiMenu: FC<LiMenuProps> = ({}) => {
  return (
    <Box boxClass="bg-white w-44 p-1 rounded-lg">
      <StackY gap={1}>
        <LiItem label="equals" />
        <LiItem label="does not equals" />
        <LiItem label="is more than" />
        <LiItem label="is more than or equals" />
        <LiItem label="is less than" />
        <LiItem label="is less than or equals" />
        <LiItem label="is in between" />
      </StackY>
    </Box>
  );
};

export default LiMenu;
