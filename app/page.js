export default function SodaSinCoWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-teal-500 to-blue-600 text-white">
      {/* Find Us This Week Section */}
      <section className="bg-black/80 backdrop-blur-md py-6 px-4 text-center border-b border-white/20">
        <h2 className="text-2xl md:text-3xl font-extrabold">📍 Find Us This Week</h2>
        <p className="mt-2 text-lg">Follow us for this week’s pop‑up schedule & live location updates.</p>

        <div className="flex justify-center gap-6 mt-6">
          {/* Instagram Icon */}
          <a
            href="https://instagram.com/sodasinco"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 p-4 rounded-full shadow-lg transition hover:scale-110"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm4.25 2.5A5.75 5.75 0 106 12a5.756 5.756 0 006-5.5zm0 2A3.75 3.75 0 118.25 12 3.754 3.754 0 0112 8.5zm5.25-.75a1 1 0 110 2 1 1 0 010-2z" />
            </svg>
          </a>

          {/* Facebook Icon */}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 p-4 rounded-full shadow-lg transition hover:scale-110"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M13 22v-9h3l1-4h-4V7c0-1.1.3-2 2-2h2V1.1C16.7 1 15.6 1 14.4 1 11.7 1 10 2.6 10 5.5V9H7v4h3v9h3z" />
            </svg>
          </a>

          {/* TikTok Icon */}
          <a
            href="https://www.tiktok.com/@soda.sin.co"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-gray-200 p-4 rounded-full shadow-lg transition hover:scale-110"
            aria-label="TikTok"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M21 8.5a7.5 7.5 0 01-4.5-1.5V15a6 6 0 11-6-6c.2 0 .4 0 .6.03v3.1a3 3 0 10 2.4 2.94V2h3a4.5 4.5 0 004.5 4.5v2z" />
            </svg>
          </a>
        </div>
      </section>
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Soda Sin Co</h1>
        <p className="text-xl md:text-2xl mb-6">Sinfully Good Dirty Sodas</p>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          A mobile dirty soda trailer serving bold, fully customizable drinks at pop-ups and events in Vacaville & Dixon, CA.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#menu"
            className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            View Menu
          </a>
          <a
            href="#book"
            className="bg-black/30 border border-white px-6 py-3 rounded-2xl hover:bg-black/50 transition"
          >
            Book Us
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white text-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg leading-relaxed">
            Soda Sin Co is a mobile dirty soda trailer bringing bold flavors, creamy add-ins, and fun custom creations to local events and pop-ups. Choose your base soda, add flavor syrups, top it with cream, and make it a SIN.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Signature Sins</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Black Cherry Vice",
              "Sinister Lime",
              "Forbidden Dr.",
              "Midnight Razz",
              "Vanilla Vice",
              "Crimson Apple",
              "Blue Inferno",
            ].map((item) => (
              <div key={item} className="bg-white text-gray-800 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
                <h3 className="text-2xl font-semibold mb-2">{item}</h3>
                <p>Large (32 oz) – $7</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Lemonades</h2>
            <p>Pink Angel • Sinful Sunset • Lethal Lemon</p>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Sizes & Pricing</h2>
            <p>Small (16 oz) – $4.50</p>
            <p>Medium (24 oz) – $6</p>
            <p>Large (32 oz) – $7</p>
            <p className="mt-4">Make It A Sin – $1.50 (Cream + Extra Flavor + Extra Sweet)</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="bg-white text-gray-800 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Book Soda Sin Co</h2>
          <p className="text-lg mb-8">
            Available for markets, private parties, school events, corporate gatherings, and festivals in Vacaville & Dixon, CA.
          <br /><br />
          📧 Email us directly at <a href="mailto:sodasincompany@gmail.com" className="text-pink-600 font-semibold">sodasincompany@gmail.com</a>
          </p>
          <form className="grid gap-4 text-left">
            <input className="p-3 border rounded-xl" placeholder="Your Name" />
            <input className="p-3 border rounded-xl" placeholder="Email" />
            <input className="p-3 border rounded-xl" placeholder="Event Date" />
            <textarea className="p-3 border rounded-xl" placeholder="Tell us about your event" rows="4" />
            <button className="bg-pink-600 text-white py-3 rounded-2xl font-semibold hover:bg-pink-700 transition">
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>

      {/* Social CTA Section */}
      <section className="bg-black py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Follow Us for Pop‑Up Locations & Updates</h2>
        <p className="mb-8 text-lg opacity-90">We post weekly locations, event schedules, and new drink drops.</p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Instagram Button */}
          <a
            href="https://instagram.com/sodasinco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-pink-600 hover:bg-pink-700 px-6 py-4 rounded-2xl text-lg font-semibold shadow-xl transition hover:scale-105"
          >
            <span>Instagram</span>
          </a>

          {/* Facebook Button */}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-700 hover:bg-blue-800 px-6 py-4 rounded-2xl text-lg font-semibold shadow-xl transition hover:scale-105"
          >
            <span>Facebook</span>
          </a>

          {/* TikTok Button */}
          <a
            href="https://www.tiktok.com/@soda.sin.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-black hover:bg-gray-200 px-6 py-4 rounded-2xl text-lg font-semibold shadow-xl transition hover:scale-105"
          >
            <span>TikTok</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-black/60">
        <p className="text-lg font-semibold">Soda Sin Co</p>
        <p className="mt-2">📧 sodasincompany@gmail.com</p>
        <p className="mt-4 text-sm opacity-80">© {new Date().getFullYear()} Soda Sin Co All rights reserved.</p>
      </footer>
    </div>
  );
}
