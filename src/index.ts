import React, { Dispatch } from 'react';

export default function useSessionStorage(
  key: string,
  initialValue: string = ''
): [string, Dispatch<string>] {
  const [item, setValue] = React.useState(() => {
    const value = sessionStorage.getItem(key) || initialValue;
    sessionStorage.setItem(key, value);
    return value;
  });

  const setItem = (newValue: string) => {
    setValue(newValue);
    sessionStorage.setItem(key, newValue);
  };

  return [item, setItem];
}
