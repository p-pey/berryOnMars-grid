import axios, { AxiosRequestHeaders, type Method } from 'axios';

export type fetchApiArgs = {
  url: string;
  method?: Method | undefined;
  headers?: AxiosRequestHeaders | Record<string, string>;
  data?: unknown;
};

const AXIOS = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export function FetchApi({ url, data, headers, method }: fetchApiArgs) {
  return AXIOS({
    method,
    url,
    data,
    headers,
  });
}
