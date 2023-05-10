import { useQuery } from '@tanstack/react-query';
import apiClient, { FetchResponse } from '../services/api-client';
import { GameQuery } from './../App';

import { Platform } from './usePlatform';

const api = new apiClient<Game>('/games');
export interface Game {
  id: number;
  name: string;
  background_image: string;
  //parent_platform property includes an array of platform objects.
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      api.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortgame,
          search: gameQuery.searchgame,
        },
      }),
  });

export default useGames;
