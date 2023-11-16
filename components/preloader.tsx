"use client"
import { useEffect, useState } from 'react'

function Preloader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setLoaded(true);
        }

        window.addEventListener('load', handleLoad)

        return () => {
            window.removeEventListener('load', handleLoad)
        }
    }, []);

    return (
        <div className= {`preloader ${loaded ? 'loaded' : ''}`}>
            <div className="border">
                <div className="notch" />
                <div className="water" />
            </div>
        </div>
    )
}

export default Preloader