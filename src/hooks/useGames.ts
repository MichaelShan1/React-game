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

const useGames = (
  selectedCate: Genre | null,
  selectedPlat: Platform | null,
  selectedSort: string,
  inputSearch: string
) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: selectedCate?.id,
        parent_platforms: selectedPlat?.id,
        ordering: selectedSort,
        search: inputSearch,
      },
    },
    [selectedCate?.id, selectedPlat?.id, selectedSort, inputSearch]
  );

export default useGames;
