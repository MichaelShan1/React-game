import { useQuery } from '@tanstack/react-query';

import apiClient from '../services/api-client';
import platforms from '../data/platforms';
import { Platform } from '../entities/Platform';

const api = new apiClient<Platform>('/platforms/lists/parents');
const usePlatform = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: api.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
export default usePlatform;
