'use client'

import InstallCard from '@/components/home/install-card'
import Intro from '@/components/home/intro'

import HowItWorks from '@/components/home/how-it-works'

import Donation from '@/components/home/donation'
import Comments from '@/components/home/comments'
import Samples from '@/components/home/samples'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container p-4">
        {/* intro and install */}
        <div className="mt-6 flex flex-wrap gap-4">
          <Intro />
          <InstallCard />
        </div>
        <Samples />
        <HowItWorks />
        <Donation />
        <div className="h-40" />
        <Comments />
      </div>
    </div>
  )
}
