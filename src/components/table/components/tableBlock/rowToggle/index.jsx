import Toggle from "../../toggle";

const RowToggle = () => {
  return (
    <div className="flex items-center px-2 py-4 w-14 ">
      <Toggle track="toggle-row" showLabel={false} />
    </div>
  );
};

export default RowToggle;
