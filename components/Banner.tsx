import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="bg-linear-to-r from bg-red-500 to-red-300 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-row gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Find the best series
          </h1>
          <p className="text-lg text-white mb-8">
            Find our series collection with the best shows
          </p>
          <Link
            href="/series"
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            See Series
          </Link>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/736x/c9/82/9b/c9829bdf20e4775a34df99505729ba0c.jpg"
            alt="Serie"
            width={500}
            height={300}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
