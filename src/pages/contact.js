import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="mt-28 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-4">Email: contact@mybusiness.com</p>
        <p className="text-lg mb-4">Phone: (123) 456-7890</p>
        <p className="text-lg">
          Or fill out our contact form and we will get back to you promptly.
        </p>
      </main>
      <Footer />
    </>
  );
}
