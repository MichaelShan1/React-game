import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';
import useScreenshot from '../hooks/useScreenshot';

interface Props {
  gameId: number;
}
const GameScreenShot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShot;
