import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from '../services/api-client';
import apiClient from '../services/api-client';
import platforms from '../data/platforms';

const api = new apiClient<Platform>('/platforms/lists/parents');
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatform = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: api.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
export default usePlatform;
