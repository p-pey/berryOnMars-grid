'use client';

import { useCallback, useState } from 'react';

export type toggleHandler = (value?: boolean | ((previousValue: boolean) => boolean) | undefined) => void;
export type useToggleReturn = ReturnType<(initialValue?: boolean) => [boolean, toggleHandler]>;

export function useToggle(initialValue = false): useToggleReturn {
  const [toggle, setToggle] = useState<boolean>(initialValue);
  const handleToggle: toggleHandler = useCallback((value) => {
    if (typeof value === 'boolean') setToggle(value);
    else if (typeof value === 'function') {
      setToggle((prev) => value(prev));
    } else setToggle((p) => !p);
  }, []);
  return [toggle, handleToggle];
}

export default useToggle;
