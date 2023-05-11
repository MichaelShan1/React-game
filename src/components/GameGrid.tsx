import { Box, Button, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameContainer from './GameContainer';
import GameLoading from './GameLoading';

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const loadingGames = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (error) return <Text>{error.message}</Text>;

  const fetchedGame =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedGame}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner></Spinner>}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={5}
        marginLeft={5}
      >
        {isLoading &&
          loadingGames.map((loading) => (
            <GameContainer key={loading}>
              <GameLoading></GameLoading>
            </GameContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameContainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
