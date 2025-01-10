import { Game } from '@/hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '@/services/image-url'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card.Root width='300px'>
        <Card.Body>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading size='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                <CriticScore score={game.metacritic} />  
                </HStack>
            </CardBody>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCard