import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-900 text-center tracking-tight drop-shadow">
        About Anugrah Church
      </h1>
      <section className="mb-10 text-center">
        <h2 className="text-2xl font-bold mb-3 text-blue-800">Our Mission & Vision</h2>
        <p className="text-lg mb-2 text-gray-700">
          We are a welcoming Nepali community rooted in faith, offering hope and love to those who have immigrated to the United States and are seeking a place to connect with God and each other.
        </p>
        <p className="text-base text-blue-600">
          Vision: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.” - Matthew 28:19-20
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 text-blue-800">Our History</h2>
        <p className="text-base text-gray-700">
          Founded in <span className="font-semibold text-blue-700">[2018]</span>, Anugrah Church has been a place of worship and community for Nepali immigrants in the Western Massachusetts area. We strive to meet the spiritual needs of our community and support each other through the challenges of life in a new country.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 text-blue-800">Core Beliefs</h2>
        <ul className="list-disc ml-8 text-gray-700 space-y-1">
          <li>Biblical teaching and spiritual growth</li>
          <li>Serving our community and supporting our brothers and sisters</li>
          <li>Worship, prayer, and fellowship in the Nepali context</li>
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">Leadership & Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100">
            <img
              src="/uploads/pastor.jpeg"
              alt="Pastor"
              className="w-20 h-20 object-cover rounded-full mb-3 border-4 border-blue-200 shadow"
            />
            <div className="font-semibold text-blue-900">Prem Giri</div>
            <div className="text-xs text-blue-700">Lead Pastor</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100">
            <img
              src="/uploads/img_4797.jpeg"
              alt="Associate"
              className="w-20 h-20 object-cover rounded-full mb-3 border-4 border-blue-200 shadow"
            />
            <div className="font-semibold text-blue-900">Tula Shankhar</div>
            <div className="text-xs text-blue-700">Elder</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100">
            <img
              src="/uploads/worshiper.jpeg"
              alt="Youth Director"
              className="w-20 h-20 object-cover rounded-full mb-3 border-4 border-blue-200 shadow"
            />
            <div className="font-semibold text-blue-900">Milan Oji</div>
            <div className="text-xs text-blue-700"> Worship Leader</div>
          </div>
        </div>
      </section>
      <section className="mb-10 text-center">
        <h2 className="text-xl font-bold mb-2 text-blue-800">Get Involved!</h2>
        <p className="mb-2 text-gray-700">
          Want to serve, join a group, or need prayer?{" "}
          <a href="/contact" className="text-blue-700 underline font-medium hover:text-blue-900 transition">
            Contact us
          </a>{" "}
          or submit a prayer request.
        </p>
        <a
          href="/prayer-requests"
          className="inline-block bg-gradient-to-r from-blue-700 to-blue-400 hover:from-blue-800 hover:to-blue-500 text-white rounded-full px-8 py-3 mt-2 font-bold shadow transition"
        >
          Request Prayer
        </a>
      </section>
    </div>
  );
}
