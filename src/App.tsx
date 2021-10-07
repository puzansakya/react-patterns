import { useEffect, useState } from "react";

// HOOKS
import { useCounter } from "./useCounter";

// COMPONENTS
import PersonForm from "./forms/personForm";
import TimePicker from "./components/timepicker";
import TabSection from "./section/tab";
import ModalSection from "./section/modal";
import PopperSection from "./section/popper";
import TimePickerSection from "./section/timePicker";
import CheckboxGroupSection from "./section/CheckboxGroupSection";
import TableSection from "./section/TableSection";
import CounterSection from "./section/counter";
// import TableSection from "./section/table";
import DNDSection from "./section/dnd";

import {
  Drawer,
  Badge,
  Box,
  Menu,
  MainWrapper,
  useDisclosure,
  StackY,
  StackX,
  Toastify,
} from "pz-react-component";
import Toggle from "./components/table/components/toggle";
import Tooltip from "./components/table/components/tooltip";
import CompanyAvatar from "./components/table/components/avatar";
import Chip from "./components/table/components/chip";
import Icon from "./components/table/components/icon";
import LiItem from "./components/table/components/li";
import LiMenu from "./components/table/components/limenu";
import Button from "./components/table/components/button";
import CircleButton from "./components/table/components/circlebutton";
import TableCountTopbar from "./components/table/components/tableCountTopbar";
import ContentHeaderSection from "./components/table/components/contentHeaderSection";
import ModalBottomBar from "./components/table/components/modalBottomBar";
import ModalFilter from "./components/table/components/modalFilter";
import ModalFilter2 from "./components/table/components/modalFilter2";
import ModalFilter3 from "./components/table/components/modalFilter3";
import Input from "./components/table/components/input";
import { error } from "console";
import HorizontalFilter from "./components/table/components/horizontalFilter";
import DyanmicInputFilter from "./components/table/components/horizontalFilter/dynamicInputFilter";
import Popper from "./components/popper";
import Header from "./components/table/components/tableBlock/header";
import Row from "./components/table/components/tableBlock/row";
import RowNum from "./components/table/components/tableBlock/rowNum";
import RowBarChart from "./components/table/components/tableBlock/rowBarChart";
import RowToggle from "./components/table/components/tableBlock/rowToggle";
import RowIcon from "./components/table/components/tableBlock/rowIcon";
import TableBlockHeader1 from "./components/table/components/tableBlock/blockHeader1";
import TableBlockHeader2 from "./components/table/components/tableBlock/blockHeader2";
import Row2 from "./components/table/components/tableBlock/row2";

