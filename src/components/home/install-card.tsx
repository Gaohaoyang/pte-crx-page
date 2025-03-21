import { Button } from '@heroui/react'
import { MdStar } from 'react-icons/md'
import Image from 'next/image'
import Logo from '@/assets/home/logo.svg'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { motion, useInView } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import chromePng from '@/assets/home/chrome.png'
import edgePng from '@/assets/home/edge.png'

const InstallCard = () => {
  const { t } = useTranslation('home')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  return (
    <motion.div
      ref={ref}
      className="flex flex-1"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
      transition={{
        delay: 1,
        duration: 0.6,
        type: 'spring',
        bounce: 0.2,
      }}
    >
      <CardContainer containerClassName="flex flex-1" className="inter-var">
        <CardBody className="group/card relative flex w-full flex-1 flex-col items-center justify-between rounded-xl border border-black/[0.1] px-2 py-4 shadow-md transition-shadow duration-300 dark:border-white/[0.2] dark:bg-slate-800 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] md:hover:shadow-2xl">
          <div className="inter-var ml-0 flex items-center justify-center gap-2 md:ml-0 lg:ml-5 xl:ml-0 2xl:ml-0">
            <CardItem translateZ={90} translateX={5}>
              <Image
                src={Logo}
                alt="logo"
                width={80}
                height={80}
                className="h-20 w-20 rounded-md shadow-lg"
              />
            </CardItem>
            <div className="inter-var ml-0 flex-1 [transform-style:preserve-3d] md:ml-6 lg:ml-4 xl:ml-0 2xl:ml-0 [&>*]:[transform-style:preserve-3d]">
              <CardItem
                translateZ={90}
                translateX={5}
                className="text-lg font-semibold drop-shadow-lg md:text-lg xl:text-xl"
              >
                {t('PTE Sub-Scores Breakdown')}
              </CardItem>
              <CardItem
                translateZ={80}
                translateX={5}
                className="drop-shadow-lg"
              >
                {t('Chrome Extension')}
              </CardItem>
              <div className="mt-1 flex items-center text-gray-600">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <CardItem
                    translateZ={240 + 10 * Math.min(index, 4 - index)}
                    translateX={25}
                    key={item}
                    className="text-xl drop-shadow-lg dark:text-yellow-500"
                  >
                    <MdStar />
                  </CardItem>
                ))}
              </div>
            </div>
          </div>
          <CardItem
            translateZ={80}
            translateX={5}
            className="mb-1 mt-3 flex w-full flex-col items-center justify-center gap-2"
          >
            <Button
              color="primary"
              className="w-11/12 rounded-full font-semibold shadow-lg"
              onPress={() => {
                window.open(
                  'https://chromewebstore.google.com/detail/pte-sub-scores-breakdown/hibclclepijigjnfdkmkfhjogfhgicda',
                  '_blank'
                )
              }}
            >
              <Image src={chromePng} alt="chrome" width={20} height={20} />
              {t('Install from Chrome Web Store')}
            </Button>
            <Button
              color="primary"
              className="w-11/12 rounded-full font-semibold shadow-lg"
              onPress={() => {
                window.open(
                  'https://microsoftedge.microsoft.com/addons/detail/pte-subscores-breakdown/ldncinbpnblagkpngpnloaekkfekoejk',
                  '_blank'
                )
              }}
            >
              <Image src={edgePng} alt="edge" width={20} height={20} />
              {t('Install from Edge Addons')}
            </Button>
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  )
}

export default InstallCard
