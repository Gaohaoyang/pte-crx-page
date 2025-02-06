import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { HeroUIProvider } from '@heroui/react'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'PTE Sub-Scores Breakdown | 分析 PTE 小分',
  description:
    'PTE Sub-Scores Breakdown Chrome Extension. Analyze your PTE Sub-Scores Breakdown online and match them with CLB levels, IELTS scores, and Express Entry points. Improve your PTE score and achieve your dreams. 使用 PTE Sub-Scores Breakdown Chrome 扩展在线分析您的 PTE 小分，并将其与CLB等级、雅思分数和 EE 进行匹配。PTE小分Chrome插件',
  icons: {
    icon: 'https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/logo.svg',
  },
  // viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'PTE Sub-Scores Breakdown | 分析 PTE 小分',
    description:
      'Analyze your PTE Sub-Scores Breakdown and improve your PTE score. 使用 PTE Sub-Scores Breakdown Chrome 扩展分析你的 PTE 小分，提升成绩。',
    images: ['https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/logo.svg'],
    url: 'https://gaohaoyang.github.io/pte-crx-page/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PTE Sub-Scores Breakdown | 分析 PTE 小分Chrome插件',
    description:
      'Analyze your PTE Sub-Scores Breakdown and improve your PTE score with our Chrome Extension. 使用 PTE Sub-Scores Breakdown Chrome 扩展插件分析你的 PTE 小分，提升成绩。',
    images: ['https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/logo.svg'],
  },
  other: {
    'application-ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'PTE Sub-Scores Breakdown',
      description:
        'Analyze your PTE Sub-Scores Breakdown online and match them with CLB levels, IELTS scores, and Express Entry points. 使用 PTE Sub-Scores Breakdown Chrome 扩展在线分析您的 PTE 小分，并将其与CLB等级、雅思分数和 EE 进行匹配。',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'All',
      url: 'https://gaohaoyang.github.io/pte-crx-page/',
      image: 'https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/logo.svg',
      author: {
        '@type': 'Person',
        name: 'Haoyang Gao',
      },
    }),
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DFKBSBSEQZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DFKBSBSEQZ');
          `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9139027259917346"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroUIProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </HeroUIProvider>
      </body>
    </html>
  )
}
