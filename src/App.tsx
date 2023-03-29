import { Grid, Show, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import CategoryList from './components/CategoryList';
import GameGrid from './components/GameGrid';
import Navbar from './components/Navbar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { Genre } from './hooks/useCategory';
import { Platform } from './hooks/usePlatform';

function App() {
  const [selectedCate, setCate] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectPlat] = useState<Platform | null>(null);
  const [sortGame, setSortGame] = useState('');

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //devices wider than 1024px
      }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <CategoryList
            onSelectCate={(cate) => {
              setCate(cate);
            }}
            selectedCate={selectedCate}
          ></CategoryList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          onSelectedPlat={(platform) => setSelectPlat(platform)}
          selectedPlatform={selectedPlatform}
        ></PlatformSelector>
        <SortSelector
          onSort={(sortLabel) => setSortGame(sortLabel)}
        ></SortSelector>
        <GameGrid
          selectedPlat={selectedPlatform}
          selectedCate={selectedCate}
          selectedSort={sortGame}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
