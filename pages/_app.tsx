import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'ol/ol.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
