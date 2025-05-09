"use client";
import React, { useState, useEffect } from "react";
import bibleDataRaw from "@/data/ne_ulb.json";

// --- Types ---
type Verse = {
  verse: number | string;
  text: string;
  chapter?: number;
  book_name?: string;
};

type Chapter = Verse[];
type Book = {
  name: string;
  chapters: Chapter[];
};

type BibleData = {
  books: Book[];
};

// --- Transform bibleDataRaw.verses into books/chapters/verses ---
function transformBibleData(raw: any): BibleData {
  const booksMap: { [bookName: string]: Book } = {};

  for (const verse of raw.verses) {
    const bookName = verse.book_name;
    if (!booksMap[bookName]) {
      booksMap[bookName] = { name: bookName, chapters: [] };
    }
    // Ensure chapter array exists
    const chapterIdx = verse.chapter - 1;
    if (!booksMap[bookName].chapters[chapterIdx]) {
      booksMap[bookName].chapters[chapterIdx] = [];
    }
    booksMap[bookName].chapters[chapterIdx].push({
      verse: verse.verse,
      text: verse.text,
      chapter: verse.chapter,
      book_name: verse.book_name,
    });
  }

  return { books: Object.values(booksMap) };
}

const bibleData = transformBibleData(bibleDataRaw);

// --- Helper to flatten all verses ---
function getAllVerses(data: BibleData) {
  const verses: { book: string; chapter: number; verse: number | string; text: string }[] = [];
  data.books.forEach(book =>
    book.chapters.forEach((chapter, cIdx) =>
      chapter.forEach(verseObj =>
        verses.push({
          book: book.name,
          chapter: cIdx + 1,
          verse: verseObj.verse,
          text: verseObj.text,
        })
      )
    )
  );
  return verses;
}

export default function HomePage() {
  const [verses, setVerses] = useState<
    { book: string; chapter: number; verse: number | string; text: string }[]
  >([]);

  // Pick 3 random verses
  const pickRandomVerses = () => {
    const allVerses = getAllVerses(bibleData);
    const shuffled = allVerses.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    setVerses(pickRandomVerses());
    // eslint-disable-next-line
  }, []);

  const refreshVerses = () => {
    setVerses(pickRandomVerses());
  };

  return (
    <div>
      {/* Hero section */}
      <section className="relative flex flex-col items-center justify-center h-80 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white rounded-xl shadow mb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-700/80 rounded-xl z-10" />
        <div className="relative z-20 text-center pt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow">Welcome to Anugrah Church</h1>
          <p className="text-xl mb-6 font-light">Rooted in faith. Living in hope. Growing in love.</p>
          <a href="/services" className="inline-block bg-blue-600 hover:bg-blue-700 rounded px-6 py-3 text-lg font-semibold shadow transition-all duration-200">Join Us This Sunday</a>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-16 text-blue-700 opacity-30" viewBox="0 0 1440 320"><path fill="currentColor" fillOpacity="1" d="M0,224L1440,96L1440,320L0,320Z"></path></svg>
      </section>

      {/* Intro */}
      <section className="mb-10 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">A Friendly and Welcoming Community</h2>
        <p className="text-lg text-gray-700 mb-6">We are a vibrant family church with a heart for God, people, missions, and the city. No matter your story, you have a place here!</p>
        <a href="/about" className="text-blue-700 underline font-semibold">Learn More</a>
      </section>

      {/* Bible Verse Generator Section */}
      <section className="mb-10 text-center">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Random Nepali Bible Verses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {verses.map((verse, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between text-center border border-blue-100"
            >
              <blockquote className="mb-2 italic text-blue-800">
                {verse.text}
                <br />
                <span className="block mt-2 text-sm text-blue-600">
                  — {verse.book} {verse.chapter}:{verse.verse}
                </span>
              </blockquote>
            </div>
          ))}
        </div>
        <button
          onClick={refreshVerses}
          className="mt-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-2 rounded-full font-semibold shadow transition"
        >
          Refresh Verses
        </button>
      </section>
    </div>
  );
}