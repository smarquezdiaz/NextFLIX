import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div  className="max-w-6xl mx-auto py-4 flex items-center justify-between">
        <div>
          <Link href="/" className="text-xl font-bold">NextFLIX</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-gray-400 mt-6 hover:text-white transition">Home</Link>
          <Link href="/series" className="text-gray-400 mt-6 hover:text-white transition">Series</Link>
          <Link href="/about" className="text-gray-400 mt-6 hover:text-white transition">About</Link>
        </div>
      </div>
    </nav>
  );
}
