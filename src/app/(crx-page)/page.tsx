'use client'

import InstallCard from '@/components/home/install-card'
import Intro from '@/components/home/intro'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { bannerData } from '@/lib/data'
import { motion } from 'motion/react'
import HowItWorks from '@/components/home/how-it-works'
import { useTranslation } from 'react-i18next'
import Donation from '@/components/home/donation'
import { DiscussionEmbed } from 'disqus-react'
import { useTheme } from 'next-themes'

export default function Home() {
  const { t } = useTranslation('home')
  const { theme } = useTheme()
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container p-4">
        {/* intro and install */}
        <div className="mt-6 flex flex-wrap gap-4">
          <Intro />
          <InstallCard />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="mt-10 text-3xl font-bold">{t('Samples')}</div>
          <AnimatedTestimonials testimonials={bannerData} autoplay={true} />
        </motion.div>
        <HowItWorks />
        <Donation />
        <div className="h-40" />
        <div className="disqus-container rounded-lg">
          <DiscussionEmbed
            key={theme}
            shortname="gaohaoyang-github-io-pte-crx-page"
            config={{
              url: 'https://gaohaoyang.github.io/pte-crx-page',
              identifier: 'gaohaoyang.github.io_pte-crx-page',
              title:
                'PTE Sub-Scores Breakdown | Analyze Your PTE Sub-Scores Online with PTE Sub-Scores Breakdown Chrome Extension | 分析 PTE Core 小分的 Chrome 插件',
              language: 'en_US',
            }}
          />
        </div>
      </div>
    </div>
  )
}
