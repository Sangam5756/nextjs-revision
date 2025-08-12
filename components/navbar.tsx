"use client";
import { signIn, signOut } from "next-auth/react"

export const Navbar = () => {
    return <div className="flex flex-col gap-5">
    <button onClick={() => signIn()}>Signin</button>
    <button onClick={() => signIn('google')}>Signin with google</button>
    <button onClick={() => signIn('github')}>Signin with github</button>
    <button onClick={() => signOut()}>Sign out</button>
  </div>
}