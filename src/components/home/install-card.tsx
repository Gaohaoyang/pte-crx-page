import { Button } from '@nextui-org/button'
import { MdStar } from 'react-icons/md'
import Image from 'next/image'
import Logo from '@/assets/home/logo.svg'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'

const InstallCard = () => {
  return (
    <CardContainer containerClassName="flex flex-1" className="inter-var">
      <CardBody className="group/card relative flex w-full flex-1 flex-col items-center justify-between rounded-xl border border-black/[0.1] p-2 shadow-md transition-shadow duration-300 hover:shadow-2xl dark:border-white/[0.2] dark:bg-slate-800 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <div className="inter-var mt-1 flex items-center justify-center gap-2">
          <CardItem translateZ={90}>
            <Image
              src={Logo}
              alt="logo"
              width={80}
              height={80}
              className="h-20 w-20 rounded-md shadow-lg"
            />
          </CardItem>
          <div className="inter-var [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]">
            <CardItem
              translateZ={90}
              className="text-xl font-semibold drop-shadow-lg md:text-xl"
            >
              PTE Sub-Scores Breakdown
            </CardItem>
            <CardItem translateZ={80} className="drop-shadow-lg">
              Chrome Extension
            </CardItem>
            <div className="mt-1 flex items-center text-gray-600">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <CardItem
                  translateZ={240 + 10 * Math.min(index, 4 - index)}
                  translateX={20}
                  key={item}
                  className="text-xl drop-shadow-lg dark:text-yellow-500"
                >
                  <MdStar />
                </CardItem>
              ))}
            </div>
          </div>
        </div>
        <CardItem translateZ={80} className="flex w-full justify-center">
          <Button
            color="primary"
            className="w-11/12 rounded-full font-semibold shadow-lg"
            onPress={() => {
              window.open(
                'https://chromewebstore.google.com/detail/pte-sub-scores-breakdown/hibclclepijigjnfdkmkfhjogfhgicda',
                '_blank',
              )
            }}
          >
            Install from Chrome Web Store
          </Button>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

export default InstallCard
