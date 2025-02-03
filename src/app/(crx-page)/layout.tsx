'use client'
import Navbar from '@/components/navbar'
import initI18n, { getBrowserLanguage } from '@/locales/i18n'

initI18n(getBrowserLanguage())

const CrxLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Navbar />
      {children}
    </div>
  )
}

export default CrxLayout
