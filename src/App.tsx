import { Grid, Show, GridItem, Box } from '@chakra-ui/react';
import { useState } from 'react';
import CategoryList from './components/CategoryList';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import Navbar from './components/Navbar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { Genre } from './hooks/useCategory';
import { Platform } from './hooks/usePlatform';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortgame: string;
  searchgame: string;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //devices wider than 1024px
      }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(search) =>
            setGameQuery({ ...GameQuery, searchgame: search })
          }
        ></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <CategoryList
            onSelectCate={(cate) => setGameQuery({ ...GameQuery, genre: cate })}
            selectedCate={GameQuery.genre}
          ></CategoryList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameHeading gameQuery={GameQuery} />
        <PlatformSelector
          onSelectedPlat={(plat) =>
            setGameQuery({ ...GameQuery, platform: plat })
          }
          selectedPlatform={GameQuery.platform}
        ></PlatformSelector>

        <SortSelector
          onSort={(sortgame) => setGameQuery({ ...GameQuery, sortgame })}
          selectedSort={GameQuery.sortgame}
        ></SortSelector>
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
