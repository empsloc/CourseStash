import Image from "next/image";

const FeaturedCourse = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-7">
        <div className="col-span-1 md:flex justify-center hidden py-12">
          <div className=" h-full w-full relative">
            <Image className="rounded-md" src="/trading2.jpg" alt="" fill />
          </div>
        </div>
        <div className="md:col-span-1 col-span-2 flex flex-col gap-3 justify-center md:py-10 md:px-5">
          <div className="flex  items-center gap-4">
          <div className="h-3 w-3 bg-green-700 rounded-full"></div>
            <div className="text-sm md:text-base">FEATURED COURSE</div>
            </div>

          <div className="text-2xl md:text-3xl lg:text-4xl font-bold">Mastering Algorithmic Trading: Strategies for Success in Financial Markets</div>
          <div className="text-lg lg:text-xl font-semibold">
          Uncover the secrets of algorithmic trading and gain a competitive edge in financial markets. Learn to develop and implement effective trading strategies with precision and confidence.
          </div>
          <div className="grid grid-cols-4 mt-5 gap-4">
            <div className="col-span-2 flex gap-5 items-center">
              <div className="h-5 w-5 relative"><Image src="/tick3.png" alt="" fill/></div>
              <div className="">Precision</div>
            </div>
            <div className="col-span-2 flex gap-5 items-center">
              <div className="h-5 w-5 relative"><Image src="/tick3.png" alt="" fill/></div>
              <div className="">Strategy</div>
            </div>
            <div className="col-span-2 flex gap-5 items-center">
              <div className="h-5 w-5 relative"><Image src="/tick3.png" alt="" fill/></div>
              <div className="">Automation</div>
            </div>
            <div className="col-span-2 flex gap-5 items-center">
              <div className="h-5 w-5 relative"><Image src="/tick3.png" alt="" fill/></div>
              <div className="">Mastery</div>
            </div>
          </div>

          <div className="my-5 px-7 py-4 bg-secondary w-max rounded-full">Start Course</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourse;
