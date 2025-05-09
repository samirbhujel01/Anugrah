import React from "react";

export default function MediaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-900 text-center tracking-tight drop-shadow">
      Media
      </h1>

      {/* Filters */}
      <div className="mb-10 flex flex-wrap gap-4 justify-center">
        <select className="border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-300">
          <option>Filter by Topic</option>
        </select>
        <select className="border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-300">
          <option>Filter by Date</option>
        </select>
        <select className="border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-300">
          <option>Filter by Speaker</option>
        </select>
      </div>

      {/* Sermon/archive items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 rounded-2xl p-6 flex flex-col shadow hover:shadow-lg transition">
          <div className="font-bold text-lg mb-2 text-blue-900">"Living Faith in Today's World"</div>
          <div className="text-xs text-blue-700 mb-3">May 2025 | Pastor</div>
          <a className="text-blue-700 underline font-semibold hover:text-blue-900" href="#">
            Watch
          </a>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 rounded-2xl p-6 flex flex-col shadow hover:shadow-lg transition">
          <div className="font-bold text-lg mb-2 text-blue-900">"Grace Through Community"</div>
          <div className="text-xs text-blue-700 mb-3">April 2025 | Guest Speaker</div>
          <a className="text-blue-700 underline font-semibold hover:text-blue-900" href="#">
            Watch
          </a>
        </div>
      </div>

      {/* Gallery */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-5 text-blue-800 text-center">Photo & Video Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <img src="/uploads/pastor.jpeg" alt="Pastor" className="w-full aspect-video object-cover rounded-xl shadow" />
          <img src="/uploads/youth2.jpeg" alt="Youth" className="w-full aspect-square object-cover rounded-xl shadow" />
          <img src="/uploads/752E510C-92D2-4402-94F9-CC344389BA8C.jpeg" alt="Event 1" className="w-full aspect-square object-cover rounded-xl shadow" />
          <img src="/uploads/received_600128525361581.jpeg" alt="Event 2" className="w-full aspect-square object-cover rounded-xl shadow" />
          <img src="/uploads/20231202_160811.jpg" alt="Event 3" className="w-full aspect-square object-cover rounded-xl shadow" />
          <img src="/uploads/Messenger_creation_8B1D0793-4A19-40A1-8994-0CBB3C827C57.jpeg" alt="Messenger 1" className="w-full aspect-square object-cover rounded-xl shadow" />
          <img src="/uploads/Messenger_creation_7F3B572C-F438-4AC1-AB5C-D3E34449273C.jpeg" alt="Messenger 2" className="w-full aspect-square object-cover rounded-xl shadow" />
          <img src="/uploads/Messenger_creation_26FBC90F-0A53-4483-8E35-1227B4614C82.jpeg" alt="Messenger 3" className="w-full aspect-square object-cover rounded-xl shadow" />
          <img src="/uploads/IMG_4797.jpeg" alt="IMG 4797" className="w-full aspect-square object-cover rounded-xl shadow" />
          <img src="/uploads/sec.jpeg" alt="Sec" className="w-full aspect-square object-cover rounded-xl shadow" />
          <img src="/uploads/prog.jpeg" alt="Prog" className="w-full aspect-square object-cover rounded-xl shadow" />
          <img src="/uploads/worshiper.jpeg" alt="Worshiper" className="w-full aspect-square object-cover rounded-xl shadow" />
        </div>
      </div>

      {/* Video Embed */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-3 text-blue-800 text-center">Watch Videos</h2>
        <div className="w-full aspect-video bg-blue-100 flex items-center justify-center text-blue-400 rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/bujF6mH9ECE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
