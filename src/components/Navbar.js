import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow-md bg-white fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold">Oas3</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
