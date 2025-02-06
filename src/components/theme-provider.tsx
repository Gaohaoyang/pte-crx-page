'use client'

import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      {...props}
    >
      {children}
    </NextThemeProvider>
  )
}
