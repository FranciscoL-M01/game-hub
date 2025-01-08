import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"

function App() {
  return ( 
  <>
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` // devices wider that 1024px
    }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Box display={{base: 'none', lg: 'block'}}>
        <GridItem area='aside'>Aside</GridItem>
      </Box>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  </>
)}

export default App
