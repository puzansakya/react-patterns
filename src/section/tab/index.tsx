import { MainWrapper } from "../../components/mainWrapper.index";
import { Tabs } from "../../components/tabs";

const TabSection = () => (
  <MainWrapper>
    <Tabs>
      <Tabs.List>
        <Tabs.ListItem>Monthly Expenses</Tabs.ListItem>
        <Tabs.ListItem>Monthly Income</Tabs.ListItem>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>
          <p>Monthly Expenses</p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p>Monthly income</p>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  </MainWrapper>
);

export default TabSection;
