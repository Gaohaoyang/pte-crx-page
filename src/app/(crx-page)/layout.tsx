'use client'
import { useEffect } from 'react'
import Navbar from '@/components/navbar'
import initI18n, { getPreferredLanguage } from '@/locales/i18n'

// Initialize with a default language for SSR
initI18n('en')

const CrxLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Update language on client-side after hydration
    const preferredLanguage = getPreferredLanguage()
    if (preferredLanguage) {
      initI18n(preferredLanguage)
    }
  }, [])

  return (
    <div className="">
      <Navbar />
      <div className="max-w-screen overflow-x-hidden">{children}</div>
    </div>
  )
}

export default CrxLayout
