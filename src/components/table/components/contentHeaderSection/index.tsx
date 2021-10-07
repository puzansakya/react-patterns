import { FC } from "react";
import { StackX, Box } from "pz-react-component";
import Icon from "../icon";
import CircleButton from "../circlebutton";
interface ContentHeaderSectionProps {}
const ContentHeaderSection: FC<ContentHeaderSectionProps> = ({}) => {
  return (
    <>
      <Box boxClass="flex justify-between w-full">
        <Box boxClass="flex items-center space-x-2">
          <p className="text-lg leading-4 font-medium text-gray-900 ">
            Cross-channel analysis
          </p>
          <StackX gap={2}>
            <CircleButton icon={<Icon name="link" />} />
            <CircleButton icon={<Icon name="arrowUpRight" />} />
          </StackX>
        </Box>
        <StackX gap={2}>
          <CircleButton icon={<Icon name="refreshCw" />} />
          <CircleButton icon={<Icon name="arrowDown" />} />
          <CircleButton icon={<Icon name="moreHorizontal" />} />
        </StackX>
      </Box>
    </>
  );
};

export default ContentHeaderSection;
