import { CourierBanner } from '../components/CourierBanner'
import { CourierBox } from '../components/CourierBox'
import { Header } from '../components/Header'
import { PartnerBox } from '../components/PartnerBox'
import { FAQ } from '../components/FAQ'
import { motion } from 'framer-motion'
import SEO from '../seo'
import useTranslation from 'next-translate/useTranslation'

export default function Courier() {
  const { t } = useTranslation('common')
  const variants = {
    hidden: { opacity: 0.5 },
    enter: { opacity: 1 },
    exit: { opacity: 0.5 },
  }
  const elements = [
    {
      id: '0',
      title: t('schedule'),
      img: '/images/courier1.png',
    },
    {
      id: '1',
      title: t('easy_match'),
      img: '/images/courier2.png',
    },
    {
      id: '2',
      title: t('income'),
      img: '/images/courier3.png',
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
        <CourierBanner />
        <PartnerBox
          elements={elements}
          title={t('rasta')}
          className='sm:pt-[80px] sm:pb-[144px]'
        />
        <CourierBox />
        <FAQ className='sm:py-[40px]' bgColor='faq-bg-color-white' />
      </motion.div>
    </>
  )
}
