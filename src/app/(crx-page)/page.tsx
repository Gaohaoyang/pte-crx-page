'use client'

import InstallCard from '@/components/home/install-card'
import Intro from '@/components/home/intro'

import HowItWorks from '@/components/home/how-it-works'

import Donation from '@/components/home/donation'
import Comments from '@/components/home/comments'
import Samples from '@/components/home/samples'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('scrollTo') === 'donation') {
      setTimeout(() => {
        const element = document.querySelector<HTMLDivElement>('#donation')
        if (!element) return
        const headerOffset = 80 // 预留导航栏的高度
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }, 240)
    }
  }, [searchParams])

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
        <Comments />
      </div>
    </div>
  )
}
