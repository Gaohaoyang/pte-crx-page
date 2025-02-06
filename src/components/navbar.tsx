'use client'

import React, { useState } from 'react'
import { LuSun, LuMoon, LuLanguages } from 'react-icons/lu'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/react'
import { FaGithub } from 'react-icons/fa6'
import Image from 'next/image'
import Logo from '@/assets/home/logo.svg'
import GradualSpacing from '@/components/ui/gradual-spacing'
import { useTranslation } from 'react-i18next'
import { saveLanguagePreference, getPreferredLanguage } from '@/locales/i18n'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(getPreferredLanguage())

  const handleLanguageChange = (key: string) => {
    setLanguage(key)
    i18n.changeLanguage(key)
    saveLanguagePreference(key)
  }

  return (
    <Navbar maxWidth="xl">
      <NavbarContent className="" justify="start">
        <NavbarBrand>
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={28}
              height={28}
              className="h-7 w-7 rounded-md"
            />
            <GradualSpacing
              className="ml-2 text-base font-semibold -tracking-[0.16rem]"
              duration={0.5}
              delayMultiple={0.05}
              text="PTE Sub-Scores Breakdown"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Dropdown
            classNames={{
              content: 'min-w-fit',
            }}
          >
            <DropdownTrigger>
              <Button isIconOnly variant="light">
                <LuLanguages className="text-lg" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language Selection"
              onAction={(key) => handleLanguageChange(key as string)}
              selectedKeys={new Set([language])}
              selectionMode="single"
            >
              <DropdownItem key="en">English</DropdownItem>
              <DropdownItem key="zh">中文</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <LuSun className="text-lg opacity-0 transition-opacity dark:opacity-100" />
            <LuMoon className="absolute text-lg opacity-100 transition-opacity dark:opacity-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onPress={() =>
              window.open(
                'https://github.com/Gaohaoyang/pte-crx',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            <FaGithub className="text-lg" />
            <span className="sr-only">Github</span>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-white/40 dark:bg-slate-700/40">
        <NavbarMenuItem>
          <div className="flex items-center gap-2">
            <LuLanguages className="text-lg" /> Language
          </div>
          <NavbarMenuItem className="ml-8">
            <Button
              variant="light"
              onPress={() => handleLanguageChange('en')}
              className="justify-start"
            >
              English
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem className="ml-8">
            <Button
              variant="light"
              onPress={() => handleLanguageChange('zh')}
              className="justify-start"
            >
              中文
            </Button>
          </NavbarMenuItem>
        </NavbarMenuItem>
        <NavbarMenuItem className="">
          <div className="flex items-center gap-2">
            <LuSun className="text-lg" /> Theme
          </div>
          <NavbarMenuItem className="ml-8">
            <Button
              variant="light"
              onPress={() => setTheme('light')}
              className="justify-start"
            >
              <LuSun className="text-lg transition-opacity" />
              light
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem className="ml-8">
            <Button
              variant="light"
              onPress={() => setTheme('dark')}
              className="justify-start"
            >
              <LuMoon className="text-lg transition-opacity" />
              dark
            </Button>
          </NavbarMenuItem>
        </NavbarMenuItem>
        <NavbarMenuItem className="">
          <div className="">
            <Link
              href="https://github.com/Gaohaoyang/pte-crx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaGithub className="text-large" />
              Github
            </Link>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )

}

export default Header
