import { GameQuery } from './../App';
import SortSelector from '../components/SortSelector';
import { Genre } from './useCategory';
import useData from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  //parent_platform property includes an array of platform objects.
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortgame,
        search: gameQuery.searchgame,
      },
    },
    [gameQuery]
  );

export default useGames;
