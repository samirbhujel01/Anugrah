import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anugrah Church",
  description: "Modern, welcoming church site for services, events, and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <header className="w-full px-8 py-4 bg-blue-900 text-white shadow-md sticky top-0 z-40">
          <nav className="flex items-center justify-between max-w-6xl mx-auto">
            <a href="/" className="flex items-center gap-3 font-bold text-2xl tracking-tight">
              <img src="/logo.png" alt="Anugrah Church Logo" className="h-12 w-12 object-contain" />
              <span>Anugrah Church</span>
            </a>
            <ul className="flex gap-6 text-base font-medium">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/resources">Resources</a>
              </li>
              <li>
                <a href="/media">Media</a>
              </li>
              <li>
                <a href="/prayer-requests">Prayer Requests</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="min-h-[80vh] max-w-6xl mx-auto w-full px-4 py-8">
          <ClientBody>{children}</ClientBody>
        </main>
        <footer className="w-full bg-blue-950 text-blue-100 py-6 mt-10">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div>&copy; {new Date().getFullYear()} Anugrah Church. All rights reserved.</div>
            <div>
              <a href="mailto:info@anugrahchurch.org" className="underline mr-3">
                info@anugrahchurch.org
              </a>
              <a href="https://facebook.com" className="mr-2" aria-label="Facebook">
                FB
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                IG
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
