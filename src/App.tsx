import { MdStar } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { useEffect } from 'react'
import queryString from 'query-string'

function App() {
  useEffect(() => {
    const parsed = queryString.parse(location.search)
    console.log(parsed)
    if (parsed.scrollTo === 'donation') {
      const element = document.querySelector<HTMLDivElement>('#donation')
      if (!element) return
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [])

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

      <h2 className="mt-8 text-3xl" id="donation">
        Donation
      </h2>
      <p className="mt-3">
        If you found this helpful, feel free to sponsor me for a cup of coffee!
        ☕ :) I really appreciate it. Have a great day!
      </p>
      <p className="mt-1">Your name will appear on the donation list. ❤️</p>

      <div className="mt-3 flex flex-col items-center">
        <div className="flex w-full justify-between md:w-9/12">
          <div className="text-xl font-semibold">Donation list</div>
          <div>Last updated: 2024-09-02</div>
        </div>
        <table className="w-full border-collapse border-b-2 border-t-2 border-slate-400 text-center text-sm md:w-9/12 md:text-base">
          <thead>
            <tr className="border-b border-slate-400">
              <th className="font-semibold">Name</th>
              <th className="font-semibold">Date</th>
              <th className="font-semibold">Amount</th>
              <th className="font-semibold">Method</th>
              <th className="font-semibold">Message</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: 'O*y',
                date: '2024-09-02',
                amount: '￥5.00',
                method: 'Wechat Pay',
                message: 'Nan zhou',
              },
              {
                name: 'T*m L*',
                date: '2024-08-20',
                amount: 'CA$5.00',
                method: '<i>Interac</i> e-Transfer',
                message: '-',
              },
            ].map((item) => (
              <tr className="transition-colors odd:bg-blue-100 even:bg-blue-50 hover:bg-slate-200">
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td dangerouslySetInnerHTML={{ __html: item.method }}></td>
                <td>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-xl">
        You can support me through the following methods.
      </h2>
      <div className="mt-3 flex flex-col items-center md:flex-row md:justify-between">
        <div className="mb-3 flex w-full flex-col items-center justify-center rounded-lg bg-slate-50 p-6 shadow-sm shadow-sky-950/35 md:mb-0 md:h-64 md:w-64 md:shadow-md">
          <div className="font-bold">
            <i>Interac</i> e-Transfer
          </div>
          <img
            className="my-1 w-36"
            src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/Interac_e-Transfer_logo.png"
            alt="Interac e-Transfer"
          />
          <div className="mt-2">gaohaoyang126@outlook.com</div>
        </div>
        <div className="mb-3 flex w-full flex-col items-center justify-center rounded-lg bg-slate-50 p-6 shadow-sm shadow-sky-950/35 md:mb-0 md:h-64 md:w-64 md:shadow-md">
          <a
            href="https://www.paypal.com/donate/?business=NB2D3UXSQKDKU&no_recurring=0&item_name=Thanks+for+your+support%21+I+really+appreciate+it.+Have+a+great+day%21&currency_code=CAD"
            target="_blank"
            className="flex items-center font-bold text-blue-900"
          >
            <img
              className="mr-1 h-8"
              src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/paypal.png"
              alt="paypal"
            />
            PayPal
          </a>
          <img
            className="my-1 h-40"
            src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/QR%20Code.png"
            alt=""
          />
          <a
            className="text-blue-700"
            href="https://www.paypal.com/donate/?business=NB2D3UXSQKDKU&no_recurring=0&item_name=Thanks+for+your+support%21+I+really+appreciate+it.+Have+a+great+day%21&currency_code=CAD"
            target="_blank"
          >
            PayPal Donation Link
          </a>
        </div>
        <div className="mb-3 flex w-full flex-col items-center justify-center rounded-lg bg-slate-50 p-6 shadow-sm shadow-sky-950/35 md:mb-0 md:h-64 md:w-64 md:shadow-md">
          <div className="flex items-center font-bold">
            <img
              className="mr-1 h-8"
              src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/wechatpayLogo.png"
              alt="wechatpayLogo"
            />
            Wechat Pay
          </div>
          <img
            className="my-1 h-40"
            src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/wechatPay.png"
            alt=""
          />
        </div>
        <div className="mb-3 flex w-full flex-col items-center justify-center rounded-lg bg-slate-50 p-6 shadow-sm shadow-sky-950/35 md:mb-0 md:h-64 md:w-64 md:shadow-md">
          <div className="flex items-center font-bold">
            <img
              className="mr-1 h-7"
              src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/alipayLogo.png"
              alt="alipayLogo"
            />
            AliPay
          </div>
          <img
            className="my-1 h-40"
            src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/Alipay.png"
            alt=""
          />
        </div>
      </div>
      <div className="h-20"></div>
    </>
  )
}

export default App
