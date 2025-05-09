import React from "react";

export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Service Times & Location</h2>
        <ul className="mb-2 text-lg">
          <li>Sundays: 10:00 AM Worship Service</li>
          <li>Wednesdays: 7:00 PM Prayer & Bible Study</li>
        </ul>
        <div className="mb-2">123 Main St, City, State (Map Below)</div>
        <div className="w-full h-64 bg-blue-100 flex items-center justify-center text-blue-400 rounded">Google Map Placeholder</div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Join Online</h2>
        <div className="w-full h-56 bg-blue-100 flex items-center justify-center text-blue-400 rounded mb-2">Live Stream/Sermon Video Placeholder</div>
        <a href="/media" className="text-blue-700 underline">View Past Sermons</a>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Upcoming Sermon Series</h2>
        <div className="bg-white border rounded shadow p-4">
          <div className="font-bold">Faith in Action</div>
          <div className="text-gray-600">Exploring practical expressions of faith in everyday life. May 2025 Series.</div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Services Calendar</h2>
        <div className="w-full h-32 bg-blue-50 flex items-center justify-center text-blue-400 rounded">Service Calendar Placeholder</div>
      </section>
    </div>
  );
}
