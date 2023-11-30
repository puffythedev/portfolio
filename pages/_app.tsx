import type { Metadata, NextComponentType } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Sky - Developer',
  description: 'Portfolio of Your Name, a passionate web developer specializing in UI/UX Design, Responsive Web Design, and Backend Development.'
}

export default function App({ Component, pageProps }: {
  Component: NextComponentType,
  pageProps: any
}){
  return (
    <Component {...pageProps}/>
  )
}
