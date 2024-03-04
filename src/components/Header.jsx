import { useState } from "react";

const Header = () => {
  return (
   
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="md:w-2/3 sm:w-full mx-auto">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
            <a
              href="#"
              className="flex items-center space-x-3 mr-2"
            >
            <img src="ac-logo-small.png" className="h-8 w-8"/>
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Anna's Page
              </span>
            </a>

            <div className="flex md:order-2 space-x-3 md:space-x-0 ">
            {/* rtl:space-x-reverse */}
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-1 
      w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
      focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
      dark:focus:ring-gray-600 mr-4"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-8 h-5 "
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
            </div>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#about"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    TechStack
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

{
  /* 
    <nav id="header"
      classNameName="w-2/3 bg-slate-50 sticky top-0 z-10 start-10 ">
       <div classNameName='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        
          <a classNameName="flex items-center space-x-3 rtl:space-x-reverse" href="#">
          <span classNameName="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> 🐧 Anna's Page
          </span>
          </a>
       
        </div>
        <div classNameName="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse" >
          <button
            id="mobile-open-button"
            classNameName ="text-3xl sm:hidden focus:outline-none"
          >
            &#9776;
          </button>
          <nav classNameName ="hidden sm:block space-x-8 text-lg" aria-label="main">
            <a classNameName ="hover:opacity-90" href="#about">
              About
            </a>
            <a classNameName ="hover:opacity-90" href="#technologies">
              Techstack
            </a>
            <a classNameName ="hover:opacity-90" href="#projects">
              Projects
            </a>
           
            <a classNameName ="hover:opacity-90" href="#contact">
              Contact Me
            </a>
          </nav>
        </div>
      {/* </section> */
}

export default Header;
