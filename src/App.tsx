import { useState } from "react";

// STORES
import { useDispatch } from "react-redux";
import * as fromPersonActions from "./store/actions";

// HOOKS
import { useCounter } from "./useCounter";

// COMPONENTS
import { MainWrapper } from "./components/mainWrapper.index";
import { FProvider } from "./components/formProvider";
import PersonForm from "./forms/personForm";
import { TableComponent } from "./components/table";
import Modal from "./components/modal";
import { ModalContent } from "./components/modalCotent";
import { Popper } from "./components/popper";
import TimePicker from "./components/timepicker";
import { Counter } from "./Counter";
import { Tabs } from "./components/tabs";

function App() {
  const MAX_COUNT = 10;

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [defaultValues, setDefaultValues] = useState<any>();

  const { count, getCounterProps, getIncrementProps, getDecrementProps } =
    useCounter({
      initialCount: 0,
      max: MAX_COUNT,
    });

  const handleBtn1Clicked = () => {
    console.log("btn 1 clicked");
  };

  const closeModal = () => {
    setShowModal(false);
    setDefaultValues(undefined);
  };

  const getStatusColor = (status: string) => {
    if (status === "project") {
      return {
        statusColor: "bg-blue-500",
        statusTextColor: "text-blue-500",
      };
    }
    if (status === "available") {
      return {
        statusColor: "bg-green-500",
        statusTextColor: "text-green-500",
      };
    }
    if (status === "no") {
      return {
        statusColor: "bg-yellow-500",
        statusTextColor: "text-yellow-500",
      };
    }
  };

  const handlePersonEdit = (person: any) => {
    setDefaultValues(person);
    setShowModal(true);
  };

  const onSubmit = (values: any) => {
    console.log(values);
    let color = getStatusColor(values.status);

    if (values.id) {
      dispatch(
        fromPersonActions.editPerson(values, () => {
          setShowModal(false);
        })
      );
    } else {
      dispatch(
        fromPersonActions.addPerson({
          ...values,
          ...color,
          statusTextColor: "text-blue-500",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        })
      );
    }
  };

  return (
    <>
      {/* <div
        className="flex items-center justify-center bg-gray-800"
        style={{
          height: "2000px",
          width: "4000px",
        }}
      >
        <TimePicker value="20:25:pm" showSec={false} />
      </div> */}

      {/* <MainWrapper>
        <div className="space-y-2 flex flex-col">
          <Counter {...getCounterProps()}>
            <Counter.Decrement {...getDecrementProps()} />
            <Counter.Label>Counter</Counter.Label>
            <Counter.Count max={MAX_COUNT} />
            <Counter.Increment {...getIncrementProps()} />
          </Counter>
          <button
            className="custom-increment-btn"
            {...getIncrementProps({ onClick: handleBtn1Clicked })}
          >
            Custom increment btn 1
          </button>
          <button
            className="custom-increment-btn"
            {...getIncrementProps({ disabled: count > MAX_COUNT - 2 })}
          >
            Custom increment btn 2
          </button>
        </div>
      </MainWrapper> */}

      {/* <MainWrapper>
        <button
          className="custom-increment-btn"
          onClick={() => setShowModal(true)}
        >
          Open modal
        </button>
        <Modal show={showModal} close={() => closeModal()}>
          <Modal.Content>
            <ModalContent />
          </Modal.Content>
        </Modal>
      </MainWrapper> */}

      {/* <MainWrapper>
        <Popper />
      </MainWrapper> */}

      {/* <MainWrapper>
        <div className="flex flex-col space-y-4">
          <div className="w-full flex justify-end">
            <button
              className="custom-increment-btn"
              onClick={() => setShowModal(true)}
            >
              Open modal
            </button>
          </div>
          <TableComponent onPersonEdit={handlePersonEdit} />
        </div>

        <Modal show={showModal} close={() => closeModal()}>
          <FProvider defaultValues={defaultValues} onSubmit={onSubmit}>
            <Modal.Content>
              <PersonForm />
            </Modal.Content>
            <Modal.Footer>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  {defaultValues && defaultValues.id ? "Edit" : "Submit"}
                </button>

                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </Modal.Footer>
          </FProvider>
        </Modal>
      </MainWrapper> */}

      <MainWrapper>
        <Tabs>
          <Tabs.List>
            <Tabs.ListItem>Monthly Expenses</Tabs.ListItem>
            <Tabs.ListItem>Monthly Income</Tabs.ListItem>
          </Tabs.List>
          <Tabs.Panels>
            <Tabs.Panel>
              <p>Monthly Expenses</p>
            </Tabs.Panel>
            <Tabs.Panel>
              <p>Monthly income</p>
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </MainWrapper>
    </>
  );
}

export default App;
