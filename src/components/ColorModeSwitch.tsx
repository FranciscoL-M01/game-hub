import { HStack, Text } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode"
import { Switch } from "./ui/switch"

const ColorModeSwitch = () => {
    // custom hook defined in Chakra
    const {toggleColorMode, colorMode} = useColorMode();
  
    return (
        <HStack>
            <Switch checked={colorMode === 'dark'} onChange={toggleColorMode} />
                <Text>Dark Mode</Text>
        </HStack>
    )
}

export default ColorModeSwitch