"use client";

import NavbarMobile from "../../components/NavBarMobile/NavbarMobile";
import Navbar from "../../components/NavBar/Navbar";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import BlogContainer from "@/components/BlogContainer/BlogContainer";
import Footer from "@/components/Footer/Footer";
import { useIsMobile } from "@/util/useIsMobile"

export default function AboutPage() {

const isMobile = useIsMobile()

    const blogPosts = [
        {
            title: "Post 1",
            summary: "This is the summary of post 1.",
            date: "2024-06-01",
        }, 
        {
            title: "Post 2",
            summary: "This is the summary of post 2.",
            date: "2024-06-02",
        },
        {
            title: "Post 3",
            summary: "This is the summary of post 3.",
            date: "2024-06-03",
        },
        
    ];

    return (
        <main className="flex flex-col items-center justify-start min-h-screen bg-[#171719]">

            <div className="flex flex-col w-3/4 max-w-3xl mt-15 mb-20">
                {
                    blogPosts.map((post, index) => (
                        <BlogContainer 
                            title={post.title}
                            summary={post.summary}
                            date={post.date}
                            key={index}
                        />
                    ))
                }
            </div>

            {/* <Footer /> */}

        </main>
    )
}

