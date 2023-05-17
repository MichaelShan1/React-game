import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import CategoryList from '../components/CategoryList';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "aside main"`, //devices wider than 1024px
      }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <CategoryList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameHeading />
        <HStack>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
