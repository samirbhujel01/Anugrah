import React from "react";

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <section className="mb-8 max-w-lg">
        <form className="flex flex-col gap-4 bg-blue-50 p-6 rounded border shadow">
          <input type="text" required placeholder="Name" className="rounded px-3 py-2 border" />
          <input type="email" required placeholder="Email" className="rounded px-3 py-2 border" />
          <textarea required className="rounded px-3 py-2 border" placeholder="Your message (or prayer request)"></textarea>
          <button type="submit" className="bg-blue-700 text-white rounded py-2 font-semibold hover:bg-blue-800">Send</button>
        </form>
      </section>
      <section className="mb-8">
        <div className="font-bold">Anugrah Church</div>
        <div>123 Main St, City, State</div>
        <div className="my-2 w-full h-56 bg-blue-100 flex items-center text-blue-400 justify-center rounded">Google Map Placeholder</div>
        <div><b>Phone:</b> <a href="tel:+10001234567" className="text-blue-800 underline">(000) 123-4567</a></div>
        <div><b>Email:</b> <a href="mailto:info@anugrahchurch.org" className="underline">info@anugrahchurch.org</a></div>
        <div className="mt-2">
          <a href="https://facebook.com" className="mr-3 underline text-blue-600">Facebook</a>
          <a href="https://instagram.com" className="underline text-pink-600">Instagram</a>
        </div>
      </section>
    </div>
  );
}
