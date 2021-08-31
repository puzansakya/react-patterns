import { ConnectForm } from "../components/formProvider";
import Input from "../components/input";

const PersonForm = () => {
  return (
    <div className="bg-white p-4">
      <ConnectForm>
        {({ control, watch, register, setValue, ...props }: any) => (
          <div className="space-y-3">
            <Input
              {...props}
              width="100%"
              control={control}
              name="employee"
              label="Name"
              className=""
              required={true}
            />
            <Input
              type="email"
              width="100%"
              control={control}
              name="email"
              label="Email Address"
              className=""
              required={true}
            />
            <Input
              width="100%"
              control={control}
              name="registeredDate"
              label="Registered Date"
              className=""
              required={true}
            />
            <Input
              width="100%"
              control={control}
              name="registeredDay"
              label="Registered Day"
              className=""
              required={true}
            />
            <Input
              width="100%"
              control={control}
              name="ranking"
              label="Ranking"
              className=""
              required={true}
            />
            <Input
              width="100%"
              control={control}
              name="status"
              label="Status"
              className=""
              required={true}
            />
            <Input
              width="100%"
              control={control}
              name="transaction"
              label="Transaction"
              className=""
              required={true}
            />
            <Input
              width="100%"
              control={control}
              name="division"
              label="Division"
              className=""
              required={true}
            />
            <Input
              width="100%"
              control={control}
              name="location"
              label="Location"
              className=""
              required={true}
            />
            <Input
              width="100%"
              control={control}
              name="progress"
              label="Progress"
              className=""
              required={true}
            />
            <Input
              width="100%"
              control={control}
              name="score"
              label="Score"
              className=""
              required={true}
            />
          </div>
        )}
      </ConnectForm>
    </div>
  );
};

export default PersonForm;
