export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-700">
        © {new Date().getFullYear()} OAS3 Services Ltd. All rights reserved.
      </div>
    </footer>
  );
}
