import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameContainer from './GameContainer';
import GameLoading from './GameLoading';

const GameGrid = () => {
  const { data, error, loading } = useGames();
  const loadingGames = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={10}
      >
        {loading &&
          loadingGames.map((loading) => (
            <GameContainer>
              <GameLoading key={loading}></GameLoading>
            </GameContainer>
          ))}
        {data.map((game) => (
          <GameContainer>
            <GameCard key={game.id} game={game}></GameCard>
          </GameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
