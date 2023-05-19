import { useQuery } from '@tanstack/react-query';

import { Video } from '../entities/Video';
import apiClient from '../services/api-client';

const useVideos = (gameId: number) => {
  const api = new apiClient<Video>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ['videos', gameId],
    queryFn: api.getAll,
  });
};

export default useVideos;
