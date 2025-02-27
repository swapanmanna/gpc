// import React from "react";

// export default function Login() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-50 text-brand-gray mt-8 mb-0">
//       <div className="relative">
//         {/* Top Left Pattern */}
//         <div className="absolute -left-20 -top-20 hidden h-56 w-56 text-brand-purple sm:block z-10">
//           <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="a" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.6) rotate(0)">
//                 <rect width="100%" height="100%" fill="none" />
//                 <path d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5" strokeWidth="1" stroke="none" fill="currentColor" />
//               </pattern>
//             </defs>
//             <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)" />
//           </svg>
//         </div>

//         {/* Bottom Right Pattern */}
//         <div className="absolute -right-20 -bottom-20 hidden h-28 w-28 text-brand-purple sm:block z-10">
//           <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="b" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.5) rotate(0)">
//                 <rect width="100%" height="100%" fill="none" />
//                 <path d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5" strokeWidth="1" stroke="none" fill="currentColor" />
//               </pattern>
//             </defs>
//             <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#b)" />
//           </svg>
//         </div>

//         {/* Login Card */}
//         <div className="relative z-10 flex flex-col rounded-lg bg-white px-4 shadow-lg sm:w-[33rem] border border-gray-300">
//           <div className="flex-auto p-6">
//             {/* Logo */}
//             <div className="mb-7 flex items-center justify-center">
//               <a href="#" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-600">
//                 <span className="text-3xl font-black tracking-tight">GPC</span>
//               </a>
//             </div>

//             <h4 className="mb-2 font-semibold text-gray-700 xl:text-xl">Welcome to Global Professional Certificates!</h4>
//             <p className="mb-5 text-gray-500">Please sign in to access your account.</p>

//             {/* Login Form */}
//             <form className="mb-4" action="#" method="POST">
//               {/* Email Input */}
//               <div className="mb-4">
//                 <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase text-gray-700">
//                   Email or Username
//                 </label>
//                 <input
//                   type="text"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your email or username"
//                   className="block w-full rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
//                   autoFocus
//                 />
//               </div>

//               {/* Password Input */}
//               <div className="mb-4">
//                 <div className="flex justify-between">
//                   <label htmlFor="password" className="mb-2 block text-xs font-medium uppercase text-gray-700">
//                     Password
//                   </label>
//                   <a href="#" className="text-brand-blue hover:text-brand-purple text-sm font-medium">
//                     <small>Forgot Password?</small>
//                   </a>
//                 </div>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder="••••••••••"
//                   className="block w-full rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
//                 />
//               </div>

//               {/* Remember Me Checkbox */}
//               <div className="mb-4 flex items-center">
//                 <input
//                   type="checkbox"
//                   id="remember-me"
//                   className="h-5 w-5 rounded border border-gray-300 text-brand-blue focus:border-indigo-500 focus:shadow"
//                   defaultChecked
//                 />
//                 <label htmlFor="remember-me" className="ml-2 text-sm">
//                   Remember Me
//                 </label>
//               </div>

//               {/* Submit Button */}
//               <div className="mb-4">
//                 <button
//                   type="submit"
//                   className="w-full rounded-md border border-indigo-500 bg-brand-blue py-2 px-5 text-sm text-white shadow transition hover:border-indigo-600 hover:bg-brand-purple focus:border-indigo-600 focus:bg-indigo-600 focus:shadow-none"
//                 >
//                   Sign in
//                 </button>
//               </div>
//             </form>

//             {/* Signup Link */}
//             <p className="text-center">
//               New to GPC?
//               <a href="#" className="text-brand-blue hover:text-brand-purple"> Create an account</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import logoTwo from "../../assets/logo-2.png";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class=" h-23 mr-2" src={logoTwo} alt="logo" />  
                </a>
                <div class="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 border border-gray-300">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-brand-blue md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-brand-dark dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-brand-dark dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-brand-gray dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" class="text-sm font-medium text-brand-blue hover:underline dark:text-white">Forgot password?</a>
                            </div>
                            <button type="submit" class="w-full text-white bg-brand-blue hover:bg-brand-purple focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p class="text-sm text-brand-gray dark:text-gray-400">
                                Don’t have an account yet? <Link to="/register" class="font-medium text-brand-blue hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}