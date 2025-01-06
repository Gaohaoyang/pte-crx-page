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
      <h2 className="text-xl font-bold">How It Works</h2>
      <p className="mt-2">
        When you visit the PTE score page, the Chrome extension intercepts the
        API response, adds some question types, and renders them in the page
        panel.
      </p>
      <div
        className="relative mx-auto flex w-[60%] items-center justify-center pt-20"
        ref={containerRef}
      >
        <div className="flex w-full flex-col items-stretch justify-between">
          <div className="flex justify-end">
            <div
              ref={divPteServerRef}
              className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-white p-3 shadow-md dark:bg-gray-600"
            >
              <FaServer className="text-2xl" />
              <div className="absolute -left-[22] -top-6 w-44 text-center text-sm text-gray-500">
                PTE Server
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div
              ref={divUserRef}
              className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-white p-3 shadow-md dark:bg-gray-600"
            >
              <LuUser className="text-2xl" />
              <div className="absolute -top-6 left-0 w-full text-center text-sm text-gray-500">
                User
              </div>
            </div>
            <div
              ref={divPtePageRef}
              className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-white p-3 shadow-md dark:bg-gray-600"
            >
              <FaChrome className="text-2xl" />
              <div className="absolute -left-[22] -top-6 w-44 text-center text-sm text-gray-500">
                PTE Website
              </div>
            </div>
            <div className="h-14 w-14"></div>
            <div className="h-14 w-14"></div>
          </div>
          <div className="mt-10 flex justify-between">
            <div className="h-14 w-14"></div>
            <div className="h-14 w-14"></div>
            <div className="h-14 w-14"></div>
            <div
              ref={divExtensionRef}
              className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-white p-3 shadow-md dark:bg-gray-600"
            >
              <Image
                src={Logo}
                alt="logo"
                width={28}
                height={28}
                className="h-7 w-7 rounded-sm"
              />
              <div className="absolute -left-[40] -top-11 w-80 text-center text-sm text-gray-500">
                PTE Sub-Scores Breakdown
                <br />
                <span className="text-xs">Chrome Extension</span>
              </div>
            </div>
            <div className="h-14 w-14"></div>
            <div className="h-14 w-14"></div>
          </div>
        </div>

        <AnimatedBeam
          duration={4}
          containerRef={containerRef}
          fromRef={divUserRef}
          toRef={divPtePageRef}
          curvature={0}
        />
        <AnimatedBeam
          duration={4}
          containerRef={containerRef}
          fromRef={divPtePageRef}
          toRef={divPteServerRef}
          curvature={50}
        />
        <AnimatedBeam
          duration={4}
          containerRef={containerRef}
          toRef={divExtensionRef}
          fromRef={divPteServerRef}
          curvature={-120}
          startYOffset={10}
          // endYOffset={10}
          delay={2}
          reverse
        />
      </div>
    </div>
  )
}

export default HowItWorks
