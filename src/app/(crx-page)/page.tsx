'use client'

import { Button } from '@nextui-org/button'
import { MdStar } from 'react-icons/md'
import Image from 'next/image'
import Logo from '@/assets/home/logo.svg'

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
              <code className="rounded-md bg-slate-100 p-1 text-sm">F12</code>{' '}
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
          <div className="flex flex-1 flex-col items-center justify-between p-2">
            <div className="flex items-center justify-center gap-2">
              <Image
                src={Logo}
                alt="logo"
                width={80}
                height={80}
                className="h-20 w-20 rounded-md"
              />
              <div>
                <h1 className="text-xl font-semibold md:text-xl">
                  PTE Sub-Scores Breakdown
                </h1>
                <h2>Chrome Extension</h2>
                <div className="mt-1 flex items-center text-gray-600">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <MdStar key={item} className="text-xl" />
                  ))}
                </div>
              </div>
            </div>
            <Button
              color="primary"
              className="w-full rounded-full"
              onPress={() => {
                window.open(
                  'https://chromewebstore.google.com/detail/pte-sub-scores-breakdown/hibclclepijigjnfdkmkfhjogfhgicda',
                  '_blank',
                )
              }}
            >
              Install from Chrome Web Store
            </Button>
          </div>
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
