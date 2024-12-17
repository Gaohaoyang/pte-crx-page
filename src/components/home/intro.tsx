import BlurIn from '@/components/ui/blur-in'

import React from 'react'

const Intro = () => {
  return (
    <div className="w-full text-base lg:w-2/3 xl:w-2/3 2xl:w-2/3">
      <BlurIn
        duration={0.4}
        word="Automatically show your PTE sub-scores and details."
        className="text-lg font-bold"
      ></BlurIn>
      <BlurIn duration={0.4} delay={0.3} className="text-lg font-bold">
        So you don&apos;t have to press{' '}
        <code className="rounded-md bg-slate-100 p-1 text-sm dark:bg-slate-800">
          F12
        </code>{' '}
        to open the console to check manually.
      </BlurIn>
      <BlurIn
        delay={0.6}
        duration={0.4}
        className="mt-3"
        word="Just open your PTE score web page after installing, and you'll see
        a clear breakdown of your performance, including sub-scores, CLB levels
        (for PTE-core), IELTS equivalent scores, and more."
      ></BlurIn>
      <BlurIn
        delay={0.9}
        duration={0.4}
        className="mt-3"
        word="Explore this panel to get a better idea of your strengths and where you
        can improve! Wish you great success!"
      ></BlurIn>
    </div>
  )
}

export default Intro
