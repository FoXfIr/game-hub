import { Box, Heading, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import ExpandabbleText from '../components/ExpandabbleText'
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
        </>
    )
}

export default GameDetailPage