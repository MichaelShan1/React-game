import usePlatform from './usePlatform';

const usePlatforms = (id?: number) => {
  const { data: platforms } = usePlatform();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatforms;
