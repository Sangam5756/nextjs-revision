import { NextResponse } from "next/server";



export async function GET() {
    NextResponse.json({ user: { name: "sangam", lastName: "mundhe" } });
}