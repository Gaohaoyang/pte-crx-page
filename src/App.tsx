import { MdStar } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'

function App() {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex w-full items-center md:w-auto">
          <img
            src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/logo.svg"
            alt="pte core sub scores logo"
            className="size-20 rounded-xl md:size-24"
          />
          <div className="ml-4 flex flex-col items-start">
            <h1 className="text-2xl font-semibold md:text-3xl">
              PTE Core Sub-Scores
            </h1>
            <h2>Chrome Extension</h2>
            <div className="mt-1 flex items-center text-gray-600">
              {[1, 2, 3, 4, 5].map(() => (
                <MdStar className="text-xl" />
              ))}
            </div>
          </div>
        </div>
        <a
          className="mt-4 flex w-full items-center justify-center rounded-full bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-600 md:mt-0 md:w-auto"
          href="https://chromewebstore.google.com/detail/pte-core-sub-scores/hibclclepijigjnfdkmkfhjogfhgicda"
          target="_blank"
        >
          Download from Chrome Web Store
        </a>
      </div>

      <div className="mt-6 text-3xl md:mt-8">
        Unlock Your PTE Potential: Analyze, Improve, Succeed!
      </div>
      <div className="mt-3 text-xl">
        Take control of your PTE journey today!
      </div>

      <div className="mt-2 gap-0 md:flex md:flex-row-reverse md:justify-between">
        <div className="relative left-[-1rem] h-max w-screen md:left-0 md:w-2/3">
          <Swiper
            pagination={{
              bulletActiveClass: 'swiper-pagination-bullet-active bg-sky-700',
            }}
            autoplay={{
              delay: 2600,
            }}
            modules={[Pagination, Autoplay]}
            style={{}}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop
          >
            {[
              'https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/2.png',
              'https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/0.png',
              'https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/1.png',
              // 'https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/ptePanel.jpg',
            ].map((item) => (
              <SwiperSlide className="px-2 pb-8 md:px-5 md:py-8">
                {/* <div
                  className="h-96 w-full rounded-lg bg-contain bg-center bg-no-repeat shadow-lg shadow-sky-950/55"
                  style={{
                    backgroundImage: `url(${item})`,
                  }}
                /> */}
                <img
                  className="w-full rounded-lg shadow-lg shadow-sky-950/55"
                  src={item}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <img
            className="w-full rounded-xl shadow-2xl shadow-sky-950/85"
            src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/2.png"
            alt=""
          /> */}
        </div>
        <div className="mt-2 flex flex-col justify-center text-lg md:mt-0 md:w-2/5">
          <p className="mb-6 md:mb-10">
            Simply visit your PTE score page after installation, where you’ll
            find a detailed breakdown of your performance, including your
            sub-scores, CLB levels, and more.
          </p>
          <p className="md:mb-10">
            Dive into this insightful panel to better understand your strengths
            and areas for improvement.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
