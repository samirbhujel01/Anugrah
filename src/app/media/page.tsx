import React from "react";

export default function MediaPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Sermons & Media</h1>
      <div className="mb-6">
        <label className="mr-2 font-medium">Filter by:</label>
        <select className="border rounded px-3 py-1 mr-2">
          <option>Topic</option>
        </select>
        <select className="border rounded px-3 py-1 mr-2">
          <option>Date</option>
        </select>
        <select className="border rounded px-3 py-1">
          <option>Speaker</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {/* Sermon/archive items */}
        <div className="bg-blue-50 border rounded p-4 flex flex-col">
          <div className="font-bold mb-1">"Living Faith in Today's World"</div>
          <div className="text-xs text-gray-600 mb-2">May 2025 | Pastor</div>
          <a className="text-blue-700 underline" href="#">Watch</a>
        </div>
        <div className="bg-blue-50 border rounded p-4 flex flex-col">
          <div className="font-bold mb-1">"Grace Through Community"</div>
          <div className="text-xs text-gray-600 mb-2">April 2025 | Guest Speaker</div>
          <a className="text-blue-700 underline" href="#">Watch</a>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Photo & Video Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Gallery images/video thumbs */}
          <img src="/uploads/pastor.jpeg" alt="Pastor" className="w-full aspect-video object-cover rounded" />
          <img src="/uploads/youth2.jpeg" alt="Youth" className="w-full aspect-square object-cover rounded" />
          <img src="/uploads/752E510C-92D2-4402-94F9-CC344389BA8C.jpeg" alt="Event 1" className="w-full aspect-square object-cover rounded" />
          <img src="/uploads/received_600128525361581.jpeg" alt="Event 2" className="w-full aspect-square object-cover rounded" />
          <img src="/uploads/20231202_160811.jpg" alt="Event 3" className="w-full aspect-square object-cover rounded" />
          <img src="/uploads/Messenger_creation_8B1D0793-4A19-40A1-8994-0CBB3C827C57.jpeg" alt="Messenger 1" className="w-full aspect-square object-cover rounded" />
          <img src="/uploads/Messenger_creation_7F3B572C-F438-4AC1-AB5C-D3E34449273C.jpeg" alt="Messenger 2" className="w-full aspect-square object-cover rounded" />
          <img src="/uploads/Messenger_creation_26FBC90F-0A53-4483-8E35-1227B4614C82.jpeg" alt="Messenger 3" className="w-full aspect-square object-cover rounded" />
          <img src="/uploads/IMG_4797.jpeg" alt="IMG 4797" className="w-full aspect-square object-cover rounded" />
          <img src="/uploads/sec.jpeg" alt="Sec" className="w-full aspect-square object-cover rounded" />
          <img src="/uploads/prog.jpeg" alt="Prog" className="w-full aspect-square object-cover rounded" />
          <img src="/uploads/worshiper.jpeg" alt="Worshiper" className="w-full aspect-square object-cover rounded" />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-1">Watch Sermons</h2>
        <div className="w-full aspect-video bg-blue-100 flex items-center justify-center text-blue-400 rounded">
          YouTube/Vimeo Embed Placeholder
        </div>
      </div>
    </div>
  );
}
