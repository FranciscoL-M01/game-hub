import { Button } from '@chakra-ui/react/button'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui/menu'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    
    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant='outline'>Order by: Relevance<BsChevronDown /></Button>
            </MenuTrigger>
            <MenuContent>
                <MenuItem value='relevance'>Relevance</MenuItem>
                <MenuItem value='dateAdded'>Date added</MenuItem>
                <MenuItem value='name'>Name</MenuItem>
                <MenuItem value='releaseDate'>Release date</MenuItem>
                <MenuItem value='popularity'>Popularity</MenuItem>
                <MenuItem value='averageRating'>Average rating</MenuItem>
            </MenuContent>
        </MenuRoot>
    )
}

export default SortSelector