"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      
      <Navbar />
      <MusicPlayer />
      
      <div className="flex items-center justify-center w-full h-screen relative" style={{ backgroundColor: '#171719' }}>
        <Image
          src="/omni2.jpg"
          alt="Frieren"
          height = {1308}
          width= {736}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Stuff */}
      <h1 className="text-4xl font-bold">Hello, World! 👋</h1>

      <Link
        href="/test"
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] bg-white text-black"
      >
        Go to Test Page
      </Link>
      <Link
        href="/test"
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] bg-white text-black"
      >
        Go to Test Page
      </Link>
      <Link
        href="/test"
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] bg-white text-black"
      >
        Go to Test Page
      </Link>
    </main>
  );
}
