"use client"
import MaxWidthWrapper from "@/components/helpComponents/MaxWidthWrapper/MaxWidthWrapper"
import Footer from "@/components/helpComponents/footer/Footer"
import Navbar1 from "@/components/helpComponents/navbar/Navbar1"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const Authentication=()=>{
    const {data,status} = useSession()

    console.log(data,status)
    const router = useRouter()
    if (status === "loading") {
        return <div className="">
        <Navbar1/>
    <MaxWidthWrapper>
        <div className="bg--400 w-full p-20 md:p-52 flex justify-center items-center ">
          Loading
        </div>
        <Footer/>
    </MaxWidthWrapper>
    
    </div>;
      }
    
      if (status === "authenticated") {
        router.push("/")
      }
    return(
        <div className="">
            <Navbar1/>
        <MaxWidthWrapper>
            <div className="bg--400 w-full p-20 md:p-52 flex justify-center items-center ">
                    <div onClick={()=>signIn("google")} className="p-10 bg-secondary dark:bg-slate-900 rounded-xl flex flex-col gap-3">
                        <div className="dark:bg-green-900 bg-green-400 px-20 py-5 rounded-lg flex justify-center text-white  font-medium">Google</div>
                        <div className="dark:bg-red-900 bg-red-400 px-20 py-5 rounded-lg flex justify-center text-white    font-medium">Instagram</div>
                        <div className="dark:bg-blue-900 bg-blue-400 px-20 py-5 rounded-lg flex justify-center text-white    font-medium">Twitter</div>
                    </div>
            </div>
            <Footer/>
        </MaxWidthWrapper>
        
        </div>
    )
}

export default Authentication