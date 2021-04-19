// write your custom hook here to control your checkout form
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValues = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValues];
};

export const useForm = (initialValue) => {
  const [values, setValues] = useLocalStorage("form", initialValue);

  const handleChanges = (updatedValue) => {
    setValues({ ...values, updatedValue });
  };
  return [values, handleChanges];
};
