import { NextResponse, NextRequest } from "next/server";
import prismaClient from "@/db"



export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log(data)
    // db logic here
    await prismaClient.user.create({
        data: {
            username: data.username,
            password: data.password
        }

    })
    return NextResponse.json({ user: { name: "sangam", lastName: "mundhe", method: "POST" } },{status:201});
}

export async function GET(){
    const user  = await prismaClient.user.findFirst({});
    return Response.json({user:user},{status:200})
}