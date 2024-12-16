import React from 'react'
import Navbar from '@/components/navbar'
import { FloatingNav } from '@/components/ui/floating-navbar'

const CrxLayout = ({ children }: { children: React.ReactNode }) => {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'About',
      link: '/about',
      // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Contact',
      link: '/contact',
      // icon: (
      //   <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      // ),
    },
  ]
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default CrxLayout
