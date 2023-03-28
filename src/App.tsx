import { Grid, Show, GridItem } from '@chakra-ui/react';
import CategoryList from './components/CategoryList';
import GameGrid from './components/GameGrid';
import Navbar from './components/Navbar';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //devices wider than 1024px
      }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <CategoryList></CategoryList>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
