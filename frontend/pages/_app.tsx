import Head from 'next/head'
import '../src/core/styles/main.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const keywords = [
    'мишка',
    'мишка бар',
    'мишка сургут',
    'мишка бар сургут',
    'бар',
    'бар сургут',
    'ресторан',
    'ресторан сургут',
    'коктейли сургут',
    'стейки',
    'стейки сургут',
    'европейская кухня сургут',
  ]
  
  return (
    <>
      <Head>
        <meta name='description' content='Mishka Bar, место где вас встретять не только крепкими медвежьими объятиями, но и вкусной итальянской, японской и русской кухней, освежающими напитками и приятной атмосферой.' />
        <meta name='keywords' content={keywords.join(',')} />
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}
