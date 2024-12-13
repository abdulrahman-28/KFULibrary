"use client";

import { useState } from "react";
import { login } from "../utils/firebase";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    login(email, password);
  }

  return (
    <div className="h-screen bg-[#FFFAF5] flex">
      <section className="flex-1 flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">KFU Library</h1>
          <input
            type="text"
            placeholder="Email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn rounded-full" onClick={handleLogin}>
            Login
          </button>
          <p>
            Don't have an accout?{" "}
            <a className="text-stone-500 hover:text-stone-700" href="/register">
              Create One
            </a>
          </p>
        </div>
      </section>
      <section className="flex-1 bg-black">
        <img src="image.png" className="w-full h-full object-cover" />
      </section>
    </div>
  );
}
