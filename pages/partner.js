import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import { FAQ } from '../components/FAQ'
import { Header } from '../components/Header'
import { PartnerBanner } from '../components/PartnerBanner'
import { PartnerBox } from '../components/PartnerBox'
import SEO from '../seo'

export default function Partner() {
  const variants = {
    hidden: { opacity: 0.5 },
    enter: { opacity: 1 },
    exit: { opacity: 0.5 },
  }
  const { t } = useTranslation('common')
  const elements = [
    {
      title: t('time_saving'),
      img: '/images/part1.png',
    },
    {
      title: t('sales_growth'),
      img: '/images/part2.png',
    },
    {
      title: t('ready_sales_channel'),
      img: '/images/part3.png',
    },
  ]
  return (
    <>
      <SEO />
      <motion.div
        variants={variants} // Pass the variant object into Framer Motion
        initial='hidden' // Set the initial state to variants.hidden
        animate='enter' // Animated state to variants.enter
        exit='exit' // Exit state (used later) to variants.exit
        transition={{ type: 'linear', duration: 0.3, delay: 0.2 }}
      >
        <Header />
        <PartnerBanner />
        <PartnerBox elements={elements} title={t('rasta_partners')} />
        <FAQ />
      </motion.div>
    </>
  )
}
