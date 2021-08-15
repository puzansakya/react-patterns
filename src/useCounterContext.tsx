import { createContext, useContext } from "react";

const CounterContext = createContext(undefined);

interface CounterProviderProps {
  children: any;
  value: any;
}

function CounterProvider({ children, value }: CounterProviderProps) {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

function useCounterContext() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
}

export { CounterProvider, useCounterContext };
