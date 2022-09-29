import { motion } from 'framer-motion'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import SEO from '../seo'

export default function Home() {
  const variants = {
    hidden: { opacity: 0.5 },
    enter: { opacity: 1 },
    exit: { opacity: 0.5 },
  }
  return (
    <>
      <SEO />
      <motion.div
        variants={variants} // P"ass the variant object into Framer Motion
        initial='hidden' // Set the initial state to variants.hidden
        animate='enter' // Animated state to variants.enter
        exit='exit' // Exit state (used later) to variants.exit
        transition={{ type: 'linear', duration: 0.3, delay: 0.2 }}
      >
        <Header />
        <Banner />
      </motion.div>
    </>
  )
}
