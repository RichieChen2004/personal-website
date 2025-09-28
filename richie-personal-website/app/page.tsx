"use client";

import Link from "next/link";
import Navbar from "../components/NavBar/Navbar";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import LandingCollage from "../components/LandingCollage/LandingCollage";

import { useState } from "react";

export default function Home() {

  const [loaded, setLoaded] = useState(false);
  
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-[#171719]">
      
      <Navbar />
      <MusicPlayer />
      <LandingCollage />


      {/* Stuff */}
      <div className="w-full h-screen flex flex-col items-center justify-between px-8 py-4 text-white shadow z-0" >

        <h1 className="text-4xl font-bold"></h1>
        <h1 className="text-4xl font-bold"></h1>
        <h1 className="text-4xl font-bold"></h1>
        <h1 className="text-4xl font-bold"></h1>
        <h1 className="text-4xl font-bold"></h1>
        <h1 className="text-4xl font-bold"></h1>
        <h1 className="text-4xl font-bold"></h1>
        <h1 className="text-4xl font-bold"></h1>
      </div>

      
    </main>
  );
}