function App() {
  const { isOpen, open, close } = useDisclosure();
  const [show, setshow] = useState(false);
  useEffect(() => {
    Toastify.toast.show("You have successfully seen the toast notification.", {
      timeout: 3000,
    });
  }, []);
  return (
    <MainWrapper>
      <Toastify.ToastContainer />

      <Box boxClass="container mx-auto p-4 space-y-12">
        <StackY gap={8}>
          <Badge />

          <Box>
            <button
              className="px-3 py-1 bg-green-500 rounded-md hover:bg-green-400 text-white"
              onClick={() => {
                open();
              }}
            >
              Open Drawer
            </button>
          </Box>
          <Box>
            Webpack 5 boilerplate with React 17, Tailwind 2, using babel, sass,
            with a hot dev server and an optimized production build.
          </Box>
          <CheckboxGroupSection />

          <PopperSection />

          <button
            className="px-3 py-1 bg-red-500 rounded-md hover:bg-red-400 text-white"
            onClick={() => {
              Toastify.toast.show(
                <>
                  <svg
                    className="w-5 h-5 text-blue-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="ml-3 text-sm text-blue-700">
                    <span className="font-medium">Important Note!</span> Change
                    a few things up and try submitting again.
                  </p>
                </>,
                {
                  timeout: 1000,
                  variant: "danger",
                }
              );
            }}
          >
            Show toast
          </button>

          <TableSection />
        </StackY>

        <Box>
          <Toggle showLabel={false} />
        </Box>

        <Box>
          <Tooltip />
        </Box>
        <Box>
          <CompanyAvatar />
        </Box>

        <StackX>
          <Chip
            label="Value"
            iconAfter={true}
            icon={<Icon width="20" name="cross" />}
          />
          <Chip
            label="Value"
            iconAfter={true}
            variant="variant2"
            icon={<Icon width="20" name="cross" />}
          />
          <Chip
            label="Value"
            iconAfter={true}
            variant="variant3"
            icon={<Icon width="20" name="cross" />}
          />
        </StackX>
        <Box boxClass="w-44">
          <LiItem label="does not equals " textColor="text-white" />
        </Box>

        <LiMenu />

        {/* buttons */}
        <Box boxClass="flex items-center space-x-4 bg-white p-3 w-max">
          <Button label="Basic S" variant="small" />
          <Button label="Basic M" variant="medium" />
          <Button label="Basic L" variant="large" />
        </Box>
        <Box boxClass="flex items-center space-x-4 bg-white p-3 w-max">
          <Button
            label="Basic S"
            variant="small"
            iconBefore={<Icon name="plus" />}
          />
          <Button
            label="Basic M"
            variant="medium"
            iconBefore={<Icon name="plus" />}
          />
          <Button
            label="Basic L"
            variant="large"
            iconBefore={<Icon name="plus" />}
          />
        </Box>
        <Box boxClass="flex items-center space-x-4 bg-white p-3 w-max">
          <Button
            label="Basic S"
            variant="small"
            iconAfter={<Icon name="chevronDown" />}
          />
          <Button
            label="Basic M"
            variant="medium"
            iconAfter={<Icon name="chevronDown" />}
          />
          <Button
            label="Basic L"
            variant="large"
            iconAfter={<Icon name="chevronDown" />}
          />
        </Box>
        <Box boxClass="flex items-center space-x-4 bg-white p-3 w-max">
          <Button
            label="Basic S"
            variant="small"
            iconBefore={<Icon name="plus" />}
            iconAfter={<Icon name="chevronDown" />}
          />
          <Button
            label="Basic M"
            variant="medium"
            iconBefore={<Icon name="plus" />}
            iconAfter={<Icon name="chevronDown" />}
          />
          <Button
            label="Basic L"
            variant="large"
            iconBefore={<Icon name="plus" />}
            iconAfter={<Icon name="chevronDown" />}
          />
        </Box>
        <Box boxClass="flex items-center space-x-4 bg-white p-3 w-max">
          <CircleButton icon={<Icon name="sortStyle1" />} />
          <CircleButton
            icon={<Icon name="pathRight" />}
            icon2={<Icon name="chevronDown" />}
            variant="double"
          />
          <CircleButton icon={<Icon name="sortStyle1" />} variant="square" />
        </Box>
        {/* end buttons */}

        <Box boxClass="flex items-center space-x-4 bg-white p-3 w-max">
          <TableCountTopbar current={10} total={100} />
        </Box>

        <Box boxClass="flex items-center space-x-4 bg-white p-3 w-full">
          <ContentHeaderSection />
        </Box>

        <ModalBottomBar />

        <ModalFilter />

        <ModalFilter2 />

        <ModalFilter3 />

        <Box boxClass="flex items-center space-x-4 bg-white p-3 w-full">
          <Input
            iconBefore={<Icon name="arrowDown" />}
            iconAfter={<Icon name="chevronDown" />}
            label="Text Field"
            placeholder="Medium"
          />
        </Box>

        <Box boxClass="flex items-center space-x-4 bg-white p-3 w-full">
          <HorizontalFilter />
        </Box>
        <Box boxClass="flex items-center space-x-4 bg-white p-3 w-full">
          <DyanmicInputFilter />
        </Box>
        <Box boxClass=" space-y-4 bg-white p-3 w-full text-gray-900">
          <p className="text-lg font-medium">Table block</p>
          <Header label="Header" />
          <Row />
          <RowNum />
          <RowBarChart />
          <RowToggle />
          <RowIcon />
        </Box>

        <Box boxClass="space-y-4 bg-white p-3 w-full text-gray-900">
          <p className="text-lg font-medium">Table Header Component</p>
          <TableBlockHeader1 />
        </Box>

        <Box boxClass="space-y-4 bg-white p-3 w-full text-gray-900">
          <p className="text-lg font-medium">Table Header Component</p>
          <TableBlockHeader2 />
        </Box>

        <Box boxClass="space-y-4 bg-white p-3 w-full text-gray-900">
          <p className="text-lg font-medium">Row</p>
          <Row />
        </Box>

        <Box boxClass="space-y-4 bg-white p-3 w-full text-gray-900">
          <p className="text-lg font-medium">Table</p>
          <div>
            <TableBlockHeader1 />
            <Row />
          </div>
          <div>
            <TableBlockHeader2 />
            <Row2 />
          </div>
        </Box>
      </Box>

      <Drawer open={isOpen} close={() => close()}>
        <div className="p-4">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.&quot;
        </div>
      </Drawer>
    </MainWrapper>
  );
}

export default App;
