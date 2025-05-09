import React from "react";

export default function HomePage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative flex flex-col items-center justify-center h-80 bg-blue-950 text-white rounded-xl shadow mb-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-700/80 rounded-xl z-10" />
        <div className="relative z-20 text-center pt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow">Welcome to Anugrah Church</h1>
          <p className="text-xl mb-6">Rooted in faith. Living in hope. Growing in love.</p>
          <a href="/services" className="inline-block bg-blue-600 hover:bg-blue-700 rounded px-6 py-3 text-lg font-semibold shadow">Join Us This Sunday</a>
        </div>
      </section>
      {/* Intro */}
      <section className="mb-10 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">A Friendly and Welcoming Community</h2>
        <p className="text-lg text-gray-700 mb-6">We are a vibrant family church with a heart for God, people, missions, and the city. No matter your story, you have a place here!</p>
        <a href="/about" className="text-blue-700 underline font-semibold">Learn More</a>
      </section>
      {/* Testimonial Section */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-blue-900">What People Are Saying</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded shadow p-5 flex flex-col justify-between">
            <blockquote className="mb-2">“Anugrah Church truly feels like home. I've grown in faith and friendship!”</blockquote>
            <span className="font-semibold text-blue-800 text-sm">– Jaya</span>
          </div>
          <div className="bg-white rounded shadow p-5 flex flex-col justify-between">
            <blockquote className="mb-2">“Warm, genuine people and inspiring worship every week!”</blockquote>
            <span className="font-semibold text-blue-800 text-sm">– Samuel</span>
          </div>
          <div className="bg-white rounded shadow p-5 flex flex-col justify-between">
            <blockquote className="mb-2">“I found hope, healing, and purpose here along with my family.”</blockquote>
            <span className="font-semibold text-blue-800 text-sm">– Anita</span>
          </div>
        </div>
      </section>
      {/* Latest Sermon section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2 text-blue-900">Latest Sermon</h2>
        <div className="bg-blue-50 p-5 rounded shadow flex flex-col sm:flex-row items-center gap-5">
          <div className="w-full sm:w-60 h-32 bg-blue-200 flex-shrink-0 flex items-center justify-center rounded mb-3 sm:mb-0">Video/Image</div>
          <div>
            <div className="font-bold text-lg mb-1">Faith Over Fear</div>
            <div className="mb-2 text-sm text-gray-500">Pastor | May 2025</div>
            <a href="/media" className="text-blue-700 underline font-medium">Watch Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
