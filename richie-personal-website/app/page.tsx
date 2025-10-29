"use client";

import Link from "next/link";
import Navbar from "../components/NavBar/Navbar";
import NavbarMobile from "../components/NavBarMobile/NavbarMobile";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import LandingCollage from "../components/LandingCollage/LandingCollage";
import styles from "./page.module.css";
import FadeInSection from "../components/FadeInSection/FadeInSection";
import SideNav from "../components/SideNav/SideNav";

import { Aldrich } from 'next/font/google';
import Footer from "@/components/Footer/Footer";
import ConnectContainer from "@/components/ConnectContainer/ConnectContainer";
import { useIsMobile } from "@/util/useIsMobile"


const aldrich = Aldrich({ subsets: ['latin'], weight: '400' });

export default function Home() {

  const isMobile = useIsMobile()
  
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-[#171719]">
      
      {
        isMobile ? (
          null
        ) 
        : (
              <SideNav />
          )
      }
      
      <LandingCollage />


      {/* About Section */}
      <div id="about" className={`${styles.info_section} ${aldrich.className}`}>
        <div className={styles.info_content}>
        <FadeInSection> 
          <h2 className="text-4xl font-bold mb-6">about.</h2>
          <p className="text-lg max-w-3xl mb-4">hi there, i'm richie chen .</p>
          <p className="text-lg max-w-3xl mb-4">
            i'm an <span className="bg-[#fcbe11] text-black px-1 rounded">advanced computer science</span> student at monash university ,
          </p>
          <p className="text-lg max-w-3xl mb-4">
            and an incoming <span className="bg-[#fcbe11] text-black px-1 rounded">software engineer intern</span> at google .
          </p>
          <p className="text-lg max-w-3xl mb-4">
            i love reading manga and manwha, specifically {" "}
            <Link href="/#orv" className="text-[#808080] underline">omniscient reader's viewpoint</Link>
            {" "} .
          </p>
        </FadeInSection>
        </div>
      </div>

      {/* Work Section */}
      <div id="work" className={`${styles.info_section} ${aldrich.className}`}>
        <div className={styles.info_content}>
        <FadeInSection> 
          <h2 className="text-4xl font-bold mb-6">work.</h2>
          <p className="text-lg max-w-3xl mb-4">currently improving my front-end skills , back-end is my favourite child .</p>
          <p className="text-lg max-w-3xl mb-4">experienced in <span className="bg-[#fcbe11] text-black px-1 rounded">fullstack development</span> .</p>
          <p className="text-lg max-w-3xl mb-4">
            previously interned as a <span className="bg-[#fcbe11] text-black px-1 rounded">data engineer & software engineer</span> at {" "}
            <Link 
              href="https://www.linkedin.com/company/reecetech/?originalSubdomain=au" 
              className="text-[#808080] underline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              reecetech
            </Link>
            {" "} .
          </p>

          <p className="text-lg max-w-3xl mb-4">
            here's my {" "}
            <Link
              href="/richie_resume.pdf" 
              className="text-[#808080] underline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              resume
            </Link> 
            {" "} .
          </p>
        </FadeInSection>
        </div>
      </div>

      {/* Connect Section */}
      <div id="connect" className={`${styles.info_section} ${aldrich.className}`}>
        <FadeInSection>
          <ConnectContainer />
        </FadeInSection>
      </div>
      
      <Footer />
    </main>
  );
}
