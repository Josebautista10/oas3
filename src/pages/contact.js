import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-28 max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-center text-oas3-blue">Contact Us</h1>
        <p className="text-gray-700 text-center mb-8">
          Fill out the form below or call/email us to get started.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-oas3-blue"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-oas3-blue"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              placeholder="Your message"
              rows="5"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-oas3-blue"
            />
          </div>
          <button
            type="submit"
            className="bg-oas3-red text-white px-6 py-3 rounded-md shadow hover:bg-oas3-red/90"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center text-gray-700">
          <p>Or reach us at:</p>
          <p>Phone: <a href="tel:+1234567890" className="text-oas3-blue hover:underline">+1 234-567-890</a></p>
          <p>Email: <a href="mailto:info@oas3.com" className="text-oas3-blue hover:underline">info@oas3.com</a></p>
        </div>
      </main>
      <Footer />
    </>
  );
}
