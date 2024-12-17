'use client'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface BlurInProps {
  word: string
  className?: string
  variant?: {
    hidden: { filter: string; opacity: number }
    visible: { filter: string; opacity: number }
  }
  delay?: number
  duration?: number
}
const BlurIn = ({
  word,
  className,
  variant,
  delay = 0,
  duration = 1,
}: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  }
  const combinedVariants = variant || defaultVariants

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration, delay }}
      variants={combinedVariants}
      className={cn('drop-shadow-sm', className)}
    >
      {word}
    </motion.h1>
  )
}

export default BlurIn
