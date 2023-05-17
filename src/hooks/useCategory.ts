import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';

import genre from '../data/genre';
import { Genre } from '../entities/Genre';

const api = new apiClient<Genre>('/genres');
const useCategory = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: api.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: genre,
  });
export default useCategory;
