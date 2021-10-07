import { FC } from "react";

interface TableCountTopbarProps {
  current?: number;
  total?: number;
}
const TableCountTopbar: FC<TableCountTopbarProps> = ({ current, total }) => {
  return (
    <p className="text-sm leading-normal text-gray-700 ">
      Showing <span className="font-medium text-gray-900">198</span> from{" "}
      <span className="font-medium text-gray-900"> {total} </span>
      results
    </p>
  );
};

export default TableCountTopbar;
