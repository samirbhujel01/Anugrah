"use client";
import React, { useState, useMemo } from "react";
import bibleDataRaw from "@/data/ne_ulb.json";
import songDataRaw from "@/data/translated_songs_prope1.json";

// --- Add these types ---
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
    // Ensure chapter array exists
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

const songData = (songDataRaw.songs || []).map(song => ({
  title: song.title,
  lyrics: song.lyrics.join("\n"),
})) as Song[];

// Helper to get unique first letters from song titles (A-Z, Unicode safe)
const songAlphabet = Array.from(
  new Set(songData.map(song => (song.title[0] || "").toUpperCase()))
).sort();

export default function ResourcesPage() {
  const [tab, setTab] = useState<"bible" | "songs">("bible");
  const [bibleQuery, setBibleQuery] = useState("");
  const [songQuery, setSongQuery] = useState("");
  const [selectedBookIdx, setSelectedBookIdx] = useState(0);
  const [selectedChapterIdx, setSelectedChapterIdx] = useState(0);

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
      (song.title || "").toLowerCase().includes(q) ||
      (song.lyrics || "").toLowerCase().includes(q)
    );
  }, [songQuery, songData]);

  // For Nepali Bible, use the full books list for dropdown
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
    <div>
      <h1 className="text-3xl font-bold mb-5">Resources</h1>
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTab("bible")}
          className={`px-6 py-2 rounded-t font-semibold ${tab === "bible" ? "bg-blue-700 text-white" : "bg-blue-50 text-blue-900"}`}
        >
          Bible
        </button>
        <button
          onClick={() => setTab("songs")}
          className={`px-6 py-2 rounded-t font-semibold ${tab === "songs" ? "bg-blue-700 text-white" : "bg-blue-50 text-blue-900"}`}
        >
          Song Lyrics
        </button>
      </div>

      {/* Bible Tab */}
      {tab === "bible" && (
        <div>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <select
              className="border rounded px-4 py-2 w-full max-w-xs"
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
                  className={`px-3 py-1 rounded font-semibold border ${
                    selectedChapterIdx === idx
                      ? "bg-blue-700 text-white border-blue-700"
                      : "bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-100"
                  }`}
                  onClick={() => handleChapterChange(idx)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="border rounded mb-5 p-4">
            <h2 className="font-bold text-xl mb-2">{books[selectedBookIdx]?.name} - अध्याय {selectedChapterIdx + 1}</h2>
            <ul className="pl-4 text-gray-700">
              {books[selectedBookIdx]?.chapters[selectedChapterIdx]?.map((verseObj, vIdx) => (
                <li key={vIdx}><b>{verseObj.verse}.</b> {verseObj.text}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Song Lyrics Tab */}
      {tab === "songs" && (
        <div>
          {/* Alphabet index */}
          <div className="flex flex-wrap gap-2 mb-4">
            {songAlphabet.map(letter => (
              <button
                key={letter}
                className="px-3 py-1 rounded bg-blue-50 text-blue-700 font-bold hover:bg-blue-200 transition"
                onClick={() => setSongQuery(letter)}
              >
                {letter}
              </button>
            ))}
            <button
              className="px-3 py-1 rounded bg-blue-100 text-blue-900 font-bold hover:bg-blue-200 transition"
              onClick={() => setSongQuery("")}
            >
              All
            </button>
          </div>
          <input
            className="mb-6 border rounded px-4 py-2 w-full max-w-md"
            placeholder="Search song title or lyric keyword..."
            value={songQuery}
            onChange={e => setSongQuery(e.target.value)}
          />
          <div className="space-y-6">
            {filteredSongs.map((song, idx) => (
              <div key={song.title + idx} className="border rounded mb-5 p-4 bg-blue-50">
                <h2 className="font-bold text-xl mb-1">{song.title}</h2>
                <pre className="text-gray-800 whitespace-pre-wrap mt-2">{song.lyrics}</pre>
              </div>
            ))}
            {filteredSongs.length === 0 && <div>No songs found.</div>}
          </div>
        </div>
      )}
    </div>
  );
}
