import useGenres, { Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { HStack, List, Image, Button, Heading} from '@chakra-ui/react';
import { SkeletonText } from './ui/skeleton';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre} : Props) => {
    const {data, isLoading, error} = useGenres();

    if (error) return null;
    // Implement the loader
    // if (isLoading) return <Spinner />;

    return (
        <>
        <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
        <List.Root listStyle='none'>
            {isLoading && <SkeletonText noOfLines={19} gap='25px' />}
            {data.map(genre => 
            <List.Item key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)} />
                    <Button whiteSpace={'nowrap'} textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold': 'normal'} onClick={() => onSelectGenre(genre)} fontSize='md' variant='ghost'>{genre.name}</Button>
                </HStack>
            </List.Item>)}
        </List.Root>
        </>
    )
}

export default GenreList