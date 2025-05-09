import React from "react";

export default function HomePage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative flex flex-col items-center justify-center h-[28rem] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white rounded-2xl shadow-xl mb-12 overflow-hidden">
        <img
          src="/uploads/pastor.jpeg"
          alt="Church"
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-700/80 z-10" />
        <div className="relative z-20 text-center pt-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-tight">
            Welcome to Anugrah Church
          </h1>
          <p className="text-2xl mb-8 font-medium drop-shadow">
            Rooted in faith. Living in hope. Growing in love.
          </p>
          <a
            href="/services"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 rounded-full px-8 py-4 text-xl font-bold shadow-lg transition-all"
          >
            Join Us This Sunday
          </a>
        </div>
      </section>
      {/* Intro */}
      <section className="mb-14 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-5 text-blue-900">A Friendly and Welcoming Community</h2>
        <p className="text-lg text-gray-700 mb-7">
          We are a vibrant family church with a heart for God, people, missions, and the city. No matter your story, you have a place here!
        </p>
        <a
          href="/about"
          className="inline-block text-blue-700 underline font-semibold text-lg hover:text-blue-900 transition"
        >
          Learn More
        </a>
      </section>
      {/* Testimonial Section */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">What People Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center border border-blue-100">
            <svg className="w-10 h-10 text-blue-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2 2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z"></path></svg>
            <blockquote className="mb-3 text-lg text-gray-800 font-medium text-center">“Anugrah Church truly feels like home. I've grown in faith and friendship!”</blockquote>
            <span className="font-semibold text-blue-800 text-sm">– Jaya</span>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center border border-blue-100">
            <svg className="w-10 h-10 text-blue-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2 2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z"></path></svg>
            <blockquote className="mb-3 text-lg text-gray-800 font-medium text-center">“Warm, genuine people and inspiring worship every week!”</blockquote>
            <span className="font-semibold text-blue-800 text-sm">– Samuel</span>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center border border-blue-100">
            <svg className="w-10 h-10 text-blue-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2 2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z"></path></svg>
            <blockquote className="mb-3 text-lg text-gray-800 font-medium text-center">“I found hope, healing, and purpose here along with my family.”</blockquote>
            <span className="font-semibold text-blue-800 text-sm">– Anita</span>
          </div>
        </div>
      </section>
      {/* Latest Sermon section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center">Latest Sermon</h2>
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-7 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center gap-7 border border-blue-100">
          <img
            src="/uploads/752E510C-92D2-4402-94F9-CC344389BA8C.jpeg"
            alt="Latest Sermon"
            className="w-full sm:w-64 h-40 object-cover rounded-xl shadow mb-4 sm:mb-0"
          />
          <div className="flex-1">
            <div className="font-bold text-xl mb-2 text-blue-800">Faith Over Fear</div>
            <div className="mb-3 text-sm text-gray-500">Pastor | May 2025</div>
            <a
              href="/media"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold shadow transition"
            >
              Watch Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
