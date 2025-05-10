"use client";
import React, { useState, useMemo, useEffect } from "react";
import bibleDataRaw from "@/data/ne_ulb.json";

// --- Types ---
type Verse = {
  verse: number | string;
  text: string;
};
type Chapter = Verse[];
type Book = {
  name: string;
  chapters: Chapter[];
};
type BibleData = {
  books: Book[];
};
type Song = {
  title: string;
  lyrics: string;
};

// --- Transform bibleDataRaw.verses into books/chapters/verses ---
function transformBibleData(raw: any): BibleData {
  const booksMap: { [bookName: string]: Book } = {};
  for (const verse of raw.verses) {
    const bookName = verse.book_name;
    if (!booksMap[bookName]) {
      booksMap[bookName] = { name: bookName, chapters: [] };
    }
    const chapterIdx = verse.chapter - 1;
    if (!booksMap[bookName].chapters[chapterIdx]) {
      booksMap[bookName].chapters[chapterIdx] = [];
    }
    booksMap[bookName].chapters[chapterIdx].push({
      verse: verse.verse,
      text: verse.text,
    });
  }
  return { books: Object.values(booksMap) };
}

const bibleData = transformBibleData(bibleDataRaw);

export default function ResourcesPage() {
  const [tab, setTab] = useState<"bible" | "songs">("bible");
  const [bibleQuery, setBibleQuery] = useState("");
  const [songQuery, setSongQuery] = useState("");
  const [selectedBookIdx, setSelectedBookIdx] = useState(0);
  const [selectedChapterIdx, setSelectedChapterIdx] = useState(0);
  const [songData, setSongData] = useState<Song[]>([]);

  useEffect(() => {
    fetch("/uploads/translated_songs_proper.json")
      .then(res => res.json())
      .then(data => {
        setSongData(
          (data.songs || []).map((song: any) => ({
            title: song.title,
            lyrics: song.lyrics.join("\n"),
          }))
        );
      });
  }, []);

  // Helper to get unique first Nepali letters from song titles
  const nepaliAlphabet = useMemo(() =>
    Array.from(
      new Set(
        songData
          .map(song => (song.title[0] || ""))
          .filter(ch => ch.match(/[\u0900-\u097F]/)) // Only Devanagari
      )
    ).sort((a, b) => a.localeCompare(b, "ne")),
    [songData]
  );

  // Bible Parsing: Assuming bibleData.books = [{ name, chapters: [[verse, ...], ...]}]
  const filteredBooks = useMemo(() => {
    if (!bibleQuery) return bibleData.books;
    const q = bibleQuery.toLowerCase();
    return bibleData.books
      .map(book => ({
        ...book,
        chapters: book.chapters.map(chapter =>
          chapter.filter(verseObj =>
            (verseObj.verse || "").toString().includes(q) ||
            (verseObj.text || "").toLowerCase().includes(q)
          )
        ).filter(c => c.length > 0),
      }))
      .filter(book =>
        book.name.toLowerCase().includes(q) ||
        book.chapters.some(ch => ch.length > 0)
      );
  }, [bibleQuery, bibleData.books]);

  // Songs: Assume songData = [{title, lyrics}]
  const filteredSongs = useMemo(() => {
    if (!songQuery) return songData;
    const q = songQuery.toLowerCase();
    return songData.filter(song =>
      (song.title || "").toLowerCase().startsWith(q) ||
      (song.lyrics || "").toLowerCase().includes(q)
    );
  }, [songQuery, songData]);

  const books = bibleData.books;

  // When book changes, reset chapter to 0
  const handleBookChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBookIdx(Number(e.target.value));
    setSelectedChapterIdx(0);
  };

  // When chapter changes
  const handleChapterChange = (idx: number) => {
    setSelectedChapterIdx(idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-900 text-center tracking-tight drop-shadow">
        Resources
      </h1>
      <div className="flex gap-2 mb-8 justify-center">
        <button
          onClick={() => setTab("bible")}
          className={`px-8 py-3 rounded-t-lg font-semibold text-lg shadow transition-all duration-200 ${
            tab === "bible"
              ? "bg-blue-700 text-white"
              : "bg-blue-50 text-blue-900 hover:bg-blue-100"
          }`}
        >
          Bible
        </button>
        <button
          onClick={() => setTab("songs")}
          className={`px-8 py-3 rounded-t-lg font-semibold text-lg shadow transition-all duration-200 ${
            tab === "songs"
              ? "bg-blue-700 text-white"
              : "bg-blue-50 text-blue-900 hover:bg-blue-100"
          }`}
        >
          गीतहरू
        </button>
      </div>

      {/* Bible Tab */}
      {tab === "bible" && (
        <div className="bg-white dark:bg-blue-950/40 rounded-2xl shadow-lg p-6 mb-10">
          <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-center">
            <select
              className="border rounded px-4 py-2 w-full max-w-xs text-lg font-semibold bg-blue-50 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100"
              value={selectedBookIdx}
              onChange={handleBookChange}
            >
              {books.map((book, idx) => (
                <option key={book.name} value={idx}>
                  {book.name}
                </option>
              ))}
            </select>
            <div className="flex flex-wrap gap-2 items-center">
              {books[selectedBookIdx]?.chapters.map((_, idx) => (
                <button
                  key={idx}
                  className={`px-3 py-1 rounded font-semibold border text-base transition-all duration-150 ${
                    selectedChapterIdx === idx
                      ? "bg-blue-700 text-white border-blue-700 shadow"
                      : "bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-100 dark:bg-blue-900/40 dark:text-blue-100 dark:border-blue-800 dark:hover:bg-blue-800/60"
                  }`}
                  onClick={() => handleChapterChange(idx)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="border rounded-xl mb-5 p-6 bg-blue-50 dark:bg-blue-900/30 shadow">
            <h2 className="font-bold text-2xl mb-4 text-blue-800 dark:text-blue-100 text-center">
              {books[selectedBookIdx]?.name} - अध्याय {selectedChapterIdx + 1}
            </h2>
            <ul className="pl-0 text-blue-900 dark:text-blue-50 space-y-2">
              {books[selectedBookIdx]?.chapters[selectedChapterIdx]?.map((verseObj, vIdx) => (
                <li key={vIdx} className="flex items-start gap-2">
                  <span className="font-bold text-blue-700 dark:text-blue-300">{verseObj.verse}.</span>
                  <span>{verseObj.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Song Lyrics Tab */}
      {tab === "songs" && (
        <div className="bg-white dark:bg-blue-950/40 rounded-2xl shadow-lg p-6 mb-10">
          {/* Nepali Alphabet index */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {nepaliAlphabet.map(letter => (
              <button
                key={letter}
                className="px-3 py-1 rounded bg-blue-50 text-blue-700 font-bold hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-100 dark:hover:bg-blue-800/60 transition"
                onClick={() => setSongQuery(letter)}
              >
                {letter}
              </button>
            ))}
            <button
              className="px-3 py-1 rounded bg-blue-100 text-blue-900 font-bold hover:bg-blue-200 dark:bg-blue-800/60 dark:text-blue-100 dark:hover:bg-blue-700 transition"
              onClick={() => setSongQuery("")}
            >
              सबै
            </button>
          </div>
          <input
            className="mb-6 border rounded px-4 py-2 w-full max-w-md mx-auto block text-lg bg-blue-50 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100"
            placeholder="गीत शीर्षक वा बोल खोज्नुहोस्..."
            value={songQuery}
            onChange={e => setSongQuery(e.target.value)}
          />
          <div className="space-y-6">
            {filteredSongs.map((song, idx) => (
              <div key={song.title + idx} className="border rounded-xl p-5 bg-blue-50 dark:bg-blue-900/30 shadow">
                <h2 className="font-bold text-xl mb-2 text-blue-800 dark:text-blue-100">{song.title}</h2>
                <pre className="text-blue-900 dark:text-blue-50 whitespace-pre-wrap mt-2">{song.lyrics}</pre>
              </div>
            ))}
            {filteredSongs.length === 0 && (
              <div className="text-center text-blue-700 dark:text-blue-200">गीत फेला परेन।</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
