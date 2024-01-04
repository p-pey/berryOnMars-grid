import { storageKey } from '../../types';

export function TEST_HELPER() {
  return true;
}

export function saveStorage(key: storageKey, value: string) {
  localStorage.setItem(key, value);
}

export function getStorage(key: storageKey) {
  return localStorage.getItem(key);
}

export function deleteStorage(key: storageKey) {
  localStorage.removeItem(key);
}

export function clearStorage() {
  localStorage.clear();
}

export const debounce = (callback: (args: unknown) => void, delay: number) => {
  let timer: NodeJS.Timeout;
  return function (args: unknown) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args);
    }, delay);
  };
};
