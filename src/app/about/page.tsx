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
        <p className="text-base text-blue-600 italic">
          “Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.” <br />
          <span className="not-italic font-medium">- Matthew 28:19-20</span>
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 text-blue-800">Our History</h2>
        <p className="text-base text-gray-700">
          Founded in <span className="font-semibold text-blue-700">2018</span>, Anugrah Church has been a place of worship and community for Nepali immigrants in the Western Massachusetts area. We strive to meet the spiritual needs of our community and support each other through the challenges of life in a new country.
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
        <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">Leadership &amp; Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
            <img
              src="/uploads/pastor.jpeg"
              alt="Pastor"
              className="w-20 h-20 object-cover rounded-full mb-3 border-4 border-blue-200 shadow"
            />
            <div className="font-semibold text-blue-900">Prem Giri</div>
            <div className="text-xs text-blue-700">Lead Pastor</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
            <img
              src="/uploads/img_4797.jpeg"
              alt="Associate"
              className="w-20 h-20 object-cover rounded-full mb-3 border-4 border-blue-200 shadow"
            />
            <div className="font-semibold text-blue-900">Tula Shankhar</div>
            <div className="text-xs text-blue-700">Elder</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
            <img
              src="/uploads/worshiper.jpeg"
              alt="Youth Director"
              className="w-20 h-20 object-cover rounded-full mb-3 border-4 border-blue-200 shadow"
            />
            <div className="font-semibold text-blue-900">Milan Oji</div>
            <div className="text-xs text-blue-700">Worship Leader</div>
          </div>
        </div>
      </section>

      {/* Youths Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">Youths</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-4">
          {/* Youth 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
        <div className="w-20 h-20 bg-blue-100 rounded-full mb-3 flex items-center justify-center overflow-hidden">
          <img
            src="/uploads/752E510C-92D2-4402-94F9-CC344389BA8C.jpeg"
            alt="Samir Bhujel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="font-semibold text-blue-900 text-center">Samir Bhujel</div>
        <div className="text-xs text-blue-700 text-center">Youth Leader</div>
          </div>
          {/* Youth 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
        <div className="w-20 h-20 bg-blue-100 rounded-full mb-3 flex items-center justify-center overflow-hidden">
          <img
            src="/uploads/youth2.jpeg"
            alt="Tarpan Shankar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="font-semibold text-blue-900 text-center">Tarpan Shankar</div>
        <div className="text-xs text-blue-700 text-center">Youth Leader</div>
          </div>
          {/* Youth 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
        <div className="w-20 h-20 bg-blue-100 rounded-full mb-3 flex items-center justify-center overflow-hidden">
          <img
            src="/uploads/IMG_5133.jpeg"
            alt="Sushil Gurung"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="font-semibold text-blue-900 text-center">Sushil Gurung</div>
        <div className="text-xs text-blue-700 text-center">Member</div>

          </div>
          {/* Youth 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
        <div className="w-20 h-20 bg-blue-100 rounded-full mb-3 flex items-center justify-center overflow-hidden">
          <img
            src="/uploads/IMG_5134.jpeg"
            alt="Sanjeev Pradhan"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="font-semibold text-blue-900 text-center">Sanjeev Pradhan</div>
        <div className="text-xs text-blue-700 text-center">Member</div>
          </div>
       {/* Youth Members 5-12 */}
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
      <div className="w-20 h-20 bg-blue-100 rounded-full mb-3 flex items-center justify-center overflow-hidden">
        <img
      src="/uploads/Samjauta Magar.png"
      alt="Samjauta Magar"
      className="w-full h-full object-cover"
        />
      </div>
      <div className="font-semibold text-blue-900 text-center">Samjauta Magar</div>
      <div className="text-sm text-gray-600 text-center">Member</div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
      <div className="w-20 h-20 bg-blue-100 rounded-full mb-3 flex items-center justify-center overflow-hidden">
        <img
      src="/uploads/Roshan Darjee.jpeg"
      alt="Roshan Darjee"
      className="w-full h-full object-cover"
        />
      </div>
      <div className="font-semibold text-blue-900 text-center">Roshan</div>
      <div className="text-sm text-gray-600 text-center">Member</div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
      <div className="w-20 h-20 bg-blue-100 rounded-full mb-3 flex items-center justify-center overflow-hidden">
        <img
      src="/uploads/Rupesh GUrung.jpeg"
      alt="Rupesh Gurung"
      className="w-full h-full object-cover"
        />
      </div>
      <div className="font-semibold text-blue-900 text-center">Rupesh Gurung</div>
      <div className="text-sm text-gray-600 text-center">Member</div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
      <div className="w-20 h-20 bg-blue-100 rounded-full mb-3 flex items-center justify-center overflow-hidden">
        <img
      src="/uploads/Suman Bhujel.jpeg"
      alt="Suman"
      className="w-full h-full object-cover"
        />
      </div>
      <div className="font-semibold text-blue-900 text-center">Suman</div>
      <div className="text-sm text-gray-600 text-center">Member</div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
      <div className="w-20 h-20 bg-blue-100 rounded-full mb-3 flex items-center justify-center overflow-hidden">
        <img
      src="/uploads/Daniel Shankar.jpeg"
      alt="Daniel Shankar"
      className="w-full h-full object-cover"
        />
      </div>
      <div className="font-semibold text-blue-900 text-center">Daniel</div>
      <div className="text-sm text-gray-600 text-center">Member</div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
      <div className="w-20 h-20 bg-blue-100 rounded-full mb-3 flex items-center justify-center overflow-hidden">
        <img
      src="/uploads/Birman Tamang.jpeg"
      alt="Birman Tamang"
      className="w-full h-full object-cover"
        />
      </div>
      <div className="font-semibold text-blue-900 text-center">Birman</div>
      <div className="text-sm text-gray-600 text-center">Member</div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
      <div className="w-20 h-20 bg-blue-100 rounded-full mb-3 flex items-center justify-center overflow-hidden">
        <img
      src="/uploads/Anu Tamang.png"
      alt="Anu Tamang"
      className="w-full h-full object-cover"
        />
      </div>
      <div className="font-semibold text-blue-900 text-center">Anu</div>
      <div className="text-sm text-gray-600 text-center">Member</div>
    </div>
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-blue-100 hover:shadow-xl transition">
      <div className="w-20 h-20 bg-blue-100 rounded-full mb-3 flex items-center justify-center overflow-hidden">
        <img
      src="/uploads/Soma Magar Subba.jpeg"
      alt="Soma Magar Subba"
      className="w-full h-full object-cover"
        />
      </div>
      <div className="font-semibold text-blue-900 text-center">Soma Magar Subba</div>
      <div className="text-sm text-gray-600 text-center">Member</div>
    </div>
    </div> {/* Closing the youths grid container */}
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
