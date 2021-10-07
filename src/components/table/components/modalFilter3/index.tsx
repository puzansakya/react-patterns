import { FC } from "react";
import { StackX, StackY, Box, Popper, Menu } from "pz-react-component";
import Icon from "../icon";
import CircleButton from "../circlebutton";
import CardBody from "../cardBody";
import Button from "../button";
import Chip from "../chip";
import ModalBottomBar from "../modalBottomBar";
import LiMenu from "../limenu";
interface ModalFilter3Props {}
const ModalFilter3: FC<ModalFilter3Props> = ({}) => {
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
              iconAfter={<Icon name="chevronDown" />}
            />
          </StackX>
          <Box boxClass="space-x-2 flex items-center">
            <p className="font-medium text-sm leading-5 text-gray-900">Spend</p>
            <Chip label="exactly" variant="variant2" />
            <Popper
              trigger={
                <span
                  className={`flex-shrink-0 px-3 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium  bg-gray-200 text-gray-700 space-x-1 outline-none hover:bg-indigo-200 hover:text-indigo-700 transition-all duration-200 ease-in cursor-pointer`}
                >
                  <p>Open popper</p> <Icon name="chevronDown" />
                </span>
                // <Chip
                //   label="more than"
                //   variant="variant2"
                //   iconAfter={true}
                //   icon={<Icon name="chevronDown" />}
                // />
              }
              content={
                <Menu width={"w-64"}>
                  <Menu.MenuItem active label="Enim ut tellus" />
                  <Menu.MenuItem label="Ultrices gravida dictum" />
                  <Menu.MenuItem label="Eu sem integer vitae" />
                  <Menu.MenuItem label="Excepteur sint" />
                  <Menu.MenuItem label="Vitae justo eget" />
                </Menu>
              }
            ></Popper>
            <Chip
              label="more than"
              variant="variant2"
              iconAfter={true}
              icon={<Icon name="chevronDown" />}
            />
          </Box>
        </StackY>
      </Box>

      <ModalBottomBar />
    </CardBody>
  );
};

export default ModalFilter3;
