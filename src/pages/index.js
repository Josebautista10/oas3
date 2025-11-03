import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-28 px-6 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mt-10">
          <h1 className="text-5xl font-bold mb-6">Grow Your Business with Us</h1>
          <p className="text-lg mb-8">
            We provide top-quality services that help your business thrive.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </section>

        {/* Services Section */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2">Consulting</h2>
            <p>Expert advice to grow your business efficiently.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2">Development</h2>
            <p>Web and mobile solutions tailored to your needs.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
