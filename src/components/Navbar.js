import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-oas3-blue font-bold text-xl">
          OAS3
        </Link>
        <div className="flex gap-4">
          <Link href="/services" className="text-gray-700 hover:text-oas3-blue">
            Services
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-oas3-blue">
            About
          </Link>
          <Link
            href="/contact"
            className="text-white bg-oas3-red px-4 py-2 rounded hover:bg-oas3-red/90"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
