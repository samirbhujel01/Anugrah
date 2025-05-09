import React from "react";

export default function PrayerRequestsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-900 text-center tracking-tight drop-shadow">
        Prayer Requests
      </h1>
      <div className="max-w-lg mx-auto mb-10">
        <form className="flex flex-col gap-5 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-lg">
          <input
            type="text"
            required
            placeholder="Name (or Anonymous)"
            className="rounded px-4 py-3 border border-blue-200 focus:ring-2 focus:ring-blue-300 outline-none text-lg"
          />
          <textarea
            required
            className="rounded px-4 py-3 border border-blue-200 focus:ring-2 focus:ring-blue-300 outline-none text-lg min-h-[100px]"
            placeholder="Your prayer request"
          ></textarea>
          <label className="flex gap-2 items-center text-sm text-blue-700 font-medium">
            <input type="checkbox" className="accent-blue-600" /> Submit as Anonymous
          </label>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white rounded-full py-3 font-bold text-lg shadow transition"
          >
            Submit Request
          </button>
        </form>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">Answered Prayers</h2>
        <ul className="space-y-4 max-w-lg mx-auto">
          <li className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl shadow flex flex-col">
            <b className="text-green-900 mb-1">"My job interview was successful – thank you for your prayers!"</b>
            <span className="text-xs text-green-700">April, Church Member</span>
          </li>
          <li className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl shadow flex flex-col">
            <b className="text-green-900 mb-1">"God answered in my family's health challenge."</b>
            <span className="text-xs text-green-700">March, Anonymous</span>
          </li>
        </ul>
      </div>
      <div className="text-center text-blue-700 mt-10">
        <span className="inline-block bg-blue-100 px-6 py-3 rounded-full font-semibold shadow">
          “Let us pray for one another.” – James 5:16
        </span>
      </div>
    </div>
  );
}
