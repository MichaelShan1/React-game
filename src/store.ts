import { create } from 'zustand';

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortgOrder?: string;
  searchText?: string;
}
interface GameQueryStore {
  gameQuery: GameQuery;
  setSearch: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platFormId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}
const useGameQuery = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearch: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder },
    })),
}));
export default useGameQuery;
