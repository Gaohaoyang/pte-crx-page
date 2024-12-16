'use client'

import InstallCard from '@/components/home/install-card'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container p-4">
        {/* intro and install */}
        <div className="flex flex-wrap gap-4">
          <div className="w-2/3 text-base">
            <div className="text-lg font-bold">
              Automatically show your sub-scores and details.
            </div>
            <div className="text-lg font-bold">
              So you don&apos;t have to press{' '}
              <code className="rounded-md bg-slate-100 p-1 text-sm dark:bg-slate-800">
                F12
              </code>{' '}
              to open the console to check manually.
            </div>
            <div className="mt-3">
              Just open your PTE score web page after installing, and
              you&apos;ll see a clear breakdown of your performance, including
              sub-scores, CLB levels (for PTE-core), IELTS equivalent scores,
              and more.
            </div>
            <div className="mt-3">
              Explore this panel to get a better idea of your strengths and
              where you can improve! Wish you great success!
            </div>
          </div>
          <InstallCard />
        </div>

        <div className="h-96">hi</div>
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
