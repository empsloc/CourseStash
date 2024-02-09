"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import ThemeToggleButton from "../themeToggle/themeToggleButton";

const Navbar1 = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false)
  return (
    <div className=" w-full h-max bg--800 ">
    <MaxWidthWrapper>
      <div className="flex justify-between items-center py-5 bg--100">
        <div className="text-2xl font-bold">CourseStash</div>
        <div className="flex items-center gap-7">
          <div className="">
          <ThemeToggleButton /></div>
          <div className="hidden lg:flex gap-7">
          <div className="">Home</div>
          <div className="">All Courses</div>
          <div className="">About</div>
          <div className="">Login</div>
          </div>
          <div onClick={()=>setOpenSideMenu(!openSideMenu)} className="lg:hidden flex">
            <Menu/>
          </div>

        </div>
      </div>
    </MaxWidthWrapper>

    {openSideMenu&&<div className="bg--400 h-full absolute z-30  w-full flex justify-end ">
      
      <div className="flex flex-col items-end w-96 dark:bg-blue-950 bg-secondary h-full rounded-md shadow-2xl">
        <div className="mr-10 flex flex-col gap-5 items-end mt-5 ">
          <div className="">Home</div>
          <div className="">All Courses</div>
          <div className="">About</div>
          <div className="">Login</div>
          </div>
          
      </div>
    </div>}
    </div>
  );
};

export default Navbar1;
