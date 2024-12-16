import { Button } from '@nextui-org/button'
import { MdStar } from 'react-icons/md'
import Image from 'next/image'
import Logo from '@/assets/home/logo.svg'

const InstallCard = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-between p-2">
      <div className="flex items-center justify-center gap-2">
        <Image
          src={Logo}
          alt="logo"
          width={80}
          height={80}
          className="h-20 w-20 rounded-md"
        />
        <div>
          <h1 className="text-xl font-semibold md:text-xl">
            PTE Sub-Scores Breakdown
          </h1>
          <h2>Chrome Extension</h2>
          <div className="mt-1 flex items-center text-gray-600">
            {[1, 2, 3, 4, 5].map((item) => (
              <MdStar key={item} className="text-xl dark:text-yellow-500" />
            ))}
          </div>
        </div>
      </div>
      <Button
        color="primary"
        className="w-full rounded-full"
        onPress={() => {
          window.open(
            'https://chromewebstore.google.com/detail/pte-sub-scores-breakdown/hibclclepijigjnfdkmkfhjogfhgicda',
            '_blank',
          )
        }}
      >
        Install from Chrome Web Store
      </Button>
    </div>
  )
}

export default InstallCard
