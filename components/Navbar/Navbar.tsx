import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from 'next/image'
import Link from 'next/link'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="fixed w-full top-0 z-10 shadow bg-transparent rounded-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 ">
              <div className="hidden md:block font-semibold text-3xl">
                Niku.Singh
              </div>
              <div className="md:hidden font-semibold text-3xl">
                Niku.Singh
              </div>
            </div>
            <div className="font-medium text-gray-700">

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-12">
                  <Link
                    href="about"
                    className="px-3 py-2 text-sm"
                  >
                    About me
                  </Link>

                  <Link
                    href="services"
                    className=" px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </Link>

                  <Link
                    href="products"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blogs
                  </Link>

                  <Link
                    href="contact"
                    className=" px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h1>Icon</h1>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className=" text-black block px-3 py-2 rounded-md font-medium">
                  <Link href="/">
                    Home
                  </Link>
                </div>
                <div className=" text-black block px-3 py-2 rounded-md text-base font-medium">
                  <Link href="services">
                    Services
                  </Link>
                </div>
                <div className=" text-black block px-3 py-2 rounded-md text-base font-medium">
                  <Link href="products">
                    Products
                  </Link>
                </div>
                <div className=" text-black block px-3 py-2 rounded-md text-base font-medium">
                  <Link href="about">
                    About us
                  </Link>
                </div>
                <div className=" text-black block px-3 py-2 rounded-md text-base font-medium">
                  <Link href="contact">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;