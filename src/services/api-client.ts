import axios from 'axios';
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  // key will include in every http request
  params: {
    key: 'de517bf2303a45f9b35157fcdd0d22ba',
  },
});
