'use client'

import InstallCard from '@/components/home/install-card'
import Intro from '@/components/home/intro'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container p-4">
        {/* intro and install */}
        <div className="flex flex-wrap gap-4">
          <Intro />
          <InstallCard />
        </div>

        <div className="mt-44 h-96">hi</div>
        <div className="h-96">hi</div>
        <div className="h-96">hi</div>
        <div className="h-96">hi</div>
        <div className="h-96">hi</div>
        <div className="h-96">hi</div>
        <div className="h-96">hi</div>
        <div className="h-96">hi</div>
      </div>
    </div>
  )
}
