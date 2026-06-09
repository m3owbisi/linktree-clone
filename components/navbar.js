"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Modified Navbar component for standalone React preview
const Navbar = () => {
  const pathname = usePathname();
  const showNavBar = ["/", "/generate"].includes(pathname);

  return (
    <>
      {showNavBar && (
        <div className="w-full flex justify-center z-20">
          {" "}
          {/* Wrapper to center the nav */}
          <nav className="bg-white/80 backdrop-blur-md border border-white/90 w-[90vw] lg:w-[80vw] flex flex-col sm:flex-row justify-between items-center fixed top-6 md:top-12 rounded-full p-3 px-5 sm:p-4 sm:px-7 shadow-xl">
            {/* Logo and Navigation Links */}
            <div className="logo flex flex-col sm:flex-row gap-5 sm:gap-10 lg:gap-20 items-center mb-3 sm:mb-0">
              <Link href="/">
                <img
                  className="nav-desktop-logo h-5 sm:h-6"
                  loading="eager"
                  src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
                  alt="cute logo"
                />
              </Link>
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-7 lg:gap-10 text-[#5f5f5f] font-sans text-sm sm:text-base">
                <Link href="/">
                  <li>products</li>
                </Link>{" "}
                <Link href="/">
                  <li>templates</li>
                </Link>{" "}
                <Link href="/">
                  <li>marketplace</li>
                </Link>{" "}
                <Link href="/">
                  <li>learn</li>
                </Link>{" "}
                <Link href="/">
                  <li>pricing</li>
                </Link>{" "}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button className="login bg-[#ffebf0] text-[#e91e63] py-2 px-5 sm:py-3 sm:px-6 rounded-lg font-bold text-sm sm:text-base shadow-sm hover:shadow-md hover:bg-[#ffe0e6] transition-all duration-200 lowercase">
                log in
              </button>
              <button className="signup bg-[#f06292] text-white py-2 px-5 sm:py-3 sm:px-6 rounded-full font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:bg-[#e91e63] transition-all duration-200 lowercase">
                sign up free
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
// "use client";
// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navbar = () => {
//   const pathname = usePathname();
//   const showNavBar = ["/", "/generate"].includes(pathname);
//   return (
//     <>
//       {showNavBar && (
//         <div>
//           <nav className="bg-white w-[80vw] flex justify-between absolute top-12 right-[10vw] rounded-full p-4 px-7 mx-auto">
//             <div className="logo flex gap-20 items-center">
//               <Link href={"/"}>
//                 <img
//                   className="nav-desktop-logo h-5"
//                   loading="eager"
//                   src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
//                   alt=""
//                   // class=""
//                 />
//               </Link>
//               <ul className="flex gap-10 text-[#1e2330] font-sans">
//                 <Link href="/">
//                   <li>products</li>
//                 </Link>
//                 <Link href="/">
//                   <li>templates</li>
//                 </Link>
//                 <Link href="/">
//                   <li>marketplace</li>
//                 </Link>
//                 <Link href="/">
//                   <li>learn</li>
//                 </Link>
//                 <Link href="/">
//                   <li>pricing</li>
//                 </Link>
//               </ul>
//             </div>
//             <div className="flex gap-3">
//               <button className="login bg-[#eff0ec] text-black p-4 rounded-lg font-bold">
//                 log in
//               </button>
//               <button className="signup bg-[#1e2330] text-white p-4 rounded-full font-bold">
//                 sign up free
//               </button>
//             </div>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// };

// export default navbar;
