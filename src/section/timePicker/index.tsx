import TimePicker from "../../components/timepicker";

const TimePickerSection = () => {
  return (
    <div
      className="flex items-center justify-center bg-gray-800"
      style={{
        height: "2000px",
        width: "4000px",
      }}
    >
      <TimePicker value="20:25:pm" showSec={false} />
    </div>
  );
};

export default TimePickerSection;
