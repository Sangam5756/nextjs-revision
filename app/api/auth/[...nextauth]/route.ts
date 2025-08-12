// import { NextRequest, NextResponse } from "next/server"


// export async function GET(req: NextRequest,{params}:{params:{nextauth:string[]}}) {
//     const param = await params; 
//     console.log(param.nextauth[0])
//     return NextResponse.json({
//         message: "Handler"
//     })
// }

import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(NEXT_AUTH_CONFIG)

export { handler as GET, handler as POST }