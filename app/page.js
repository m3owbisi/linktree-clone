import React from "react";
import Link from "next/link";

// Main App component that renders the full page layout
const App = () => {
  return (
    // Outer container for the whole page, setting the overall soft pink background
    // and ensuring content is centered and responsive.
    <div className="min-h-screen bg-[#ffe8ed] font-inter text-gray-800 flex flex-col items-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Background decorative elements for a cute vibe */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#ffcccc] rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#ffdcdc] rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#ffbbbb] rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>

      {/* Main content area, centered and styled with a soft, rounded card */}
      <main className="flex flex-col items-center justify-center flex-grow w-full max-w-4xl mt-28 mb-8 z-10">
        <div className="bg-white/70 backdrop-blur-lg border border-white/80 p-8 sm:p-10 lg:p-12 rounded-3xl shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01] w-full text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f06292] mb-6 lowercase leading-tight">
            your cute little digital space
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 lowercase max-w-2xl mx-auto">
            welcome to your new happy place! craft and share your world with
            adorable links, photos, and all the sweet stuff that makes you, you.
            it&apos;s super easy, super fun, and super pink!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <button className="bg-[#f06292] text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-[#e91e63] transition-all duration-300 ease-in-out lowercase transform hover:-translate-y-1">
                get started, cutie!
              </button>
            </Link>
            <button className="bg-white text-[#f06292] border-2 border-[#f06292] py-3 px-8 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-[#ffe0e0] transition-all duration-300 ease-in-out lowercase transform hover:-translate-y-1">
              learn more (so much fun!)
            </button>
          </div>
        </div>
      </main>

      {/* Example section to show more content cards */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="bg-white/70 backdrop-blur-lg border border-white/80 p-6 rounded-2xl shadow-md text-center transition-transform hover:scale-[1.02] duration-300">
          <h3 className="text-2xl font-semibold text-[#f06292] mb-3 lowercase">
            sparkle up your links
          </h3>
          <p className="text-gray-700 lowercase">
            add your favorite links and make them shine with cute icons and
            themes.
          </p>
        </div>
        <div className="bg-white/70 backdrop-blur-lg border border-white/80 p-6 rounded-2xl shadow-md text-center transition-transform hover:scale-[1.02] duration-300">
          <h3 className="text-2xl font-semibold text-[#f06292] mb-3 lowercase">
            express yourself, boo
          </h3>
          <p className="text-gray-700 lowercase">
            customize your profile with playful colors, fonts, and backgrounds.
          </p>
        </div>
      </section>

      {/* Footer for a complete page feel */}
      <footer className="mt-16 w-full text-center text-gray-600 lowercase text-sm">
        <p>&copy; 2025 all rights reserved, cuteness overload incorporated.</p>
      </footer>
    </div>
  );
};

export default App;
// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const [text, settext] = useState("linktr.ee/");
//   const router = useRouter();
//   const generateTree = () => {
//     // extract the username/handle from the input text
//     const handle = text.replace("linktr.ee/", "").trim();
//     if (handle) {
//       router.push(`/generate?handle=${handle}`);
//     } else {
//       // optionally handle cases where the input is empty or just "linktr.ee/"
//       alert("please enter a valid linktree handle.");
//     }
//   };
//   return (
//     <>
//       <main>
//         <section className="bg-[#254f1a] min-h-screen grid grid-cols-2">
//           {/* LinkTree */}
//           <div className="p-32"></div>
//           <div className="p-32"></div>
//           <div className="flex justify-center flex-col ml-[10vw] gap-4 my-4">
//             {/* items-center */}
//             <h1 className="text-[#d2e823] font-bold text-7xl">
//               everything you
//             </h1>
//             <h1 className="text-[#d2e823] font-bold text-7xl">are. in one,</h1>
//             <h1 className="text-[#d2e823] font-bold text-7xl">
//               simple link in bio.
//             </h1>
//             <p className="text-white font-semibold text-1xl my-4">
//               join 70m+ people using linktree for their link in bio. one link to
//               help you share everything you create, curate and sell from your
//               instagram, tiktok, twitter, youtube and other social media
//               profiles.
//             </p>
//             <div className="input flex gap-2">
//               <input
//                 value={text}
//                 onChange={(e) => settext(e.target.value)}
//                 className="px-2 py-2 bg-white focus:outline-[#254f1a] rounded-md font-semibold"
//                 type="text"
//                 placeholder="linktr.ee/yourname"
//               />
//               <button
//                 onClick={() => generateTree()}
//                 className="px-4 py-4 bg-[#e9c0e9] text-[#1e2330] rounded-full font-semibold"
//               >
//                 claim your linktree
//               </button>
//             </div>
//           </div>
//           <div className="flex justify-center flex-col mr-[10vw]">
//             {/* items-center */}
//             <img src="/home.png" alt="home-page-image" />
//           </div>
//         </section>
//         <section className="bg-[#e9c0e9] min-h-[100vh] "></section>
//       </main>
//       <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//         <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//           <Image
//             className="dark:invert"
//             src="/next.svg"
//             alt="Next.js logo"
//             width={180}
//             height={38}
//             priority
//           />
//           <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//             <li className="mb-2 tracking-[-.01em]">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//                 app/page.js
//               </code>
//               .
//             </li>
//             <li className="tracking-[-.01em]">
//               Save and see your changes instantly.
//             </li>
//           </ol>

//           <div className="flex gap-4 items-center flex-col sm:flex-row">
//             <a
//               className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image
//                 className="dark:invert"
//                 src="/vercel.svg"
//                 alt="Vercel logomark"
//                 width={20}
//                 height={20}
//               />
//               Deploy now
//             </a>
//             <a
//               className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//               href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Read our docs
//             </a>
//           </div>
//         </main>
//         <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//           <a
//             className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="/file.svg"
//               alt="File icon"
//               width={16}
//               height={16}
//             />
//             Learn
//           </a>
//           <a
//             className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="/window.svg"
//               alt="Window icon"
//               width={16}
//               height={16}
//             />
//             Examples
//           </a>
//           <a
//             className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//             href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="/globe.svg"
//               alt="Globe icon"
//               width={16}
//               height={16}
//             />
//             Go to nextjs.org →
//           </a>
//         </footer>
//       </div>
//     </>
//   );
// }
