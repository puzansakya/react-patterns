import Header from "../header";

const TableBlockHeader1 = () => {
  return (
    <div className="flex items-center border-b border-gray-200">
      <Header width="w-20" label="Header" />
      <Header width="w-56" label="Name" />
      <Header width="w-20" label="spend" />
      <Header width="w-20" label="Clicks" />
    </div>
  );
};

export default TableBlockHeader1;
