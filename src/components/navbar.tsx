'use client'

import React from 'react'
import { LuSun, LuMoon } from 'react-icons/lu'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { FaGithub } from 'react-icons/fa6'
import Image from 'next/image'
import Logo from '@/assets/home/logo.svg'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  return (
    <>
      <div className="fixed top-0 z-50 flex h-10 w-full items-center justify-center bg-white/80 shadow backdrop-blur-sm dark:bg-slate-700/80 dark:shadow-slate-300/30">
        <div className="container flex h-10 items-center justify-between">
          <div className="">
            <Button
              className="flex items-center gap-2 font-semibold outline-none"
              variant="light"
              onPress={() => router.push('/')}
            >
              <Image
                src={Logo}
                alt="logo"
                width={28}
                height={28}
                className="h-7 w-7 rounded-md"
              />
              <div className="ml-2">PTE Sub-Scores Breakdown</div>
            </Button>
          </div>
          <div>
            <Button
              isIconOnly
              variant="light"
              onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <LuSun className="text-lg opacity-0 transition-opacity dark:opacity-100" />
              <LuMoon className="absolute text-lg opacity-100 transition-opacity dark:opacity-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              isIconOnly
              variant="light"
              onPress={() =>
                window.open(
                  'https://github.com/Gaohaoyang/pte-crx',
                  '_blank',
                  'noopener,noreferrer',
                )
              }
            >
              <FaGithub className="text-lg" />
              <span className="sr-only">Github</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </>
  )
}

export default Navbar
