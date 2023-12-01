import type { Metadata, NextComponentType } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Sky - Developer',
  description: 'General Portfolio for SkyOPG'
}

export default function App({ Component, pageProps }: {
  Component: NextComponentType,
  pageProps: any
}){
  return (
    <Component {...pageProps}/>
  )
}
