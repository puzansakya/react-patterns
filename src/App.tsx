import { useState } from "react";

// HOOKS
import { useCounter } from "./useCounter";

// COMPONENTS
import PersonForm from "./forms/personForm";
import TimePicker from "./components/timepicker";
import TabSection from "./section/tab";
import ModalSection from "./section/modal";
import PopperSection from "./section/popper";
import TimePickerSection from "./section/timePicker";
import CounterSection from "./section/counter";
import TableSection from "./section/table";
import DNDSection from "./section/dnd";

function App() {
  return (
    <>
      {/* <TimePickerSection /> */}

      {/* <CounterSection /> */}

      {/* <ModalSection /> */}

      {/* <PopperSection /> */}

      {/* <TableSection /> */}

      {/* <TabSection /> */}

      <DNDSection />
    </>
  );
}

export default App;
