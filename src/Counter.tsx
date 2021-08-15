import { ReactNode, useEffect, useRef, useState } from "react";
import { Count } from "./components/Count";
import { Decrement } from "./components/Decrement";
import { Increment } from "./components/Increment";
import { Label } from "./components/Label";
import { CounterProvider } from "./useCounterContext";

interface CounterProps {
  children: ReactNode;
  onChange?: Function;
  value?: number | null;
}
const Counter = ({ children, value: count, onChange }: CounterProps) => {
  const firstMount = useRef(true);

  useEffect(() => {
    if (!firstMount.current) {
      onChange && onChange(count);
    }
    firstMount.current = false;
  }, [count, onChange]);

  return (
    <CounterProvider value={{ count }}>
      <div className="counter">{children}</div>
    </CounterProvider>
  );
};
Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export { Counter };
