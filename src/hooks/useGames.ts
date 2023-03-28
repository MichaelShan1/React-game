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

const useGames = (selectedCate: Genre | null) =>
  useData<Game>('/games', { params: { genres: selectedCate?.id } }, [
    selectedCate?.id,
  ]);

export default useGames;
