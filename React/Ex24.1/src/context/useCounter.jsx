import { useState } from "react";

export function useCounter(initialNum) {
  const [value, setValue] = useState(initialNum);

  const addOne = () => setValue((prevValue) => prevValue + 1);
  const removeOne = () => setValue((prevValue) => prevValue - 1);
  const double = () => setValue((prevValue) => prevValue * 2);
  const divide = () => setValue((prevValue) => prevValue / 2);

  return { value, addOne, removeOne, double, divide };
}
