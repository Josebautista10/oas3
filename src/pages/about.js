import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="mt-28 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          MyBusiness has been providing high-quality services for over 10 years.
        </p>
        <p className="text-lg">
          We focus on innovation, efficiency, and customer satisfaction. Your success is our priority.
        </p>
      </main>
      <Footer />
    </>
  );
}
