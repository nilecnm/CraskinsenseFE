"use client";

export default function Footer() {
  return (
    <footer className="bg-white mt-auto ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/assets/CRAlogo.png" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
              CRA SKINSENSE AI
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-600 sm:mb-0">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-600 sm:text-center">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            CRA SKINSENSE AI™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
