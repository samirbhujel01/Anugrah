"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ChurchMap = dynamic(() => import("./ChurchMap"), { ssr: false });

type Event = {
  title: string;
  date: string; // ISO string
  type: string;
};

export default function ServicesPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/by7pswvwuo12q")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch(() => setEvents([]));
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-900 dark:text-white text-center tracking-tight drop-shadow">
        Services
      </h1>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-100">Service Times & Location</h2>
        <div className="bg-blue-50 dark:bg-[#181f2e] border border-blue-200 dark:border-blue-900 rounded-xl shadow p-6 mb-4">
          <ul className="mb-4 text-lg space-y-2">
            <li>
              <span className="font-semibold text-blue-900 dark:text-white">Sundays:</span>{" "}
              <span className="text-blue-700 dark:text-blue-200">2:00 PM Worship Service</span>
            </li>
            <li>
              <span className="font-semibold text-blue-900 dark:text-white">Youth Fellowship:</span>{" "}
              <span className="text-blue-700 dark:text-blue-200">1:00 PM every other Saturday at church</span>
            </li>
          </ul>
          <div className="mb-4 text-blue-900 dark:text-white">
            <span className="font-semibold">Location:</span>{" "}
            91 Upper Church St, West Springfield, MA 01085
          </div>
          <div className="w-full h-64 bg-blue-100 dark:bg-[#232b3d] rounded-xl mt-4 shadow-inner overflow-hidden">
            <ChurchMap />
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-100">Upcoming Sermon Series</h2>
        <div className="bg-white dark:bg-[#181f2e] border border-blue-100 dark:border-blue-900 rounded-xl shadow p-6">
          <div className="font-bold text-blue-900 dark:text-white text-lg mb-1">Faith in Action</div>
          <div className="text-gray-600 dark:text-gray-300">
            Exploring practical expressions of faith in everyday life. May 2025 Series.
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-100">Services Calendar</h2>
        <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg bg-blue-50 dark:bg-[#181f2e] p-4">
          <Calendar
            onChange={(date) => setSelectedDate(date as Date)}
            value={selectedDate}
            tileContent={({ date }) => {
              if (
                events.some((event) => {
                  const d = new Date(event.date);
                  return (
                    d.getFullYear() === date.getFullYear() &&
                    d.getMonth() === date.getMonth() &&
                    d.getDate() === date.getDate()
                  );
                })
              ) {
                return (
                  <span className="block w-2 h-2 bg-blue-600 rounded-full mx-auto mt-1"></span>
                );
              }
              return null;
            }}
            tileClassName={({ date }) =>
              events.some((event) => {
                const d = new Date(event.date);
                return (
                  d.getFullYear() === date.getFullYear() &&
                  d.getMonth() === date.getMonth() &&
                  d.getDate() === date.getDate()
                );
              })
                ? "react-calendar__tile--hasActiveEvent"
                : undefined
            }
          />
        </div>
        {selectedDate && (
          <div className="mt-6 text-center text-blue-700 dark:text-blue-200 font-semibold text-lg">
            {events
              .filter((event) => {
                const d = new Date(event.date);
                return (
                  d.getFullYear() === selectedDate.getFullYear() &&
                  d.getMonth() === selectedDate.getMonth() &&
                  d.getDate() === selectedDate.getDate()
                );
              })
              .map((event, idx) => (
                <div key={idx} className="mb-2">
                  <span className="font-bold">{event.title}</span>{" "}
                  <span className="text-gray-600 dark:text-gray-300">
                    ({new Date(event.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })})
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200">{event.type}</span>
                </div>
              ))}
            {events.filter((event) => {
              const d = new Date(event.date);
              return (
                d.getFullYear() === selectedDate.getFullYear() &&
                d.getMonth() === selectedDate.getMonth() &&
                d.getDate() === selectedDate.getDate()
              );
            }).length === 0 && (
              <span className="text-blue-400 dark:text-blue-300">No events for this day.</span>
            )}
          </div>
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