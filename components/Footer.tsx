import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        {/* Marca */}

        <div>
          <h3 className="text-xl font-bold text-white mb-3">NextFLIX</h3>

          <p className="text-sm text-gray-400">
            A modern  streaming platform created with Next.js and Radix.UI.
          </p>
        </div>

        {/* Links */}

        <div>
          <h4 className="font-semibold text-white mb-4">Navegación</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link href="/series" className="hover:text-white">
                Series
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}

        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>

          <p className="text-sm text-gray-400">suport@nextflix.com</p>

          <p className="text-sm text-gray-400">Cochabamba, Bolivia</p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-sm py-6 text-gray-500">
        © {new Date().getFullYear()} NextFLIX — All rights reserved
      </div>
    </footer>
  );
}
