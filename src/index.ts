import React, { Dispatch, SetStateAction } from 'react';

export function useSessionStorage(
  key: string,
  initialValue: string = ''
): [string, Dispatch<SetStateAction<string>>, () => void] {
  const [item, setValue] = React.useState(() => {
    const value = sessionStorage.getItem(key) || initialValue;
    sessionStorage.setItem(key, value);
    return value;
  });

  const setItem = (action: SetStateAction<string>) => {
    if (action instanceof Function) {
      return setValue(prevState => {
        const value = action(prevState);
        sessionStorage.setItem(key, value);
        return value;
      });
    }
    setValue(action);
    sessionStorage.setItem(key, action);
  };

  const clear = () => {
    sessionStorage.removeItem(key);
  };

  return [item, setItem, clear];
}

export function useSessionStorageWithObject<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>, () => void] {
  const [state, setState, clear] = useSessionStorage(
    key,
    JSON.stringify(initialValue)
  );
  const item: T = JSON.parse(state);
  const setItem = (value: SetStateAction<T>) => {
    if (value instanceof Function) {
      setState(prevState => JSON.stringify(value(JSON.parse(prevState))));
      return;
    }
    setState(JSON.stringify(value));
  };
  return [item, setItem, clear];
}
