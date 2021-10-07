import { MainWrapper } from "../../components/mainWrapper.index";
import Popper from "../../components/popper";

import { Menu } from "pz-react-component";
const PopperSection = () => {
  const onPopperMenuClick = (isOpen: any, close: any, toggle: any) => {
    console.log(isOpen);
    toggle();
  };
  return (
    <Popper
      overlayClose={true}
      placement="bottom-end"
      trigger={
        <button className="px-3 py-1 bg-green-500 rounded-md hover:bg-green-400 text-white">
          Open popper
        </button>
      }
      content={(isOpen: any, close: any, toggle: any) => (
        <Menu width={"w-64"}>
          <Menu.MenuItem
            onClick={() => onPopperMenuClick(isOpen, close, toggle)}
            active
            label="Enim ut tellus"
          />
          <Menu.MenuItem
            onClick={() => onPopperMenuClick(isOpen, close, toggle)}
            label="Ultrices gravida dictum"
          />
          <Menu.MenuItem
            onClick={() => onPopperMenuClick(isOpen, close, toggle)}
            label="Eu sem integer vitae"
          />
          <Menu.MenuItem
            onClick={() => onPopperMenuClick(isOpen, close, toggle)}
            label="Excepteur sint"
          />
          <Menu.MenuItem
            onClick={() => onPopperMenuClick(isOpen, close, toggle)}
            label="Vitae justo eget"
          />
        </Menu>
      )}
    ></Popper>
  );
};

export default PopperSection;
