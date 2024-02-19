import prisma from "@/utils/connect"
import { NextResponse } from "next/server"
export const GET = async ()=>{

    try{

        const course = await prisma.courses.findMany()

        return new NextResponse(JSON.stringify(
            course
        ))

    }catch(err){
        console.log(err)

        return new NextResponse(JSON.stringify({
            message:"something went wrong"
        }))
    }
}