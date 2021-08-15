import { useState } from "react";
import { Counter } from "./Counter";
import { useCounter } from "./useCounter";

function App() {
  const { count, handleIncrement, handleDecrement } = useCounter(0);
  const MAX_COUNT = 10;

  const handleClickIncrement = () => {
    //Put your custom logic
    if (count < MAX_COUNT) {
      handleIncrement();
    }
  };
  const handleClickDecrement = () => {
    handleDecrement();
  };

  return (
    <div className="h-screen flex items-center justify-center overscroll-y-auto bg-gray-800">
      <div className="space-y-2 flex flex-col">
        <Counter value={count}>
          <Counter.Decrement
            disabled={count === 0}
            onClick={handleClickDecrement}
          />
          <Counter.Label>Counter</Counter.Label>
          <Counter.Count max={MAX_COUNT} />
          <Counter.Increment
            onClick={handleClickIncrement}
            disabled={count === MAX_COUNT}
          />
        </Counter>
        <button
          className="custom-increment-btn"
          onClick={handleClickIncrement}
          disabled={count === MAX_COUNT}
        >
          Custom increment btn 1
        </button>
      </div>
    </div>
  );
}

export default App;
