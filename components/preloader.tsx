import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Preloader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(typeof window !== 'undefined'){
            const handleLoad: VoidFunction = () => {
                setLoaded(true);
            }

            window.addEventListener('load', handleLoad)

            return () => {
                window.removeEventListener('load', handleLoad)
            }
        }
    }, []);

    return (
        <div className={`preloader ${loaded ? 'loaded' : ''}`}>
            <h1 style={inter.style}>Please wait...</h1>
            <div className="border">
                <div className="notch" />
                <div className="water" />
            </div>
        </div>
    )
}

export default Preloader