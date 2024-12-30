'use client'
import React, { useState, useEffect, JSX } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)
  const [canScroll, setCanScroll] = useState(false)

  // 检查页面是否可以滚动
  useEffect(() => {
    const checkScrollable = () => {
      const isScrollable =
        document.documentElement.scrollHeight > window.innerHeight
      setCanScroll(isScrollable)
    }

    checkScrollable()
    window.addEventListener('resize', checkScrollable)
    return () => window.removeEventListener('resize', checkScrollable)
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (!canScroll) {
      setVisible(true)
      return
    }

    if (typeof current === 'number') {
      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
      } else {
        const direction = current! - scrollYProgress.getPrevious()!
        if (direction > 0) {
          setVisible(false)
        } else {
          setVisible(true)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black',
          className,
        )}
      >
        {navItems.map(
          (
            navItem: {
              name: string
              link: string
              icon?: JSX.Element
            },
            idx: number,
          ) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                'relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300',
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden text-sm sm:block">{navItem.name}</span>
            </Link>
          ),
        )}
        <button className="relative rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white">
          <span>Login</span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
