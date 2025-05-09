"use client";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (session) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="bg-white dark:bg-blue-950 border border-blue-100 dark:border-blue-900 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-5 items-center">
          <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 text-center">
            Welcome, {session.user?.name || session.user?.email}!
          </h1>
          {session.user?.image && (
            <img
              src={session.user.image}
              alt="Profile"
              className="w-20 h-20 rounded-full mb-4 shadow"
            />
          )}
          <button
            onClick={() => signOut()}
            className="bg-blue-700 hover:bg-blue-800 text-white rounded-full py-3 px-8 font-bold text-lg shadow transition"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="bg-white dark:bg-blue-950 border border-blue-100 dark:border-blue-900 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 text-center">Member Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="rounded px-4 py-3 border border-blue-200 focus:ring-2 focus:ring-blue-300 outline-none text-lg"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded px-4 py-3 border border-blue-200 focus:ring-2 focus:ring-blue-300 outline-none text-lg"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white rounded-full py-3 font-bold text-lg shadow transition"
        >
          Login
        </button>
        <button
          onClick={() => signIn("github")}
          className="bg-blue-700 hover:bg-blue-800 text-white rounded-full py-3 font-bold text-lg shadow transition"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}