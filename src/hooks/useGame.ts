import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { Game } from '../entities/Game';

const api = new apiClient<Game>('/games');
const useGame = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => api.get(slug),
  });

export default useGame;
