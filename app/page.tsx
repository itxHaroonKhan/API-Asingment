import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar"; // Adjust the path based on your file structure
import Footer from "@/components/Footer"; // Adjust the path

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-200">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-8 px-4">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 tracking-wide text-center mb-6">
            Choose Your Data Source
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transform transition-all duration-300">
              <Link href="/Server-Side">Server Side Data</Link>
            </button>

            <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transform transition-all duration-300">
              <Link href="/Client-Side">Client Side Data</Link>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
