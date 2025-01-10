import useGenres, { Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { HStack, List, Image, Button} from '@chakra-ui/react';
import { SkeletonText } from './ui/skeleton';

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre} : Props) => {
    const {data, isLoading, error} = useGenres();

    if (error) return null;
    // if (isLoading) return <Spinner />;

    return (
      <List.Root listStyle='none'>
        {isLoading && <SkeletonText noOfLines={19} gap='25px' />}
          {data.map(genre => 
          <List.Item key={genre.id} paddingY='5px'>
              <HStack>
                  <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                  <Button onClick={() => onSelectGenre(genre)} fontSize='md' variant='ghost'>{genre.name}</Button>
              </HStack>
          </List.Item>)}
      </List.Root>
    )
}

export default GenreList