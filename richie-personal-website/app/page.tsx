"use client";

import Link from "next/link";
import Navbar from "../components/NavBar/Navbar";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import LandingCollage from "../components/LandingCollage/LandingCollage";
import styles from "./page.module.css";
import FadeInSection from "../components/FadeInSection/FadeInSection";

import { useState } from "react";
import { Aldrich } from 'next/font/google';

const aldrich = Aldrich({ subsets: ['latin'], weight: '400' });

export default function Home() {

  const [loaded, setLoaded] = useState(false);
  
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-[#171719]">
      
      <Navbar />
      <MusicPlayer />
      <LandingCollage />


      {/* Stuff */}
      <div className="w-full h-screen flex flex-col items-center justify-between px-8 py-4 text-white shadow z-0" >

        
          <div id="about" className={`${styles.about_section} ${aldrich.className}`}>
            <FadeInSection> 
              <h2 className="text-4xl font-bold mb-6">about.</h2>
              <p className="text-lg max-w-3xl mb-4">
                hi there, i'm richie chen .
              </p>
              <p className="text-lg max-w-3xl mb-4">
                i'm an <span className="bg-[#fcbe11] text-black px-1 rounded">advanced computer science</span> student at monash university ,
              </p>

              <div className="flex flex-row items-center space-x-1">
                <p className="text-lg max-w-3xl mb-4">
                  and an incoming <span className="bg-[#fcbe11] text-black px-1 rounded">software engineer intern</span> at google .
                </p>
              </div>

              <div className="flex flex-row items-center space-x-1">
                <p className="text-lg max-w-3xl mb-4">
                  i love reading manga and manwha, specifically
                </p>
                <Link href="/#orv" className="text-lg max-w-3xl mb-4 text-[#808080] underline">omniscient reader's viewpoint</Link>
                <p className="text-lg max-w-3xl mb-4">
                  .
                </p>
              </div>
              </FadeInSection>
          </div>


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
