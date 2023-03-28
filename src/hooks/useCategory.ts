import useData from './useData';

export interface Genre {
  id: number;
  name: string;
}

const useCategory = () => useData<Genre>('/genres');
export default useCategory;
