import { Counter } from "./Counter";
import useCounter from "./useCounter";

function App() {
  const MAX_COUNT = 10;

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "decrement":
        return {
          count: Math.max(0, state.count - 2), //The decrement delta was changed for 2 (Default is 1)
        };
      default:
        return useCounter.reducer(state, action);
    }
  };

  const { count, handleDecrement, handleIncrement } = useCounter(
    { initialCount: 0, max: 10 },
    reducer
  );

  return (
    <div className="h-screen flex items-center justify-center overscroll-y-auto bg-gray-800">
      <div className="space-y-2 flex flex-col">
        <Counter value={count}>
          <Counter.Decrement onClick={handleDecrement} />
          <Counter.Label>Counter</Counter.Label>
          <Counter.Count max={MAX_COUNT} />
          <Counter.Increment onClick={handleIncrement} />
        </Counter>

        <button
          className="custom-increment-btn"
          onClick={handleIncrement}
          disabled={count === MAX_COUNT}
        >
          Custom increment btn 1
        </button>
      </div>
    </div>
  );
}

export default App;
