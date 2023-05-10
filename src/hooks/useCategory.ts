import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { FetchResponse } from '../services/api-client';
import genre from '../data/genre';

const api = new apiClient<Genre>('/genres');
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useCategory = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: api.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genre.length, results: genre },
  });
export default useCategory;
