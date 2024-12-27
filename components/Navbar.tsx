// components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-wide hover:text-gray-200 transition duration-300">
            <Link href="/">🚀 VIP Store</Link>
          </h1>
          <span className="text-xl italic text-gray-300">by Haroon Rasheed</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-8 text-lg font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-gray-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Server-Side"
              className="hover:text-gray-200 transition duration-300"
            >
              Server Side
            </Link>
          </li>
          <li>
            <Link
              href="/Client-Side"
              className="hover:text-gray-200 transition duration-300"
            >
              Client Side
            </Link>
          </li>
        </ul>

        {/* Responsive Menu (For Mobile View) */}
        <div className="sm:hidden flex items-center">
          <button className="text-2xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
