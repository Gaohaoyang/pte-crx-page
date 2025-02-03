import BlurIn from '@/components/ui/blur-in'

import React from 'react'

const Intro = () => {
  return (
    <div className="w-full text-base lg:w-2/3 xl:w-2/3 2xl:w-2/3">
      <BlurIn
        duration={0.4}
        word="Automatically show your PTE sub-scores and details."
        className="text-3xl font-bold"
      ></BlurIn>
      <BlurIn duration={0.4} delay={0.3} className="mt-2 text-2xl font-bold">
        So you don&apos;t need to press{' '}
        <code className="rounded-md bg-slate-100 p-1 text-xl dark:bg-slate-800">
          F12
        </code>{' '}
        to open the console for a manual check.
      </BlurIn>
      <BlurIn
        delay={0.6}
        duration={0.4}
        className="mt-3"
        word="Simply open your PTE score webpage after installing, and you'll see a clear breakdown of your performance, including sub-scores, CLB levels (for PTE-core), IELTS equivalent scores, and more."
      ></BlurIn>
      <BlurIn
        delay={0.9}
        duration={0.4}
        className="mt-3"
        word="Explore this panel to better understand your strengths and areas for improvement! Wishing you great success!"
      ></BlurIn>
    </div>
  )
}

export default Intro
