import { SimpleGrid, Text } from '@chakra-ui/react';
import { Genre } from '../hooks/useCategory';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameContainer from './GameContainer';
import GameLoading from './GameLoading';

interface Props {
  selectedCate: Genre | null;
}
const GameGrid = ({ selectedCate }: Props) => {
  const { data, error, loading } = useGames(selectedCate);
  const loadingGames = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={3}
      >
        {loading &&
          loadingGames.map((loading) => (
            <GameContainer key={loading}>
              <GameLoading></GameLoading>
            </GameContainer>
          ))}
        {data.map((game) => (
          <GameContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
