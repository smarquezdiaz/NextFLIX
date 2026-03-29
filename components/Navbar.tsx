import { Play } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="max-w-8xl py-4 flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="text-xl font-bold flex flex-row items-center gap-2"
          >
            {" "}
            <Play size={48} color="yellow" strokeWidth={1} />
            NextFLIX
          </Link>
        </div>
        <div className="flex items-center gap-6 font-medium">
          <Link
            href="/"
            className="text-gray-400 mt-6 hover:text-white transition" 
          >
            Home
          </Link>
          <Link
            href="/series"
            className="text-gray-400 mt-6 hover:text-white transition"
          >
            Series
          </Link>
          <Link
            href="/about"
            className="text-gray-400 mt-6 hover:text-white transition"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
