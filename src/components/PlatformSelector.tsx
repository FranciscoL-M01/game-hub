import usePlatforms from '@/hooks/usePlatforms'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui/menu'
import { BsChevronDown } from 'react-icons/bs'
import { Button } from '@chakra-ui/react/button';

const PlatformSelector = () => {
    const {data, error} = usePlatforms();

    if (error) return null;
    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button marginLeft='40px' variant='outline'>Platforms<BsChevronDown /></Button>
            </MenuTrigger>
            <MenuContent>
                {data.map (platform => <MenuItem width='auto' value={platform.name} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector