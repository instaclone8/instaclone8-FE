import { useState } from "react";

export function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return [inputValue, handleChange];
}
