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
