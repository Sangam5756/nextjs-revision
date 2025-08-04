"use client";

import { useState } from "react";
import { signup } from "@/actions/user";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
     await signup(username, password);
    alert("data successfully submitted");
  };

  return (
    <div className="flex flex-col items-center ">
      <h1>SignUn page</h1>
      <div className="flex flex-col">
        <label htmlFor="username">Enter UserName</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          name="username"
          required
          id="username"
        />
        <label htmlFor="password">Enter Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
          name="password"
          required
          id="password"
        />
      </div>
      <button onClick={() => handleSubmit()}>signin</button>
    </div>
  );
}
