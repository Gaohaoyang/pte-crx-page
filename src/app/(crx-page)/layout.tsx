'use client'
import Navbar from '@/components/navbar'
import initI18n, { getPreferredLanguage } from '@/locales/i18n'

initI18n(getPreferredLanguage())

const CrxLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Navbar />
      {children}
    </div>
  )
}

export default CrxLayout
