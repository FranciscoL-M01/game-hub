import { Game } from '@/hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import PlatformIconList from './PlatformIconList'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card.Root>
        <Card.Body>
            <Image src={game.background_image} />
            <CardBody>
                <Heading size='2xl'>{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            </CardBody>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCard