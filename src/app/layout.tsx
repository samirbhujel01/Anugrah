"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useEffect, useRef, useState } from "react";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface ClientBodyProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ClientBody({ dark, setDark }: ClientBodyProps) {
  return (
    <div>
      {/* Add your component logic here */}
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fullText = "Anugrah Church";
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const idx = useRef(0);

  const [dark, setDark] = useState(false);

  useEffect(() => {
    setTyped("");
    idx.current = 0;
    setShowCursor(true);
    const typing = setInterval(() => {
      setTyped((prev) => {
        if (idx.current < fullText.length) {
          idx.current += 1;
          return fullText.slice(0, idx.current);
        } else {
          clearInterval(typing);
          setTimeout(() => setShowCursor(false), 1200);
          return prev;
        }
      });
    }, 90);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${dark ? "dark" : ""}`}>
      <body suppressHydrationWarning className="antialiased bg-white dark:bg-blue-950 dark:text-blue-100 transition-colors duration-300">
        <SessionProvider>
          {/* Sleek, non-floating navbar */}
          <header className="w-full bg-white/95 dark:bg-blue-950/95 border-b border-blue-100 dark:border-blue-900 shadow-md backdrop-blur-md">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
              <a href="/" className="flex items-center gap-3 font-bold text-2xl tracking-tight group">
                <div className="h-14 w-14 md:h-16 md:w-16 flex items-center justify-center rounded-full border-4 border-blue-200 dark:border-blue-900 bg-white dark:bg-blue-900 shadow-inner overflow-hidden group-hover:scale-105 transition">
                  <img
                    src="/logo.png"
                    alt="Anugrah Church Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="hidden sm:inline font-mono text-blue-900 dark:text-blue-100 drop-shadow-sm">
                  {typed}
                  <span className={`inline-block w-2 ${showCursor ? "animate-pulse" : "opacity-0"}`}>|</span>
                </span>
              </a>
              <ul className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 text-base font-medium items-center justify-end flex-1">
                <li><a href="/about" className="px-3 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-200 transition font-semibold text-blue-900 dark:text-blue-100">About</a></li>
                <li><a href="/services" className="px-3 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-200 transition font-semibold text-blue-900 dark:text-blue-100">Services</a></li>
                <li><a href="/events" className="px-3 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-200 transition font-semibold text-blue-900 dark:text-blue-100">Events</a></li>
                <li><a href="/resources" className="px-3 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-200 transition font-semibold text-blue-900 dark:text-blue-100">Resources</a></li>
                <li><a href="/media" className="px-3 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-200 transition font-semibold text-blue-900 dark:text-blue-100">Media</a></li>
                <li><a href="/announcements" className="px-3 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-200 transition font-semibold text-blue-900 dark:text-blue-100">Announcements</a></li>
                <li>
                  <button
                    aria-label="Toggle dark mode"
                    onClick={() => setDark((d) => !d)}
                    className="ml-2 px-3 py-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-800 transition"
                    type="button"
                  >
                    {dark ? "🌙" : "☀️"}
                  </button>
                </li>
                <li>
                  <a
                    href="/login"
                    className="px-3 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main className="min-h-[80vh] max-w-6xl mx-auto w-full px-4 py-8">
            {children}
          </main>
          <ClientBody dark={dark} setDark={setDark} />
        </SessionProvider>
      </body>
    </html>
  );
}