'use client'

import { useRef } from 'react'
import { AnimatedBeam } from '@/components/ui/animated-beam'
import { LuUser } from 'react-icons/lu'
import { FaChrome } from 'react-icons/fa6'
import { FaServer } from 'react-icons/fa'
import Image from 'next/image'
import Logo from '@/assets/home/logo.svg'

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const divUserRef = useRef<HTMLDivElement>(null)
  const divPtePageRef = useRef<HTMLDivElement>(null)
  const divPteServerRef = useRef<HTMLDivElement>(null)
  const divExtensionRef = useRef<HTMLDivElement>(null)
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold">How It Works</h2>
      <p className="mt-2">
        When you visit the PTE score page, the Chrome extension intercepts the
        API response, adds some question types, and renders them in the page
        panel.
      </p>
      <div
        className="relative mx-auto flex w-[96%] items-center justify-center pt-20 text-gray-500 dark:text-gray-300 md:w-[80%] lg:w-[60%]"
        ref={containerRef}
      >
        <div className="flex w-full flex-col items-stretch justify-between">
          <div className="flex justify-between">
            <div
              ref={divUserRef}
              className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-white p-3 shadow-md dark:bg-gray-600"
            >
              <LuUser className="text-2xl" />
              <div className="absolute -top-6 left-0 w-full text-center text-sm">
                User
              </div>
            </div>
            <div
              ref={divPtePageRef}
              className="relative z-10 mr-0 flex h-14 w-14 items-center justify-center rounded-full border bg-white p-3 shadow-md dark:bg-gray-600"
            >
              <FaChrome className="text-2xl" />
              <div className="absolute -left-[22] -top-6 w-44 text-center text-sm">
                PTE Website
              </div>
            </div>
            <div
              ref={divPteServerRef}
              className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-white p-3 shadow-md dark:bg-gray-600"
            >
              <FaServer className="text-2xl" />
              <div className="absolute -left-[22] -top-6 w-44 text-center text-sm">
                PTE Server
              </div>
            </div>
          </div>
          <div className="mt-14 flex justify-center">
            <div
              ref={divExtensionRef}
              className="relative z-10 ml-20 flex h-14 w-14 items-center justify-center rounded-full border bg-white p-3 shadow-md dark:bg-gray-600"
            >
              <Image
                src={Logo}
                alt="logo"
                width={28}
                height={28}
                className="h-7 w-7 rounded-sm"
              />
              <div className="absolute -bottom-11 -left-[40] w-80 text-center text-sm font-bold text-gray-800 dark:text-gray-200">
                PTE Sub-Scores Breakdown
                <br />
                <span className="text-xs">Chrome Extension</span>
              </div>
            </div>
          </div>
        </div>

        <AnimatedBeam
          duration={5}
          containerRef={containerRef}
          fromRef={divUserRef}
          toRef={divPtePageRef}
          curvature={20}
          startYOffset={-5}
          endYOffset={-5}
        />
        <AnimatedBeam
          duration={5}
          containerRef={containerRef}
          fromRef={divPtePageRef}
          toRef={divPteServerRef}
          curvature={20}
          startYOffset={-5}
          endYOffset={-5}
        />
        <AnimatedBeam
          duration={5}
          containerRef={containerRef}
          toRef={divPtePageRef}
          fromRef={divPteServerRef}
          curvature={-20}
          startYOffset={5}
          endYOffset={5}
          delay={2}
          reverse
        />
        <AnimatedBeam
          duration={5}
          containerRef={containerRef}
          toRef={divExtensionRef}
          fromRef={divPtePageRef}
          curvature={40}
          startYOffset={25}
          startXOffset={5}
          endYOffset={-25}
          delay={2}
        />
        <AnimatedBeam
          duration={5}
          containerRef={containerRef}
          toRef={divPtePageRef}
          fromRef={divExtensionRef}
          curvature={0}
          startYOffset={10}
          endYOffset={10}
          delay={2.5}
          reverse
        />
        <AnimatedBeam
          duration={5}
          containerRef={containerRef}
          toRef={divUserRef}
          fromRef={divPtePageRef}
          curvature={-20}
          startYOffset={5}
          endYOffset={5}
          delay={3}
          reverse
        />
      </div>
    </div>
  )
}

export default HowItWorks
