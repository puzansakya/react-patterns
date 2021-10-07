import Icon from "../../icon";
import Header from "../header";

const TableBlockHeader2 = () => {
  return (
    <div className="flex items-center border-b border-gray-200">
      <Header width="w-20">
        <Icon name="eye" />
      </Header>
      <Header width="w-24" label="Metric-1" />
      <Header width="w-24" label="Metric-3" />
      <Header width="w-24" label="Metric-4" />
      {/* <Header width="w-60" label="Estimated Conversion" /> */}
    </div>
  );
};

export default TableBlockHeader2;
