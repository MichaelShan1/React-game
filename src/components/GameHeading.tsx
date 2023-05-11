import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useCategory from '../hooks/useCategory';
import useGenres from '../hooks/useGenres';
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatforms(gameQuery.platformId);
  const genre = useGenres(gameQuery.genreId);
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading marginLeft={10} paddingBottom={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
