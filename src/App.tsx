import { MdStar } from 'react-icons/md'
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

      <div className="mt-6 md:mt-8 text-3xl">
        Unlock Your PTE Potential: Analyze, Improve, Succeed!
      </div>
      <div className="mt-3 text-xl">
        Take control of your PTE journey today!
      </div>

      <div className="mt-8 md:flex md:flex-row-reverse md:justify-between">
        <img
          className="w-full rounded-xl shadow-2xl shadow-sky-950/85 md:ml-6 md:w-3/5"
          src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/2.png"
          alt=""
        />
        <div className="mt-8 md:mt-0 flex flex-col justify-center text-lg">
          <p className='mb-6 md:mb-10'>
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
