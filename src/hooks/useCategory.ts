import useData from './useData';
import genre from '../data/genre';
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useCategory = () => ({ data: genre, loading: false, error: null });
export default useCategory;
