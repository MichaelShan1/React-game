import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameContainer from './GameContainer';
import GameLoading from './GameLoading';

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const loadingGames = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={6}
    >
      {isLoading &&
        loadingGames.map((loading) => (
          <GameContainer key={loading}>
            <GameLoading></GameLoading>
          </GameContainer>
        ))}
      {data?.results.map((game) => (
        <GameContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
