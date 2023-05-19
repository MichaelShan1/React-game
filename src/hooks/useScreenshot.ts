import { useQuery } from '@tanstack/react-query';
import { Screenshot } from '../entities/Screenshot';
import apiClient from '../services/api-client';

const useScreenshot = (gameId: number) => {
  const api = new apiClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ['screenshot', gameId],
    queryFn: api.getAll,
  });
};

export default useScreenshot;
