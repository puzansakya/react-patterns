import { ReactNode, useEffect, useRef, useState } from "react";
import { Count } from "./components/Count";
import { Decrement } from "./components/Decrement";
import { Increment } from "./components/Increment";
import { Label } from "./components/Label";
import { CounterProvider } from "./useCounterContext";

interface CounterProps {
  children: ReactNode;
  onChange: Function;
  initialValue?: number;
}
const Counter = ({ children, onChange, initialValue = 0 }: CounterProps) => {
  const [count, setCount] = useState<number>(initialValue);
  const firstMount = useRef(true);

  useEffect(() => {
    if (!firstMount.current) {
      onChange && onChange(count);
    }
    firstMount.current = false;
  }, [count, onChange]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(Math.max(0, count - 1));
  };

  return (
    <CounterProvider value={{ count, handleIncrement, handleDecrement }}>
      <div className="counter">{children}</div>
    </CounterProvider>
  );
};
Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export { Counter };
