"use client"
import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Preloader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const handleLoad: VoidFunction = () => {
            setLoaded(true);
        }

        window.addEventListener('load', handleLoad)

        return () => {
            window.removeEventListener('load', handleLoad)
        }
    }, []);

    return (
        <div className= {`preloader ${loaded ? 'loaded' : ''}`}>
            <h1 className= {inter.className}>Please wait...</h1>
            <div className="border">
                <div className="notch" />
                <div className="water" />
            </div>
        </div>
    )
}

export default Preloader