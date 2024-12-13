"use client";
import { useState } from "react";
import { signUp } from "../utils/firebase";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  function handleSignup() {
    signUp(email, password, firstname, lastname);
  }

  return (
    <div className="h-screen bg-[#FFFAF5] flex">
      <section className="flex-1 flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">KFU Library</h1>
          <input
            type="text"
            placeholder="Firstname"
            className="input text-white"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Lastname"
            className="input text-white"
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="input text-white"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input text-white"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn rounded-full" onClick={handleSignup}>
            Create Acoount
          </button>
          <p>
            already have an accout?{" "}
            <a className="text-stone-500 hover:text-stone-700" href="/login">
              Login
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
