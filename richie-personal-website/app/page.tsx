"use client";

import Link from "next/link";
import Navbar from "../components/NavBar/Navbar";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import LandingCollage from "../components/LandingCollage/LandingCollage";

import { useState } from "react";

export default function Home() {

  const [loaded, setLoaded] = useState(false);
  
  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      
      <Navbar />
      <MusicPlayer />
      <LandingCollage />

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
