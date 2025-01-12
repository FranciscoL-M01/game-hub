import usePlatforms from '@/hooks/usePlatforms'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui/menu'
import { BsChevronDown } from 'react-icons/bs'
import { Button } from '@chakra-ui/react/button';
import { Platform } from '@/hooks/useGames';


interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform} : Props) => {
    const {data, error} = usePlatforms();

    if (error) return null;
    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button  variant='outline'>{selectedPlatform?.name || 'Platforms'}<BsChevronDown /></Button>
            </MenuTrigger>
            <MenuContent>
                {data.map (platform => <MenuItem onClick={() => onSelectPlatform(platform)} value={platform.name} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector