import { forwardRef, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRowSelect, useSortBy, useTable } from "react-table";
import Avatar from "../avatar";
import { HeroIcon } from "../heroicon";
import * as fromPersonSelectors from "./../../store/selectors";
import * as fromPersonActions from "./../../store/actions";

const StatusSign = ({ bg = "bg-blue-500" }) => {
  return <div className={`w-4 h-4 rounded-full ${bg}`}></div>;
};

export const TableComponent = ({ onPersonEdit }: any) => {
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
          <div className="text-sm text-gray-500">
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
        <div className="flex items-center space-x-4">
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
        <div className="flex items-center space-x-4 uppercase">
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
            onPersonEdit(tableInfo.data[tableInfo.row.index]);
          }}
        >
          Edit
        </button>
      ),
    },
  ];

  return <Table colData={colData} />;
};

const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }: any, ref) => {
    const defaultRef = useRef();
    const resolvedRef: any = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

const Table = ({ colData }: any) => {
  const dispatch = useDispatch();
  const persons = useSelector(fromPersonSelectors.getPersons);

  useEffect(() => {
    dispatch(fromPersonActions.loadPersons());
  }, [dispatch]);

  const data = useMemo(() => persons, [persons]);
  const columns = useMemo(() => colData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds },
  }: any = useTable<any>(
    {
      columns,
      data,
    },
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }: any) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }: any) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  return (
    <div className="flex flex-col space-y-2">
      <div className="bg-white rounded-md overflow-hidden">
        <div className="max-w-screen-xl overflow-x-auto">
          <table
            {...getTableProps()}
            className="min-w-full divide-y divide-gray-200"
          >
            <thead className="bg-gray-50">
              {headerGroups.map((headerGroup: any) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div className="flex space-x-2 items-center select-none ">
                        <span>{column.render("Header")}</span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <HeroIcon name="chevronDown" />
                          ) : (
                            <HeroIcon name="chevronUp" />
                          )
                        ) : (
                          ""
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="bg-white divide-y divide-gray-200"
            >
              {rows.map((row: any) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className={`${
                      row.original.isopened ? "bg-yellow-100" : "bg-white"
                    }`}
                  >
                    {row.cells.map((cell: any) => {
                      return (
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-white">
        Selected Rows: {Object.keys(selectedRowIds).length}
      </p>
    </div>
  );
};

export default Table;
