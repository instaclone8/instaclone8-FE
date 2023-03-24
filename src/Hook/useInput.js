import { useState } from "react";

function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleChange];
}

export function useEmailCheck(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailCheck.test(inputValue);
    setIsValid(isValid)
  };

  return [inputValue, handleChange, isValid];
}

export function usePwdCheck(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    const pwdCheck = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
    const isValid = pwdCheck.test(e.target.value);
    setIsValid(isValid);
  };

  return [inputValue, handleChange, isValid];
}


export default useInput;