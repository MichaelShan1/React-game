import { Grid, Show, GridItem } from '@chakra-ui/react';
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //devices wider than 1024px
      }}
    >
      <GridItem area="nav" bg="dodgerblue">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="green">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
