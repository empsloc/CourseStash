"use client";
import MaxWidthWrapper from "@/components/helpComponents/MaxWidthWrapper/MaxWidthWrapper";
import Footer from "@/components/helpComponents/footer/Footer";
import Navbar from "@/components/helpComponents/navbar/Navbar";
import BackgroundSVG from "@/components/homeComponents/backgroundSVG/BackgroundSVG";
import EditorPickCourses from "@/components/homeComponents/editorPickCourses/EditorPickCourses";
import FeaturedCourse from "@/components/homeComponents/featuredCourse/FeaturedCourse";
import Membership from "@/components/homeComponents/membership/Membership";
import OnDemandCourse from "@/components/homeComponents/onDemandCourse/OnDemandCourse";
import SingleStudentReview from "@/components/homeComponents/singleStudentReview/SingleStudentReview";
import SubjectLogo from "@/components/homeComponents/subjectLogo/subjectLogo";
import Testimonials from "@/components/homeComponents/testimonials/Testimonials";
import { useState } from "react";

export default function Home() {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div className="">
      <Navbar  />
      <div className="relative">
        <div className="absolute w-full z-10 -mt-1"><BackgroundSVG/></div>
        <div className="">
        
        <div className="bg--500  absolute z-20 w-screen ">
        <MaxWidthWrapper>
          <div className="mt-20  z-50"><OnDemandCourse/></div>
          <div className="mt-7 md:mt-48"><SubjectLogo/></div>
          <div className="mt-20 md:mt-48"><SingleStudentReview/></div>
          <div className="mt-20 md:mt-48"><FeaturedCourse/></div>
          <div className="mt-20 md:mt-48"><EditorPickCourses/></div>
          <div className="mt-64"><Testimonials/></div>
          <div className="mt-20"><Membership/></div>
          <div className=""><Footer/></div>
          </MaxWidthWrapper>
        </div>
        
        </div>
        </div>
     
    </div>
  );
}
