import useCategory from './useCategory';

const useGenres = (id?: number) => {
  const { data: genres } = useCategory();
  return genres?.results.find((g) => g.id === id);
};

export default useGenres;
