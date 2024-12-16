"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Image src="/hero.44-removebg-preview.png" alt="Logo" width={100} height={100} />
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link href="/hero.40.png" className="hover:text-gray-400 text-sm md:text-base">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400 text-sm md:text-base">
            About
          </Link>
        </li>
        <li>
          <Link href="/skills" className="hover:text-gray-400 text-sm md:text-base">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/project" className="hover:text-gray-400 text-sm md:text-base">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400 text-sm md:text-base mr-7">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="space-y-2">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
