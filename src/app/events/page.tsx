"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Event = {
  title: string;
  date: string; // ISO string from SheetsDB
  type: "Services" | "Outreach" | "Fellowship";
};

const FILTERS = ["All", "Services", "Outreach", "Fellowship"] as const;

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", date: "", type: "Services" });
  const [submitting, setSubmitting] = useState(false);

  // Fetch events from SheetsDB on mount and after submit
  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/by7pswvwuo12q")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch(() => setEvents([]));
  }, []);

  const filteredEvents = events.filter(
    (event) =>
      (filter === "All" || event.type === filter) &&
      (!selectedDate ||
        (new Date(event.date).getFullYear() === selectedDate?.getFullYear() &&
          new Date(event.date).getMonth() === selectedDate?.getMonth() &&
          new Date(event.date).getDate() === selectedDate?.getDate()))
  );

  // Add event handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await fetch("https://sheetdb.io/api/v1/by7pswvwuo12q", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [form] }),
    });
    setForm({ title: "", date: "", type: "Services" });
    setShowForm(false);
    setSubmitting(false);
    // Refetch events after submit
    fetch("https://sheetdb.io/api/v1/by7pswvwuo12q")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-800 tracking-tight">
        Upcoming Events
      </h1>
      <section className="mb-10">
        <div className="mb-6 flex flex-wrap gap-3 justify-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`px-5 py-2 rounded-full border transition-all duration-200 shadow-sm font-semibold ${
                filter === f
                  ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white border-blue-600 scale-105"
                  : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"
              }`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <ul className="space-y-6">
          {filteredEvents.length === 0 && (
            <li className="text-gray-400 text-center">No events found.</li>
          )}
          {filteredEvents.map((event, idx) => (
            <li
              key={event.title + idx}
              className="bg-white/80 backdrop-blur border border-blue-100 rounded-xl px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between shadow-md hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="font-bold text-lg text-blue-900">{event.title}</div>
                <div className="text-gray-600 text-sm">
                  {new Date(event.date).toLocaleString(undefined, {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <span
                  className={`inline-block mt-2 px-3 py-1 text-xs rounded-full font-medium ${
                    event.type === "Services"
                      ? "bg-blue-100 text-blue-700"
                      : event.type === "Outreach"
                      ? "bg-green-100 text-green-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {event.type}
                </span>
              </div>
              <button className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white px-6 py-2 rounded-full font-bold shadow transition-all">
                View Details
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Events Calendar</h2>
        <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg bg-white/70 p-4">
          <Calendar
            onChange={(date) => setSelectedDate(date as Date)}
            value={selectedDate}
            tileContent={({ date }) => {
              if (
                events.some(
                  (event) => {
                    const d = new Date(event.date);
                    return (
                      d.getFullYear() === date.getFullYear() &&
                      d.getMonth() === date.getMonth() &&
                      d.getDate() === date.getDate()
                    );
                  }
                )
              ) {
                return (
                  <span className="block w-2 h-2 bg-blue-600 rounded-full mx-auto mt-1"></span>
                );
              }
              return null;
            }}
            tileClassName={({ date }) =>
              events.some(
                (event) => {
                  const d = new Date(event.date);
                  return (
                    d.getFullYear() === date.getFullYear() &&
                    d.getMonth() === date.getMonth() &&
                    d.getDate() === date.getDate()
                  );
                }
              )
                ? "react-calendar__tile--hasActiveEvent"
                : undefined
            }
          />
        </div>
        {selectedDate && (
          <div className="mt-6 text-center text-blue-700 font-semibold text-lg">
            Showing events for{" "}
            {selectedDate.toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        )}
      </section>
      <section className="text-center mt-10">
        <button
          className="bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white px-8 py-3 rounded-full shadow-lg font-extrabold text-lg transition-all"
          onClick={() => setShowForm((v) => !v)}
        >
          {showForm ? "Cancel" : "Submit Your Event"}
        </button>
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mt-8 bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto flex flex-col gap-4 border border-blue-100"
          >
            <input
              type="text"
              required
              placeholder="Event Title"
              className="border px-4 py-2 rounded"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <input
              type="datetime-local"
              required
              className="border px-4 py-2 rounded"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <select
              className="border px-4 py-2 rounded"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="Services">Services</option>
              <option value="Outreach">Outreach</option>
              <option value="Fellowship">Fellowship</option>
            </select>
            <button
              type="submit"
              disabled={submitting}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-bold shadow transition"
            >
              {submitting ? "Submitting..." : "Add Event"}
            </button>
          </form>
        )}
      </section>
      <style jsx global>{`
        .react-calendar {
          border: none;
          font-family: inherit;
          background: transparent;
        }
        .react-calendar__tile--hasActiveEvent {
          background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%) !important;
          color: #fff !important;
          border-radius: 0.75rem;
        }
        .react-calendar__tile--active {
          background: #2563eb !important;
          color: #fff !important;
        }
        .react-calendar__tile:enabled:hover,
        .react-calendar__tile:enabled:focus {
          background: #dbeafe !important;
          color: #1e40af !important;
        }
      `}</style>
    </div>
  );
}