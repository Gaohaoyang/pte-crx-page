import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const prefix =
  process.env.NODE_ENV === 'production' ? '/pte-crx-page' : ''
