import axios, { AxiosRequestConfig } from 'axios';
export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}
const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  // key will include in every http request
  params: {
    key: 'de517bf2303a45f9b35157fcdd0d22ba',
  },
});

class apiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((res) => res.data);
  };
}
export default apiClient;
