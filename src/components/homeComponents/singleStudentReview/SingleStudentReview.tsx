import { ArrowRight } from "lucide-react";
import Image from "next/image";

const SingleStudentReview = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2">

        <div className="col-span-1 md:flex hidden   justify-center">
          <div className="relative flex    w-80 h-full">
            <div className="flex  justify-center">
              <Image className="" src="/standingStudent.png" alt="" fill />
            </div>
          </div>
        </div>

        <div className="md:col-span-1 col-span-2 flex flex-col gap-7">

          <div className="text-sm">WHAT OUR HAPPY STUDENT SAY</div>

          <div className="text-lg md:text-xl lg:text-2xl ">
          These courses are incredibly informative and well-structured. I've gained valuable insights into Chartered Accountancy and trading that I can immediately apply in my career. The instructors are highly knowledgeable and provide excellent support throughout the learning journey.
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <div className="text-lg font-medium">Shree Kirtane</div>
              <div className="">Student</div>
            </div>
            <div className="flex  gap-2">
              <div className="">Read All Reviews</div>
              <div className=""><ArrowRight/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStudentReview;
