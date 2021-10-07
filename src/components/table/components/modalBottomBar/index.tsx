import { FC } from "react";
import Button from "../button";

import { StackX } from "pz-react-component";

interface ModalBottomBarProps {}
const ModalBottomBar: FC<ModalBottomBarProps> = ({}) => {
  return (
    <div
      className="p-3 w-full bg-white flex justify-end rounded-b-2xl "
      style={{ width: "455px" }}
    >
      <StackX gap={2}>
        <Button label="Cancel" variant="medium" />
        <Button label="Apply" variant="medium" />
      </StackX>
    </div>
  );
};

export default ModalBottomBar;
