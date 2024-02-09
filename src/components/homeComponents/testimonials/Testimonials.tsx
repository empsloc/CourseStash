import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="">
      <div className="text-zinc-500">TESTIMONIALS</div>
      <div className="grid grid-cols-2 justify-center items-center">
        <div className="col-span-1 text-xl md:text-2xl  font-semibold">
          Trusted by Thousand of Students and Tutors
        </div>
        <div className="col-span-1 flex justify-end">
          <div className="w-max px-7 py-4 hover:text-white border-blue-900 border hover:border-none hover:bg-purple-950 hover:shadow-purple-950 rounded-full">
            Start Learning
          </div>
          
        </div>
      </div>

      <div className="grid grid-cols-2 gap-16 mt-20">
        <div className="col-span-2 p-7 rounded-md md:col-span-1 dark:shadow-black shadow-lg">
          <div className="flex flex-col gap-3">
            <div className=" my-5 -mt-10">
              <div className="relative h-20 w-20 shadow-xl" >
                <Image className="rounded-md" src="/student1.png" alt="" fill />
              </div>
            </div>
            <div className="font-medium">
              “The courses exceeded my expectations, making complex concepts easy to grasp. I feel confident and well-prepared for real-world challenges.”
            </div>
            <div className="font-bold">
              Rahul Sharma
            </div>
          </div>
        </div>
        <div className="col-span-2 p-7 rounded-md md:col-span-1 dark:shadow-black shadow-lg">
          <div className=" flex flex-col gap-3">
            <div className=" my-5 -mt-10">
              <div className="relative h-20 w-20 shadow-xl" >
                <Image className="rounded-md" src="/student2.png" alt="" fill />
              </div>
            </div>
            <div className="font-medium">
              “The depth of knowledge gained was impressive. I highly recommend these courses for anyone in finance.”
            </div>

            <div className="font-bold">
              Shailesh Gupta
            </div>
          </div>
        </div>
        <div className="col-span-2 p-7 rounded-md md:col-span-1 dark:shadow-black shadow-lg">
          <div className="flex flex-col gap-3">
            <div className=" my-5 -mt-10">
              <div className="relative h-20 w-20 shadow-xl" >
                <Image className="rounded-md" src="/student3.png" alt="" fill />
              </div>
            </div>
            <div className="font-medium">
              “Enrolling was one of my best decisions. I feel empowered to apply what I've learned to drive success in my role.”
            </div>
            <div className="font-bold">
              Raman Ghode
            </div>
          </div>
        </div>
        <div className="col-span-2 p-7 rounded-md md:col-span-1 dark:shadow-black shadow-lg">
          <div className="flex flex-col gap-3">
            <div className=" my-5 -mt-10">
              <div className="relative h-20 w-20 shadow-xl" >
                <Image className="rounded-md" src="/student4.png" alt="" fill />
              </div>
            </div>
            <div className="font-medium">
              “I'm truly impressed by the quality of instruction. These courses have broadened my skill set and opened new opportunities.”
            </div>
            <div className="font-bold">
              Himanshu Kadu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
