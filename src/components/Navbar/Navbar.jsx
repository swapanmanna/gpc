// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/logo-2.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (

//     <nav className="bg-[#f5f6fa] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//       <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
//         <div className="transform scale-225">
//           <img src={logo} className="h-8" alt="GPC logo" />
//         </div>
//       </Link>
//       <div className="bg-[#f5f6fa] flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//         <Link to="login" className="text-white bg-brand-blue hover:bg-brand-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</Link>
//         <Link to="register" className="text-white bg-brand-gray hover:bg-brand-dark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</Link>
//         <button onClick={() => setIsOpen(!isOpen)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isOpen}>
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//           </svg>
//         </button>
//       </div>
//       <div className={`bg-[#f5f6fa] items-center justify-between ${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1 ml-32 mr-2`}>
//       <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-[#f5f6fa] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#f5f6fa] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//           <li>
//             <NavLink to="" className={({isActive}) => `block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent ${ isActive ? "md:text-brand-purple" : "md:text-brand-dark" } md:hover:text-brand-purple md:p-0 md:dark:text-blue-500`} aria-current="page">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="about" className={({isActive}) => `block py-2 px-3 bg-blue-700 rounded-sm md:bg-transparent ${ isActive ? "text-brand-purple" : "text-brand-dark" } md:hover:text-brand-purple md:p-0 md:dark:text-blue-500`}>About</NavLink>
//           </li>
//           <li>
//             <NavLink to="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:text-brand-dark md:hover:bg-transparent md:hover:text-brand-purple md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</NavLink>
//           </li>
//           <li>
//             <NavLink to="contact" className={({isActive}) => `block py-2 px-3 bg-blue-700 rounded-sm md:bg-transparent ${ isActive ? "text-brand-purple" : "text-brand-dark" } md:hover:text-brand-purple md:p-0 md:dark:text-blue-500`}>Contact</NavLink>
//           </li>
//         </ul>
//       </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f5f6fa] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="transform scale-150 md:scale-225">
            <img src={logo} className="h-8" alt="GPC logo" />
          </div>
        </Link>

        {/* Desktop Buttons */}
        <div className="hidden md:flex md:order-2 space-x-3">
          <Link to="login" className="text-white bg-brand-blue hover:bg-brand-purple font-medium rounded-lg text-sm px-4 py-2">
            Log In
          </Link>
          <Link to="register" className="text-white bg-brand-gray hover:bg-brand-dark font-medium rounded-lg text-sm px-4 py-2">
            Sign Up
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <NavLink
              key={index}
              to={item.toLowerCase()}
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? "text-brand-purple" : "text-brand-dark"} hover:text-brand-purple`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden flex flex-col items-center w-full bg-[#f5f6fa] dark:bg-gray-900 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center w-full space-y-4 p-4">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <li key={index} className="w-full text-center">
              <NavLink
                to={item.toLowerCase()}
                className={({ isActive }) =>
                  `block w-full py-2 text-lg font-medium ${
                    isActive ? "text-brand-purple" : "text-brand-dark"
                  } hover:text-brand-purple`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
          {/* Login & Signup Buttons (Inside Mobile Menu) */}
          <li className="w-full flex flex-col space-y-2 mt-2">
            <Link
              to="login"
              className="w-full text-center text-white bg-brand-blue hover:bg-brand-purple font-medium rounded-lg text-sm px-4 py-2"
            >
              Log In
            </Link>
            <Link
              to="register"
              className="w-full text-center text-white bg-brand-gray hover:bg-brand-dark font-medium rounded-lg text-sm px-4 py-2"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
