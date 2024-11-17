"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-gray-200 bg-gray-900 relative z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            CRA SKINSENSE AI
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 md:border-0 md:p-0 font-semibold md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent ${
                  pathname == "/" ? "text-blue-700" : "text-white"
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 px-3 md:border-0 md:p-0 font-semibold md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent ${
                  pathname == "/about" ? "text-blue-700" : "text-white"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-2 px-3 md:border-0 md:p-0 font-semibold md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent ${
                  pathname == "/contact" ? "text-blue-700" : "text-white"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
