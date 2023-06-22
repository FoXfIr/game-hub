import { Heading, Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ExpandabbleText from '../components/ExpandabbleText'
import GameAttributes from '../components/GameAttributes'
import GameTrailer from '../components/GameTrailer'
import useGame from '../hooks/useGame'

const GameDetailPage = () => {
    const { slug } = useParams()
    const { data: game, isLoading, error } = useGame(slug!)

    if (isLoading) return <Spinner />

    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandabbleText>{game.description_raw}</ExpandabbleText>
            <GameAttributes game={game} />
            <GameTrailer gameId={game.id} />
        </>
    )
}

export default GameDetailPage