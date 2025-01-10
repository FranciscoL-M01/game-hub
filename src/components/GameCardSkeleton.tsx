import { Card, CardBody, Skeleton } from '@chakra-ui/react'
import { SkeletonText } from "@/components/ui/skeleton"

const GameCardSkeleton = () => {
  return (
    <Card.Root width='100%'>
        <Card.Body>
            <Skeleton height='200px' />
            <CardBody>
            <SkeletonText noOfLines={4} />       
            </CardBody>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton