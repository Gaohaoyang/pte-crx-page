'use client'

import { useTranslation } from 'react-i18next'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { bannerData } from '@/lib/data'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const Samples = () => {
  const { t } = useTranslation('home')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="mt-10 text-3xl font-bold">{t('Samples')}</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        <AnimatedTestimonials testimonials={bannerData} autoplay={true} />
      </motion.div>
    </div>
  )
}

export default Samples
