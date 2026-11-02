import './header.css'
import { useEffect, useState } from 'react'

export function Header() {
    const [hours, setHours] = useState(() => new Date().toLocaleTimeString())
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setHours(new Date().toLocaleTimeString())}, 1000)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const updateHeader = () => setIsScrolled(window.scrollY > 40)
        updateHeader()
        window.addEventListener('scroll', updateHeader, { passive: true })

        return () => window.removeEventListener('scroll', updateHeader)
    }, [])

    return (
        <div className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <h1>Streamers de Xadres Online</h1>
            <p>Segue uma lista de Streamers ao vivo neste momento!</p>
            <span>{hours}</span>
        </div>
    )
}