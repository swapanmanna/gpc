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
          <a href="https://learn.globalprofessionalcertifications.com/learn/account/signin" 
             className="text-white bg-brand-blue hover:bg-brand-purple font-medium rounded-lg text-sm px-4 py-2 transition duration-200 ease-in-out"
             target="_blank">
            Log In
          </a>
          <a href="https://learn.globalprofessionalcertifications.com/learn/account/signup?"
             className="text-white bg-brand-gray hover:bg-brand-dark font-medium rounded-lg text-sm px-4 py-2 transition duration-200 ease-in-out"
             target="_blank">
            Sign Up
          </a>
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
          {["Courses","Events", "About", "Success", "Contact"].map((item, index) => (
            <NavLink
              key={index}
              to={item.toLowerCase()}
              className={({ isActive }) =>
                `nav text-lg font-medium ${isActive ? "text-brand-purple" : "text-brand-dark"} hover:text-brand-purple`
              }
            >
              {item === "Success" ? "Success Stories" : item}
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
          {["Courses","Events", "About", "Success", "Contact"].map((item, index) => (
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
            <a
              href="https://learn.globalprofessionalcertifications.com/learn/account/signin"
              target="_blank"
              className="w-full text-center text-white bg-brand-blue hover:bg-brand-purple font-medium rounded-lg text-sm px-4 py-2"
            >
              Log In
            </a>
            <a
              href="https://learn.globalprofessionalcertifications.com/learn/account/signup?"
              target="_blank"
              className="w-full text-center text-white bg-brand-gray hover:bg-brand-dark font-medium rounded-lg text-sm px-4 py-2"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/logo-2.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

//   const courses = [
//     { name: "CIA", path: "/cia" },
//     { name: "CRMA", path: "/crma" },
//     { name: "IAP", path: "/iap" },
//     { name: "CISA", path: "/cisa" },
//   ];

//   return (
//     <nav className="bg-[#f5f6fa] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <div className="transform scale-150 md:scale-225">
//             <img src={logo} className="h-8" alt="GPC logo" />
//           </div>
//         </Link>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex md:order-2 space-x-3">
//           <a href="https://learn.globalprofessionalcertifications.com/learn/account/signin" 
//              className="text-white bg-brand-blue hover:bg-brand-purple font-medium rounded-lg text-sm px-4 py-2 transition duration-200 ease-in-out"
//              target="_blank">
//             Log In
//           </a>
//           <a href="https://learn.globalprofessionalcertifications.com/learn/account/signup?"
//              className="text-white bg-brand-gray hover:bg-brand-dark font-medium rounded-lg text-sm px-4 py-2 transition duration-200 ease-in-out"
//              target="_blank">
//             Sign Up
//           </a>
//         </div>

//         {/* Hamburger Button (Mobile) */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="mobile-menu"
//           aria-expanded={isOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>

//         {/* Navigation Links (Desktop) */}
//         <div className="hidden md:flex space-x-8 relative">
//           {["Events", "About", "Success", "Contact"].map((item, index) => (
//             <NavLink
//               key={index}
//               to={item.toLowerCase()}
//               className={({ isActive }) =>
//                 `nav text-lg font-medium ${isActive ? "text-brand-purple" : "text-brand-dark"} hover:text-brand-purple`
//               }
//             >
//               {item === "Success" ? "Success Stories" : item}
//             </NavLink>
//           ))}

//           {/* Courses Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
//               className="nav text-lg font-medium text-brand-dark hover:text-brand-purple focus:outline-none"
//               aria-expanded={isCoursesDropdownOpen}
//               aria-controls="courses-dropdown"
//             >
//               Courses
//               <svg
//                 className="w-4 h-4 inline-block ml-1"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>

//             {/* Dropdown Menu */}
//             {isCoursesDropdownOpen && (
//               <div
//                 id="courses-dropdown"
//                 className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-10"
//               >
//                 {courses.map((course, index) => (
//                   <NavLink
//                     key={index}
//                     to={course.path}
//                     className={({ isActive }) =>
//                       `block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive ? "bg-gray-100 dark:bg-gray-700" : ""}`
//                     }
//                     onClick={() => setIsCoursesDropdownOpen(false)}
//                   >
//                     {course.name}
//                   </NavLink>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         id="mobile-menu"
//         className={`md:hidden flex flex-col items-center w-full bg-[#f5f6fa] dark:bg-gray-900 transition-all duration-300 ease-in-out ${
//           isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         } overflow-hidden`}
//       >
//         <ul className="flex flex-col items-center w-full space-y-4 p-4">
//           {["Courses", "Events", "About", "Success", "Contact"].map((item, index) => (
//             <li key={index} className="w-full text-center">
//               {item === "Courses" ? (
//                 <div className="relative">
//                   <button
//                     onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
//                     className="block w-full py-2 text-lg font-medium text-brand-dark hover:text-brand-purple focus:outline-none"
//                     aria-expanded={isCoursesDropdownOpen}
//                     aria-controls="mobile-courses-dropdown"
//                   >
//                     Courses
//                     <svg
//                       className="w-4 h-4 inline-block ml-1"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>

//                   {isCoursesDropdownOpen && (
//                     <div
//                       id="mobile-courses-dropdown"
//                       className="mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg"
//                     >
//                       {courses.map((course, index) => (
//                         <NavLink
//                           key={index}
//                           to={course.path}
//                           className={({ isActive }) =>
//                             `block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive ? "bg-gray-100 dark:bg-gray-700" : ""}`
//                           }
//                           onClick={() => {
//                             setIsCoursesDropdownOpen(false);
//                             setIsOpen(false); // Close mobile menu when a course is selected
//                           }}
//                         >
//                           {course.name}
//                         </NavLink>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <NavLink
//                   to={item.toLowerCase()}
//                   className={({ isActive }) =>
//                     `block w-full py-2 text-lg font-medium ${
//                       isActive ? "text-brand-purple" : "text-brand-dark"
//                     } hover:text-brand-purple`
//                   }
//                   onClick={() => setIsOpen(false)} // Close mobile menu when clicked
//                 >
//                   {item === "Success" ? "Success Stories" : item}
//                 </NavLink>
//               )}
//             </li>
//           ))}
//           {/* Login & Signup Buttons (Inside Mobile Menu) */}
//           <li className="w-full flex flex-col space-y-2 mt-2">
//             <a
//               href="https://learn.globalprofessionalcertifications.com/learn/account/signin"
//               target="_blank"
//               className="w-full text-center text-white bg-brand-blue hover:bg-brand-purple font-medium rounded-lg text-sm px-4 py-2"
//             >
//               Log In
//             </a>
//             <a
//               href="https://learn.globalprofessionalcertifications.com/learn/account/signup?"
//               target="_blank"
//               className="w-full text-center text-white bg-brand-gray hover:bg-brand-dark font-medium rounded-lg text-sm px-4 py-2"
//             >
//               Sign Up
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;