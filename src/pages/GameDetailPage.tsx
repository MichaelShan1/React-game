import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import Details from '../components/Details';
import ExpandableText from '../components/ExpandableText';
import GameScreenShot from '../components/GameScreenShot';
import GameVideo from '../components/GameVideo';

import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{data.name}</Heading>
        <ExpandableText>{data.description_raw}</ExpandableText>
        <Details data={data} />
      </GridItem>
      <GridItem>
        <GameVideo gameId={data.id} />
        <GameScreenShot gameId={data.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
