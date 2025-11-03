import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="mt-28 px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2">Consulting</h2>
            <p>Expert advice to optimize your business strategy.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2">Development</h2>
            <p>Custom web and mobile solutions tailored to your needs.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2">Marketing</h2>
            <p>Digital marketing and SEO strategies that deliver results.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
