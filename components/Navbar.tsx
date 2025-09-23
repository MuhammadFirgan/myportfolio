'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-800 mx-10 my-5 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          
          <div className="hidden md:flex">
            <div className="ml-10 flex space-x-4">
              <Link href="/" className="text-zinc-100 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/" className="text-zinc-100 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">Project</Link>
              <Link href="mailto:muhammadfirgan077@gmail.com" className="text-zinc-100 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-zinc-100 hover:text-teal-500 hover:bg-gradient-to-r from-teal-500 to-emerald-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-zinc-100 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/" className="text-zinc-100 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium">Project</Link>
            <Link href="/" className="text-zinc-100 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
