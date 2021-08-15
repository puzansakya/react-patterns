import { Counter } from "./Counter";

function App() {
  const handleChangeCounter = (count: number) => {
    console.log("count", count);
  };

  return (
    <div className="h-screen flex items-center justify-center overscroll-y-auto bg-gray-800">
      <Counter onChange={handleChangeCounter}>
        <Counter.Decrement />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count max={10} />
        <Counter.Increment />
      </Counter>
    </div>
  );
}

export default App;
