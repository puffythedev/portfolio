import { NextComponentType } from 'next'
import '../styles/globals.css'

export const metadata = {
  title: 'Puffy - Developer',
  description: 'General Portfolio for Puffy'
}

export default function App({ Component, pageProps }: {
  Component: NextComponentType,
  pageProps: any
}){
  return (
    <Component {...pageProps}/>
  )
}
