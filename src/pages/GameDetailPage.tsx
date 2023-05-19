import { Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import Details from '../components/Details';
import ExpandableText from '../components/ExpandableText';

import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <Details data={data} />
    </>
  );
};

export default GameDetailPage;
