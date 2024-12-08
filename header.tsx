"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { HiShoppingCart } from "react-icons/hi2";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-gray-700 text-white py-5 flex justify-between items-center px-10 relative z-10">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Cameramania</h1>

      {/* Navbar - Desktop */}
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" onClick={closeMenu} className="hover:text-gray-300">Home</Link>
        <Link href="/about" onClick={closeMenu} className="hover:text-gray-300">About</Link>
        <Link href="/cameras" onClick={closeMenu} className="hover:text-gray-300">Cameras</Link>
        <Link href="/contact" onClick={closeMenu} className="hover:text-gray-300">Contact Us</Link>
        <HiShoppingCart className="text-white text-xl cursor-pointer" />
      </nav>

      {/* Navbar - Mobile */}
      <div className="md:hidden flex items-center">
        {isMenuOpen ? (
          <HiX className="text-white text-3xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <HiMenuAlt3 className="text-white text-3xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-700 flex flex-col items-center justify-center space-y-6 z-20">
          <Link href="/" onClick={closeMenu} className="text-white text-xl hover:text-gray-300">Home</Link>
          <Link href="/about" onClick={closeMenu} className="text-white text-xl hover:text-gray-300">About</Link>
          <Link href="/cameras" onClick={closeMenu} className="text-white text-xl hover:text-gray-300">Cameras</Link>
          <Link href="/contact" onClick={closeMenu} className="text-white text-xl hover:text-gray-300">Contact Us</Link>
          <HiShoppingCart className="text-white text-2xl cursor-pointer" />
        </div>
      )}
    </header>
  );
}




