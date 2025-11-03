import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-28 bg-white">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-oas3-blue">
            Your trusted partner in household care
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            OAS3services LTD. provides reliable and detailed cleaning services for homes and offices, tailored to your schedule and needs.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-oas3-blue text-white px-6 py-3 rounded-md shadow hover:bg-oas3-blue/90"
            >
              Request Service
            </Link>
            <Link
              href="/services"
              className="border border-gray-200 px-6 py-3 rounded-md text-gray-700 hover:bg-gray-50"
            >
              View Services
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="p-6 rounded-lg border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-oas3-blue">Post-Construction Cleaning</h3>
              <p className="text-gray-700">
                Complete cleaning for homes or offices after construction or renovation. We remove dust, debris, and residues to leave the space spotless.
              </p>
            </div>
            <div className="p-6 rounded-lg border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-oas3-yellow">Residential & Commercial Cleaning</h3>
              <p className="text-gray-700">
                Flexible cleaning services tailored to your schedule, including weekly, biweekly, or one-time visits for homes and offices.
              </p>
            </div>
            <div className="p-6 rounded-lg border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-oas3-red">Spring Cleaning</h3>
              <p className="text-gray-700">
                A deep, thorough cleaning of every corner of your home, perfect for seasonal refreshes and maintaining a pristine environment.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-block bg-oas3-red text-white px-6 py-3 rounded-md shadow hover:bg-oas3-red/90"
            >
              See All Services
            </Link>
          </div>
        </section>

        {/* About Teaser Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-oas3-blue">About OAS3services</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We provide dependable cleaning services with a focus on punctuality, discretion, and client satisfaction. Using our own professional tools and products, we ensure every space is thoroughly cleaned.
          </p>
          <Link
            href="/about"
            className="inline-block bg-oas3-blue text-white px-6 py-3 rounded-md shadow hover:bg-oas3-blue/90"
          >
            Learn More About Us
          </Link>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-oas3-red">Ready to make your home shine?</h2>
          <Link
            href="/contact"
            className="inline-block bg-oas3-red text-white px-6 py-3 rounded-md shadow hover:bg-oas3-red/90"
          >
            Contact Us Today
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
