import { Heading } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';
import useGameQuery from '../store';

const GameHeading = () => {
  const platformId = useGameQuery((s) => s.gameQuery.platformId);
  const genreId = useGameQuery((s) => s.gameQuery.genreId);
  const platform = usePlatforms(platformId);
  const genre = useGenres(genreId);
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading marginLeft={10} paddingBottom={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
