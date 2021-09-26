import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Table from "../../components/table";
import Modal from "../../components/modal";
import { FProvider } from "../../components/formProvider";
import PersonForm from "../../forms/personForm";
import { HeroIcon } from "../../components/heroicon";
import Avatar from "../../components/avatar";
import { MainWrapper } from "../../components/mainWrapper.index";

// STORES
import * as fromPersonActions from "../../store/actions";
import * as fromPersonSelectors from "./../../store/selectors";

const TableSection = () => {
  const dispatch = useDispatch();
  const persons = useSelector(fromPersonSelectors.getPersons);

  useEffect(() => {
    dispatch(fromPersonActions.loadPersons());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);
  const [defaultValues, setDefaultValues] = useState<any>();

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

  const closeModal = () => {
    setShowModal(false);
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

  const StatusSign = ({ bg = "bg-blue-500" }) => {
    return <div className={`w-4 h-4 rounded-full ${bg}`}></div>;
  };

  const colData = [
    {
      Header: "Employee",
      accessor: "employee",
      Cell: (tableInfo: any) => (
        <div className="flex items-center">
          <Avatar
            name={`${tableInfo.data[tableInfo.row.index].employee}`}
            imgsrc={`${tableInfo.data[tableInfo.row.index].image}`}
          />

          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {`${tableInfo.data[tableInfo.row.index].employee}`}
            </div>
            <div className="text-sm text-gray-500">{`${
              tableInfo.data[tableInfo.row.index].email
            }`}</div>
          </div>
        </div>
      ),
    },
    {
      Header: "Registered",
      accessor: "registeredDay",
      Cell: (tableInfo: any) => (
        <>
          <div className="text-sm font-medium text-gray-900">
            {tableInfo.data[tableInfo.row.index].registeredDate}
          </div>
          <div className="text-sm text-gray-500 text-gray-900">
            {tableInfo.data[tableInfo.row.index].registeredDay}
          </div>
        </>
      ),
    },
    {
      Header: "Ranking",
      accessor: "ranking",
      Cell: (tableInfo: any) => (
        <div className="flex items-center">
          <div className="text-sm text-gray-900">
            {tableInfo.data[tableInfo.row.index].ranking}
          </div>
          <div className="flex">
            <HeroIcon name="star" />
            <HeroIcon name="star" />
            <HeroIcon name="star" />
            <HeroIcon name="star" />
          </div>
        </div>
      ),
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: (tableInfo: any) => (
        <div className="flex items-center space-x-4 text-gray-900">
          <StatusSign bg={tableInfo.data[tableInfo.row.index].statusColor} />
          <p
            className={`${
              tableInfo.data[tableInfo.row.index].statusTextColor
            } font-semibold`}
          >
            {tableInfo.data[tableInfo.row.index].status}
          </p>
        </div>
      ),
    },
    {
      Header: "Transaction",
      accessor: "transaction",
      Cell: (tableInfo: any) => (
        <div className="flex items-center space-x-4 uppercase text-gray-900">
          <p>{tableInfo.data[tableInfo.row.index].transaction}</p>
        </div>
      ),
    },
    {
      Header: "Division",
      accessor: "division",
    },
    {
      Header: "Location",
      accessor: "location",
    },
    {
      Header: "Progress",
      accessor: "progress",
    },
    {
      Header: "Score",
      accessor: "score",
    },
    {
      id: "edit",
      accessor: "[row identifier to be passed to button]",
      Cell: (tableInfo: any) => (
        <button
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => {
            handlePersonEdit(tableInfo.data[tableInfo.row.index]);
          }}
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <MainWrapper>
      <div className="flex flex-col space-y-4">
        <div className="w-full flex justify-end">
          <button
            className="custom-increment-btn"
            onClick={() => setShowModal(true)}
          >
            Open modal
          </button>
        </div>
        <Table colData={colData} tableData={persons} />
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
    </MainWrapper>
  );
};

export default TableSection;
