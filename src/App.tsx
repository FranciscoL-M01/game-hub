import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react"
import { Button } from "./components/ui/button"

function App() {
  return ( 
  <>
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` // devices wider that 1024px
    }}>
      <GridItem area='nav' bg='coral'>Nav</GridItem>
      <Box display={{base: 'none', lg: 'block'}}>
        <GridItem area='aside' bg='gold'>Aside</GridItem>
      </Box>
      <GridItem area='main' bg='dodgerblue'>Main</GridItem>
    </Grid>
  </>
)}

export default App
