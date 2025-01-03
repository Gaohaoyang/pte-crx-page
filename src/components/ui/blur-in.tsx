'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface BlurInProps {
  word?: string
  children?: ReactNode
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
  children,
  className,
  variant,
  delay = 0,
  duration = 1,
}: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: 'blur(3px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  }
  const combinedVariants = variant || defaultVariants

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration, delay }}
      variants={combinedVariants}
      className={cn('drop-shadow-sm', className)}
    >
      {children || word}
    </motion.div>
  )
}

export default BlurIn
