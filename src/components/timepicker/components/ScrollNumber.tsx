import { FC } from "react";
import { createRef, useCallback, useEffect } from "react";
import { useState } from "react";

interface ScrollNumber {
  selectedValue: number;
  length: number;
  key: string;
  handleNumClick: Function;
}
export const ScrollNumber: FC<ScrollNumber> = ({
  selectedValue,
  key,
  handleNumClick,
  length,
}) => {
  const [val, setVal] = useState<number>();
  const containerRef: any = createRef();

  const nums = Array.from({ length: length }, (_, i) => i);
  const numRefs: any = nums.reduce((acc: any, value) => {
    acc[`${key}-${value}`] = createRef();
    return acc;
  }, {});

  const focusNumber = useCallback(
    (num) => {
      const rect = numRefs[`${key}-${num}`].current.getBoundingClientRect();

      containerRef?.current.scrollTo(0, rect.height * num);
    },
    [numRefs]
  );

  useEffect(() => {
    if (selectedValue) {
      focusNumber(selectedValue);
      setVal(selectedValue);
    }
  }, [selectedValue, focusNumber]);

  const onNumClick = (number: number) => {
    handleNumClick(number);
    focusNumber(number);
    setVal(number);
  };

  return (
    <ul
      className="overflow-y-scroll h-40 text-black"
      style={{
        scrollBehavior: "smooth",
      }}
      ref={containerRef}
    >
      {nums.map((n) => {
        return (
          <li
            ref={numRefs[`${key}-${n}`]}
            key={`${key}-${n}`}
            className={`${
              n === selectedValue
                ? "px-4 py-2 hover:bg-blue-400 bg-blue-500 text-white"
                : "px-4 py-2 hover:bg-gray-200"
            }`}
            onClick={() => onNumClick(n)}
          >
            {n}
          </li>
        );
      })}
    </ul>
  );
};
