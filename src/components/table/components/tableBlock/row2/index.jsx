import Icon from "../../icon";
import Toggle from "../../toggle";
import Cell from "../cell";

const Row2 = () => {
  return (
    <div className="flex items-center border-b border-gray-200">
      <Cell width="w-20">
        <Icon name="pathDrillDown" />
      </Cell>
      <Cell width="w-24">
        <p>12</p>
      </Cell>
      <Cell width="w-24">
        <p>$1,049.14</p>
      </Cell>
      <Cell width="w-24">
        <p>$110.20</p>
      </Cell>
    </div>
  );
};

export default Row2;
