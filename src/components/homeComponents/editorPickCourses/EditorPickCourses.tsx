import { ScanFace, Timer } from "lucide-react";
import Image from "next/image";

const EditorPickCourses = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-4 lg:grid-cols-3 gap-16">
        <div className="col-span-3 md:col-span-2 lg:col-span-1 rounded-2xl  dark:bg-slate-950 bg-white shadow-2xl dark:shadow-purple-950 gap-5 pb-7">
          <div className="w-full h-96 md:h-64 lg:h-52 flex  relative">
            <Image className="rounded-lg" src="/audit.png" alt="" fill />
          </div>
          <div className=" px-10">
            <div className=" my-5">Trading</div>
            <div className="my-5 text-lg font-semibold">
            Investment Analysis and Portfolio Management
            </div>
            <div className="flex justify-between">
              <div className="flex  gap-3 justify-center items-center">
                <div className="">
                  <ScanFace />
                </div>
                <div className="">Intermediate</div>
              </div>
              <div className="flex  gap-3 justify-center items-center">
                <div className="">
                  <Timer />
                </div>
                <div className="">3h 30m</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 md:col-span-2 lg:col-span-1 rounded-2xl dark:bg-slate-950 bg-white shadow-2xl dark:shadow-purple-950 gap-5 pb-7">
          <div className="w-full h-96 md:h-64 lg:h-52 flex  relative">
            <Image className="rounded-lg" src="/financialManagement.jpg" alt="" fill />
          </div>
          <div className=" px-10">
            <div className=" my-5">Trading</div>
            <div className="my-5 text-lg font-semibold">
            Technical Analysis in Trading and Governance
            </div>
            <div className="flex justify-between">
              <div className="flex  gap-3 justify-center items-center">
                <div className="">
                  <ScanFace />
                </div>
                <div className="">Beginner</div>
              </div>
              <div className="flex  gap-3 justify-center items-center">
                <div className="">
                  <Timer />
                </div>
                <div className="">2h 24m</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 md:col-span-2 lg:col-span-1 rounded-2xl dark:bg-slate-950 bg-white shadow-2xl dark:shadow-purple-950 gap-5 pb-7">
          <div className="w-full h-96 md:h-64 lg:h-52 flex  relative">
            <Image className="rounded-lg" src="/accounting.png" alt="" fill />
          </div>
          <div className=" px-10">
            <div className=" my-5">Accounting</div>
            <div className="my-5 text-lg font-semibold">
            Management Accounting Techniques
            </div>
            <div className="flex justify-between">
              <div className="flex  gap-3 justify-center items-center">
                <div className="">
                  <ScanFace />
                </div>
                <div className="">Beginner</div>
              </div>
              <div className="flex  gap-3 justify-center items-center">
                <div className="">
                  <Timer />
                </div>
                <div className="">5h 20m</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPickCourses;
