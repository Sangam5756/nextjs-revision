import { NextResponse, NextRequest } from "next/server";



export function GET() {
    return NextResponse.json({ user: { name: "sangam", lastName: "mundhe", method: "GET" } });
}

export async function POST(req:NextRequest) {
    const data =await req.json();
    console.log(data)
    // db logic here

    return NextResponse.json({ user: { name: "sangam", lastName: "mundhe", method: "PUT" } });
}
export function PUT() {
    return NextResponse.json({ user: { name: "sangam", lastName: "mundhe", method: "POST" } });
}

export function DELETE() {
    return NextResponse.json({ user: { name: "sangam", lastName: "mundhe", method: "DELETE" } });
}