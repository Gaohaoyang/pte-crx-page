'use client'

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import questionTypes from '@/lib/questionTypes'

type Testimonial = {
  id: string
  content: string
  name: string
  src: string | StaticImageData
}

const TestimonialContent = ({ content }: { content: string }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const processContent = (text: string) => {
    // First check for complete question types (including hyphenated ones)
    const words = text.split(/\s+/)
    return words
      .map((word) => {
        // Remove any punctuation or special characters for checking
        const cleanWord = word.replace(/[.,!?()]/g, '').trim()
        if (cleanWord in questionTypes) {
          return `<strong>${word}</strong>`
        }
        return word
      })
      .join(' ')
  }

  if (!isMounted) {
    return (
      <div
        className="mt-8 text-gray-600 dark:text-neutral-300"
        dangerouslySetInnerHTML={{
          __html: content
            .split('\n')
            .map((text) => `<p class="mb-2">${processContent(text)}</p>`)
            .join(''),
        }}
      />
    )
  }

  return (
    <motion.p className="mt-8 text-gray-600 dark:text-neutral-300">
      <motion.span
        initial={{
          filter: 'blur(10px)',
          opacity: 0,
          y: 5,
        }}
        animate={{
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeInOut',
        }}
        dangerouslySetInnerHTML={{
          __html: content
            .split('\n')
            .map((text) => `<p class="mb-2">${processContent(text)}</p>`)
            .join(''),
        }}
      />
    </motion.p>
  )
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[]
  autoplay?: boolean
}) => {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  useEffect(() => {
    if (autoplay && !isPaused) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay, isPaused])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrev()
      } else if (event.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const getRotation = (index: number) => {
    const rotations = [-10, -8, -4, 0, 4, 8, 10]
    return rotations[index % rotations.length]
  }

  return (
    <div className="mt-6 flex w-full justify-center md:mt-8 lg:mt-4">
      <div
        className="relative flex flex-wrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="w-full md:w-[460px] lg:ml-20 lg:w-[580px]">
          <div className="relative h-[100vw] w-full md:h-[500px] md:w-[430px] lg:h-[560px] lg:w-[490px]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotation(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRotation(index),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotation(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 flex origin-bottom items-center justify-center rounded-xl border border-slate-200 bg-white shadow-md"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={800}
                    draggable={false}
                    className="h-[98%] w-[98%] object-contain object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="z-10 flex flex-1 flex-col justify-between py-4">
          <motion.div
            className="my-4 flex flex-1 flex-col justify-center"
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
          >
            <h3 className="text-lg font-bold text-black dark:text-white">
              {testimonials[active].name}{' '}
              <span className="ml-2 text-xs font-extralight text-gray-600 dark:text-neutral-300">
                Sample {testimonials[active].id}
              </span>
            </h3>
            <TestimonialContent content={testimonials[active].content} />
          </motion.div>
          <div className="mb-4 flex gap-4">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
