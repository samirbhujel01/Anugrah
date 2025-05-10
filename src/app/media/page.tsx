import React from "react";

const galleryImages = [
  { src: "/uploads/pastor.jpeg", alt: "Pastor" },
  { src: "/uploads/youth2.jpeg", alt: "Youth" },
  { src: "/uploads/752E510C-92D2-4402-94F9-CC344389BA8C.jpeg", alt: "Event 1" },
  { src: "/uploads/received_600128525361581.jpeg", alt: "Event 2" },
  { src: "/uploads/20231202_160811.jpg", alt: "Event 3" },
  { src: "/uploads/Messenger_creation_8B1D0793-4A19-40A1-8994-0CBB3C827C57.jpeg", alt: "Messenger 1" },
  { src: "/uploads/Messenger_creation_7F3B572C-F438-4AC1-AB5C-D3E34449273C.jpeg", alt: "Messenger 2" },
  { src: "/uploads/Messenger_creation_26FBC90F-0A53-4483-8E35-1227B4614C82.jpeg", alt: "Messenger 3" },
  { src: "/uploads/IMG_4797.jpeg", alt: "IMG 4797" },
  { src: "/uploads/sec.jpeg", alt: "Sec" },
  { src: "/uploads/prog.jpeg", alt: "Prog" },
  { src: "/uploads/worshiper.jpeg", alt: "Worshiper" },
];

export default function MediaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-900 text-center tracking-tight drop-shadow">
        Media
      </h1>

      {/* Gallery */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-5 text-blue-800 text-center">Photo & Video Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <a
              key={img.src}
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-square object-cover rounded-xl shadow transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
              />
            </a>
          ))}
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
