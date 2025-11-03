import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Post-Construction Cleaning",
      description: "Complete cleaning for homes or offices after construction or renovation. We remove dust, debris, and residues to leave the space spotless.",
      color: "text-oas3-blue",
    },
    {
      title: "Residential & Commercial Cleaning",
      description: "Flexible cleaning services tailored to your schedule, including weekly, biweekly, or one-time visits for homes and offices.",
      color: "text-oas3-yellow",
    },
    {
      title: "Spring Cleaning",
      description: "A deep, thorough cleaning of every corner of your home, perfect for seasonal refreshes and maintaining a pristine environment.",
      color: "text-oas3-red",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-28 max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-oas3-blue">Our Services</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {services.map((service, idx) => (
            <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition">
              <h2 className={`text-xl font-semibold mb-2 ${service.color}`}>{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block bg-oas3-red text-white px-6 py-3 rounded-md shadow hover:bg-oas3-red/90"
          >
            Request Service
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
