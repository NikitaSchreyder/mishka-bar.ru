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

  const description = 'Mishka Bar, место где тебя встретят не только крепкими медвежьими объятиями, но и вкусной итальянской, японской и русской кухней, освежающими напитками и приятной атмосферой.'
  
  return (
    <>
      <Head>
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords.join(',')} />
      </Head>
      <div className='app'>
        <Component {...pageProps} />
      </div>
    </>
  ) 
}
