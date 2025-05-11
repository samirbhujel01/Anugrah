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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Prevent hydration mismatch by not rendering until mounted
if (!mounted) {
  return (
    <html>
      <body />
    </html>
  );
}

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${dark ? "dark" : ""}`}>
      <body className="antialiased bg-background text-foreground dark:text-white transition-colors duration-300">
        <SessionProvider>
          {/* Responsive Navbar */}
          <header className="w-full border-b border-blue-100 dark:border-[#222b3a] shadow-md backdrop-blur-md backdrop-saturate-150 py-4 bg-[hsl(40,80%,95%)] dark:bg-black/80">
            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto w-full bg-[hsl(40,80%,95%)] dark:bg-black/80 rounded-xl">
              {/* Logo */}
              <a href="/" className="block">
                <div className="h-16 w-16 flex items-center justify-center rounded-full border-4 border-blue-200 dark:border-[#222b3a] bg-white dark:bg-[#181f2e] shadow-inner overflow-hidden group-hover:scale-105 transition mx-auto">
                  <img
                    src="/logo.png"
                    alt="Anugrah Church Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
              </a>
              {/* Church Name */}
              <span className="mt-2 font-mono font-bold text-2xl sm:text-3xl text-blue-900 dark:text-blue-50 drop-shadow-sm text-center">
                {showCursor ? typed : fullText}
                <span className={`inline-block w-2 ${showCursor ? "animate-pulse" : "opacity-0"}`}>|</span>
              </span>
              {/* Navigation Links */}
              <nav className="w-full mt-4">
                <ul className="flex flex-wrap justify-center gap-2 md:gap-6 text-base font-medium items-center">
                  <li>
                    <a
                      href="/about"
                      className="flex items-center justify-center px-2 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-[#222b3a] transition font-semibold text-blue-800 dark:text-blue-200 bg-transparent"
                    >
                      <svg className="w-6 h-6 opacity-80 sm:opacity-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                      <span className="hidden sm:inline ml-2">About</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="flex items-center justify-center px-2 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-[#222b3a] transition font-semibold text-blue-800 dark:text-blue-200 bg-transparent"
                    >
                      <svg className="w-6 h-6 opacity-80 sm:opacity-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3v2a1 1 0 001 1h4a1 1 0 001-1v-2h3a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1z" /></svg>
                      <span className="hidden sm:inline ml-2">Services</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/events"
                      className="flex items-center justify-center px-2 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-[#222b3a] transition font-semibold text-blue-800 dark:text-blue-200 bg-transparent"
                    >
                      <svg className="w-6 h-6 opacity-80 sm:opacity-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      <span className="hidden sm:inline ml-2">Events</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resources"
                      className="flex items-center justify-center px-2 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-[#222b3a] transition font-semibold text-blue-800 dark:text-blue-200 bg-transparent"
                    >
                      <svg className="w-6 h-6 opacity-80 sm:opacity-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3m9 0a9 9 0 100-18 9 9 0 000 18z" /></svg>
                      <span className="hidden sm:inline ml-2">Resources</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/media"
                      className="flex items-center justify-center px-2 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-[#222b3a] transition font-semibold text-blue-800 dark:text-blue-200 bg-transparent"
                    >
                      <svg className="w-6 h-6 opacity-80 sm:opacity-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553 2.276A2 2 0 0121 14.118V17a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.882a2 2 0 01.447-1.842L8 10m7 0V7a5 5 0 00-10 0v3m10 0a5 5 0 00-10 0" /></svg>
                      <span className="hidden sm:inline ml-2">Media</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/announcements"
                      className="flex items-center justify-center px-2 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-[#222b3a] transition font-semibold text-blue-800 dark:text-blue-200 bg-transparent"
                    >
                      <svg className="w-6 h-6 opacity-80 sm:opacity-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 13V7a2 2 0 00-2-2H7a2 2 0 00-2 2v6m14 0a2 2 0 01-2 2H7a2 2 0 01-2-2m14 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6" /></svg>
                      <span className="hidden sm:inline ml-2">Announcements</span>
                    </a>
                  </li>
                  <li>
                    <button
                      aria-label="Toggle dark mode"
                      onClick={() => setDark((d) => !d)}
                      className="ml-2 px-3 py-2 rounded-full border border-blue-200 dark:border-[#222b3a] bg-transparent text-blue-900 dark:text-blue-50 hover:bg-blue-50 dark:hover:bg-[#222b3a] transition flex items-center justify-center"
                      type="button"
                    >
                      <span className="sm:hidden">{dark ? "🌙" : "☀️"}</span>
                      <span className="hidden sm:inline">{dark ? "Dark" : "Light"}</span>
                    </button>
                  </li>
                  <li>
                    <a
                      href="/login"
                      className="flex items-center justify-center px-2 py-2 rounded-full font-semibold text-blue-900 dark:text-blue-50 bg-transparent hover:bg-blue-50 dark:hover:bg-[#222b3a] transition"
                    >
                      <span className="hidden sm:inline">Login</span>
                      <svg className="w-6 h-6 sm:hidden" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m6-6v12m6-6a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="min-h-[80vh] max-w-6xl mx-auto w-full px-2 sm:px-4 py-6 sm:py-8 pb-20 sm:pb-0">
            {children}
          </main>
          <ClientBody dark={dark} setDark={setDark} />
        </SessionProvider>
      </body>
    </html>
  );
}