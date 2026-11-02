

import { useEffect, useState } from 'react'
import './lista.css'
import { Card, type Streamer } from '../card'

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//El type StreamerResponse permite un typado para la respuesta de la API. Divide dicha respuesta en el segundo type Streamer[]:
type StreamersResponse = {
    streamers: Streamer[]
}
// El type Streamer se comparte con el componente Card.
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function getCardLimit() {
    if (window.innerWidth >= 1248) return 18
    return 10
}

export function Lista() {
    const [streamers, setStreamers] = useState<Streamer[]>([])
    const [cardLimit, setCardLimit] = useState(getCardLimit)
//Aquí arriba defino que streamers va a ser un array que voy a llenar con setStreamer

    useEffect(() => {
        async function fetchStreamers() {
          const response = await fetch('https://api.chess.com/pub/streamers')
            const data: StreamersResponse = await response.json()
            const onlineStreamers = data.streamers.filter((streamer) => streamer.is_live)

            setStreamers(onlineStreamers)
            console.log(onlineStreamers)
        }

  fetchStreamers().catch((error) => console.error(error))}, [])

    useEffect(() => {
        const updateCardLimit = () => setCardLimit(getCardLimit())
        window.addEventListener('resize', updateCardLimit)

        return () => window.removeEventListener('resize', updateCardLimit)
    }, [])

    return (
        <ul className="streamer-list">
            {streamers.slice(0, cardLimit).map((streamer) => (
                <Card key={streamer.username} streamer={streamer} />
            ))}
        </ul>
    )
}