'use client';

import { useEffect, useRef, type DependencyList, type EffectCallback } from 'react';

export function useUpdateEffect(callbackEffect: EffectCallback, dependency?: DependencyList) {
  const hasInitialCall = useRef<boolean>(false);
  useEffect(() => {
    if (hasInitialCall.current) {
      callbackEffect();
    } else {
      hasInitialCall.current = true;
    }
  }, dependency);
}

export default useUpdateEffect;
