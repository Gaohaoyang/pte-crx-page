'use client'

import InstallCard from '@/components/home/install-card'
import Intro from '@/components/home/intro'

import HowItWorks from '@/components/home/how-it-works'

import Donation from '@/components/home/donation'
import Comments from '@/components/home/comments'
import Samples from '@/components/home/samples'
import { Suspense } from 'react'
import Ads from '@/components/home/ads'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-300">
      <div className="container p-4">
        {/* intro and install */}
        <div className="mt-6 flex flex-wrap gap-4">
          <Intro />
          <InstallCard />
        </div>
        <Ads />
        <Samples />
        <HowItWorks />
        <Suspense>
          <Donation />
        </Suspense>
        <Comments />
      </div>
    </div>
  )
}
