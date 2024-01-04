import { FetchApi } from '../../../../services';
import { grid } from '../types';

export async function createGrid(data: Partial<grid>) {
  try {
    const response = await FetchApi({
      data,
      method: 'POST',
      url: `/gridData`,
    });
    if (response.data) {
      return Promise.resolve();
    }
    return Promise.reject(response.statusText);
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function updateGrid(data: Partial<grid>) {
  try {
    const response = await FetchApi({
      data,
      method: 'PATCH',
      url: `/gridData/${data.id}`,
    });
    if (response.data) {
      return Promise.resolve();
    }
    return Promise.reject(response.statusText);
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function deleteGrid(id: string) {
  try {
    const response = await FetchApi({
      method: 'DELETE',
      url: `/gridData/${id}`,
    });
    if (response.data) {
      return Promise.resolve();
    }
    return Promise.reject(response.statusText);
  } catch (e) {
    return Promise.reject(e);
  }
}
