import { ArrowRight } from "lucide-react";
import Image from "next/image";

const OnDemandCourse = () => {
  return (
    
    <div className="">
      <div className="grid grid-cols-2 gap-3">
        <div className="h-96 col-span-2 md:col-span-1 flex flex-col gap-7 justify-center ">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 bg-green-700 rounded-full"></div>
            <div className="">ON DEMAND COURSE</div>
          </div>
          <div className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          Foundations of Chartered Accountancy : Unlocking Your Financial Future
          </div>
          <div className="text-xl md:text-2xl font-normal ">
          Discover the gateway to a prosperous career in finance. Master the essentials of Chartered Accountancy and unlock limitless opportunities in the financial industry.
          </div>
          <div className="flex gap-5">
            <div className="p-4 bg-secondary rounded-full font-medium">Start Course</div>
            <div className="p-4 flex justify-center items-center gap-3">
              <div className="">View All Courses</div>
              <div className="">
                <ArrowRight size={16}/>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="relative">
          <Image className="rounded-xl" src="/coding.jpg" alt="" fill />
        </div>
      </div>
    </div>
    
  );
};

export default OnDemandCourse;
