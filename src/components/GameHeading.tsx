import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useCategory from '../hooks/useCategory';
import usePlatform from '../hooks/usePlatform';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useCategory();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const { data: platforms } = usePlatform();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading marginLeft={10} paddingBottom={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
