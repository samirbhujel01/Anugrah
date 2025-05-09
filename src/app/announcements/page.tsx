"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";

interface Announcement {
  date: string;
  sunday_lead: string;
  sunday_message: string;
  cottage_lead: string;
  cottage_message: string;
  cottage_address: string;
  additional: string;
}

const SHEETDB_URL = "https://sheetdb.io/api/v1/ciujdw9np10l2";

export default function AnnouncementsPage() {
  const { data: session, status } = useSession();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [form, setForm] = useState<Announcement>({
    date: "",
    sunday_lead: "",
    sunday_message: "",
    cottage_lead: "",
    cottage_message: "",
    cottage_address: "",
    additional: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch announcements from SheetDB
  useEffect(() => {
    async function fetchAnnouncements() {
      setLoading(true);
      const res = await fetch(SHEETDB_URL);
      const data = await res.json();
      setAnnouncements(data.reverse()); // newest first
      setLoading(false);
    }
    fetchAnnouncements();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // When posting, delete all previous announcements and add the new one
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Delete all previous announcements
    await fetch(SHEETDB_URL, { method: "DELETE" });

    // Post the new announcement
    await fetch(SHEETDB_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: form }),
    });

    // Refetch announcements
    const res = await fetch(SHEETDB_URL);
    const data = await res.json();
    setAnnouncements(data.reverse());
    setForm({
      date: "",
      sunday_lead: "",
      sunday_message: "",
      cottage_lead: "",
      cottage_message: "",
      cottage_address: "",
      additional: "",
    });
    setLoading(false);
  }

  if (status === "loading") {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 text-center text-blue-700">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-900 text-center tracking-tight drop-shadow">
        Announcements & Schedules
      </h1>

      {/* Announcements List at the Top */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Latest Announcement</h2>
        <div className="space-y-6">
          {loading && <div className="text-center text-blue-400">Loading...</div>}
          {announcements.length === 0 && !loading && (
            <div className="text-center text-blue-400">No announcements yet.</div>
          )}
          {announcements[0] && (
            <div
              className="bg-blue-50 dark:bg-blue-900 border border-blue-100 dark:border-blue-800 rounded-xl p-6 shadow"
            >
              <div className="flex flex-wrap gap-4 justify-between mb-2">
                <span className="font-bold text-blue-800 dark:text-blue-100">{announcements[0].date}</span>
                <span className="font-semibold text-blue-700 dark:text-blue-200">Sunday Lead: {announcements[0].sunday_lead}</span>
                <span className="font-semibold text-blue-700 dark:text-blue-200">Sunday Message: {announcements[0].sunday_message}</span>
              </div>
              {(announcements[0].cottage_lead || announcements[0].cottage_message || announcements[0].cottage_address) && (
                <div className="mb-1">
                  <span className="font-semibold">Cottage Meeting: </span>
                  <span>
                    {announcements[0].cottage_lead && `Lead: ${announcements[0].cottage_lead}; `}
                    {announcements[0].cottage_message && `Message: ${announcements[0].cottage_message}; `}
                    {announcements[0].cottage_address && `Address: ${announcements[0].cottage_address}`}
                  </span>
                </div>
              )}
              {announcements[0].additional && (
                <div>
                  <span className="font-semibold">Additional: </span>
                  <span>{announcements[0].additional}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Announcement Form - Only for logged in users */}
      {session ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-blue-950 border border-blue-100 dark:border-blue-900 rounded-2xl shadow-lg p-8 flex flex-col gap-4"
        >
          <h2 className="text-xl font-bold mb-2 text-blue-800 text-center">Post a New Announcement</h2>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="rounded px-4 py-2 border border-blue-200 focus:ring-2 focus:ring-blue-300 outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Sunday Service Lead By</label>
            <input
              type="text"
              name="sunday_lead"
              value={form.sunday_lead}
              onChange={handleChange}
              className="rounded px-4 py-2 border border-blue-200 focus:ring-2 focus:ring-blue-300 outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Sunday Service Message By</label>
            <input
              type="text"
              name="sunday_message"
              value={form.sunday_message}
              onChange={handleChange}
              className="rounded px-4 py-2 border border-blue-200 focus:ring-2 focus:ring-blue-300 outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Cottage Meeting Lead By</label>
            <input
              type="text"
              name="cottage_lead"
              value={form.cottage_lead}
              onChange={handleChange}
              className="rounded px-4 py-2 border border-blue-200 focus:ring-2 focus:ring-blue-300 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Cottage Meeting Message By</label>
            <input
              type="text"
              name="cottage_message"
              value={form.cottage_message}
              onChange={handleChange}
              className="rounded px-4 py-2 border border-blue-200 focus:ring-2 focus:ring-blue-300 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Cottage Meeting Address</label>
            <input
              type="text"
              name="cottage_address"
              value={form.cottage_address}
              onChange={handleChange}
              className="rounded px-4 py-2 border border-blue-200 focus:ring-2 focus:ring-blue-300 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Additional Announcements</label>
            <textarea
              name="additional"
              value={form.additional}
              onChange={handleChange}
              className="rounded px-4 py-2 border border-blue-200 focus:ring-2 focus:ring-blue-300 outline-none"
              rows={2}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white rounded-full py-3 font-bold text-lg shadow transition mt-4"
            disabled={loading}
          >
            {loading ? "Posting..." : "Post Announcement"}
          </button>
        </form>
      ) : (
        <div className="text-center mt-8">
          <button
            onClick={() => signIn()}
            className="bg-blue-700 hover:bg-blue-800 text-white rounded-full py-3 px-8 font-bold text-lg shadow transition"
          >
            Sign in to post a new announcement
          </button>
        </div>
      )}
    </div>
  );
}