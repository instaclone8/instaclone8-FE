import { useState } from "react";

function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleChange];
}

export function useValidInput({ type }) {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  let check;

  switch (type) {
    case 'email':
      check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      break;
    case 'pwd':
      check = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
      break;
    default:
      break;
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
    const isValid = check.test(e.target.value);
    setIsValid(isValid);
  };

  return [inputValue, handleChange, isValid];
}


export default useInput;