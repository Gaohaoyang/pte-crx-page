'use client'

import InstallCard from '@/components/home/install-card'
import Intro from '@/components/home/intro'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { bannerData } from '@/lib/data'
import { motion } from 'motion/react'
import HowItWorks from '@/components/home/how-it-works'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container p-4">
        {/* intro and install */}
        <div className="mt-2 flex flex-wrap gap-4">
          <Intro />
          <InstallCard />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatedTestimonials testimonials={bannerData} autoplay={true} />
        </motion.div>
        <HowItWorks />

        <div className="mt-20 h-96">hi</div>
        <div className="mt-20 h-96">hi</div>
        <div className="mt-20 h-96">hi</div>
        <div className="mt-20 h-96">hi</div>
        <div className="mt-20 h-96">hi</div>
        <div className="mt-20 h-96">hi</div>
        <div className="mt-20 h-96">hi</div>

      </div>
    </div>
  )
}
