import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-28 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-center text-oas3-blue">About OAS3services LTD.</h1>

        <section className="space-y-6 text-gray-700">
          <p>
            <strong>OAS3services LTD.</strong> is dedicated to providing reliable, detailed, and fully customized cleaning services for both residential and commercial clients. Our team focuses on punctuality, discretion, and total client satisfaction.
          </p>

          <p>
            Our mission is simple: we make homes and workplaces cleaner, healthier, and more organized, giving our clients the peace of mind to focus on what matters most. Every service is tailored to your needs, whether it’s a regular weekly cleaning, a biweekly visit, or a specialized spring cleaning.
          </p>

          <p>
            At OAS3services, we use our own professional equipment and high-quality cleaning products to ensure every job is done thoroughly and efficiently. From post-construction clean-ups to routine household maintenance, we guarantee meticulous attention to detail.
          </p>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-oas3-red">Why Choose OAS3services?</h2>
          <ul className="space-y-4 text-gray-700  list-inside text-left md:text-center max-w-2xl mx-auto">
            <li>✅ Experienced, trained, and professional staff</li>
            <li>✅ Fully equipped with top-quality cleaning tools and products</li>
            <li>✅ Tailored services to meet every client’s unique needs</li>
            <li>✅ Focused on punctuality, discretion, and complete satisfaction</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
