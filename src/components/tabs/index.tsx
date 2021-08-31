import React from "react";
import "./index.css";

const Context = React.createContext<any>(null);

interface IAction {
  type: "SWITCH";
  payload: number;
}

const initial = { active: 1 };

const reducers = (state: typeof initial, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case "SWITCH":
      return { ...state, active: payload };
    default:
      return state;
  }
};

const useTabs = () => React.useContext(Context);

/**
 * SOFTWARE DESING DOCUMENT
 * - USUAGE
  <Tabs>
    <Tabs.List className="flex justify-center border-b border-gray-200 p-1 gap-4">
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
 * 
 */
export const Tabs = ({ defaultTab = null, children = [] }: any) => {
  const [state, dispatch] = React.useReducer(reducers, initial);
  React.useEffect(() => {
    if (defaultTab && defaultTab > 0 && defaultTab <= children.length) {
      dispatch({ type: "SWITCH", payload: defaultTab });
    }
  }, [defaultTab]);

  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </div>
  );
};

const List = ({ children, className, ...props }: any) => {
  console.log(className);
  return (
    <ul className={`${className ? className : "tab__list"}`} {...props}>
      {children.map((node: any, index: any) => ({
        ...node,
        props: { ...node.props, index: index + 1 },
      }))}
    </ul>
  );
};
const ListItem = ({ children, ...props }: any) => {
  const { state, dispatch }: any = useTabs();
  return (
    <li
      className={`${
        state.active === props.index ? "list__item" : ""
      } list__item__default`}
      onClick={() => dispatch({ type: "SWITCH", payload: props.index })}
    >
      {children}
    </li>
  );
};
const Panels = ({ children }: any) => {
  return (
    <div className="panels">
      {children.map((node: any, index: any) => ({
        ...node,
        props: { ...node.props, index: index + 1 },
      }))}
    </div>
  );
};
const Panel = ({ children, ...props }: any) => {
  const { state } = useTabs();
  return (
    <section
      className={`${
        state.active === props.index ? "panel-show" : "panel-hide"
      }`}
    >
      {children}
    </section>
  );
};

Tabs.List = List;
Tabs.ListItem = ListItem;
Tabs.Panels = Panels;
Tabs.Panel = Panel;
