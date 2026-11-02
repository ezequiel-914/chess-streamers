import "./card.css"


//AQUÍ ABAJO mando el type Streamer para la Lista(), para que obtenga todos los elementos que necesitamos:
export type Streamer = {
    username: string
    avatar?: string
    twitch_url?: string
    url: string
    is_live: boolean
    is_community_streamer: boolean}
//Y aquí creo el type necesário para usar las mismas propiedades del Streamer en mi CARD
type CardProps = {
    streamer: Streamer}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function getUsernameFontSize(username: string) {
    if (username.length > 20) return '18px'
    if (username.length > 14) return '22px'
    return '30px'
}

export function Card({ streamer }: CardProps) {
    const StreamerComunity = streamer.is_community_streamer ? 'Streamer Community' : 'Streamer Official'
    const Avatar =streamer.avatar;
    const username =streamer.username;
    const twitchUrl =streamer.twitch_url;
    const url =streamer.url
    const isLive = streamer.is_live?  "LIVE" : "Offline"
    return (
        <li className="streamer-card-item">
            <div className="streamer-card">
                <div className="streamer-card-top">
                    <img src={Avatar} alt={streamer.username}/>
                    <h2 style={{ fontSize: getUsernameFontSize(username) }}>{username}</h2>
                </div>
                <div className="streamer-card-links">
                    <span><a href= {twitchUrl}  target="_blank" rel="noopener noreferrer">Twitch!</a></span>
                    <span><a href= {url}  target="_blank" rel="noopener noreferrer">Chess.com!</a></span>
                </div>
                <div className="streamer-card-bottom">
                        <p>{StreamerComunity}</p>
                        <div className="is-live">
                            <div className={`is-live-ball ${streamer.is_live ? 'is-live-ball--live' : 'is-live-ball--offline'}`} />
                            <div className="is-live-text">
                                <p>{isLive}</p>
                            </div>
                        </div>
                </div>
            </div>
        </li>
    )
}
