import Icon from "../../icon";
import Toggle from "../../toggle";
import Cell from "../cell";

const Row = () => {
  return (
    <div className="flex items-center border-b border-gray-200">
      <Cell width="w-20">
        <Toggle track="asdasd" showLabel={false} />
      </Cell>
      <Cell width="w-56">
        <div className="flex items-center space-x-2">
          <Icon name="campaignBrand" /> <p>DT-Brand-campaign</p>
        </div>
      </Cell>
      <Cell width="w-20">
        <p>$234.67</p>
      </Cell>
      <Cell width="w-20">
        <p>12345</p>
      </Cell>
    </div>
  );
};

export default Row;
