import '../styles/globals.scss'
import NextNProgress from 'nextjs-progressbar'
import { useEffect } from 'react'
import { fetchLocationName } from '../services/location'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (event) => {
      const result = await fetchLocationName(
        event.coords.latitude,
        event.coords.longitude
      )
      if (result.countryName !== 'Uzbekistan') {
        router.push(router.asPath, router.asPath, { locale: 'en' })
      }
    })
  }, [])

  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
