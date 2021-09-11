import { MainWrapper } from "../../components/mainWrapper.index";
import { Counter } from "../../Counter";
import { useCounter } from "../../useCounter";

const CounterSection = () => {
  const MAX_COUNT = 10;

  const { count, getCounterProps, getIncrementProps, getDecrementProps } =
    useCounter({
      initialCount: 0,
      max: MAX_COUNT,
    });

  const handleBtn1Clicked = () => {
    console.log("btn 1 clicked");
  };
  return (
    <MainWrapper>
      <div className="space-y-2 flex flex-col">
        <Counter {...getCounterProps()}>
          <Counter.Decrement {...getDecrementProps()} />
          <Counter.Label>Counter</Counter.Label>
          <Counter.Count max={MAX_COUNT} />
          <Counter.Increment {...getIncrementProps()} />
        </Counter>
        <button
          className="custom-increment-btn"
          {...getIncrementProps({ onClick: handleBtn1Clicked })}
        >
          Custom increment btn 1
        </button>
        <button
          className="custom-increment-btn"
          {...getIncrementProps({ disabled: count > MAX_COUNT - 2 })}
        >
          Custom increment btn 2
        </button>
      </div>
    </MainWrapper>
  );
};

export default CounterSection;
