import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'motion/react'

const Ads = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="my-8 grid gap-4 md:grid-cols-2">
      {/* PTE Discount Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            PTE 考试优惠
          </h3>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
            广告 Ad
          </span>
        </div>
        <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            PTE 8.8折优惠码：
            <code className="ml-2 font-bold text-blue-600 dark:text-blue-400">
              NR005
            </code>
          </p>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          可用于预约2025年12月31日以前PTE-Core, PTE A, PTE UKVI的线下考试
          <br />
          中国地区包含中国的港澳台都能使用
        </p>
      </motion.div>

      {/* VPN Service Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            科学上网服务
          </h3>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
            广告 Ad
          </span>
        </div>
        <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            稳定可靠的代理服务，物美价廉的梯子 <br />
            <Link
              href="https://portal.shadowsocks.au/aff.php?aff=22354"
              target="_blank"
              rel="noopener noreferrer"
              // className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              https://portal.shadowsocks.au/aff.php?aff=22354
            </Link>
          </p>
        </div>
        <Link
          href="https://portal.shadowsocks.au/aff.php?aff=22354"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-900 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          了解更多
        </Link>
      </motion.div>
    </div>
  )
}

export default Ads
