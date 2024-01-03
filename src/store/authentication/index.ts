import { create } from 'zustand';
import { useAuthenticationArgs } from './lib/types';

export const useAuthentication = create<useAuthenticationArgs>((set) => {
  return {
    isLogged: undefined,
    updateAuthentication: (isLogged: boolean) => {
      return set((p) => ({ ...p, isLogged }));
    },
  };
});
