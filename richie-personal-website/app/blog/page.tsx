"use client";

import BlogContainer from "@/components/BlogContainer/BlogContainer";
import { Aldrich } from 'next/font/google';

const aldrich = Aldrich({ subsets: ['latin'], weight: '400' });

export default function BlogPage() {

    const blogPosts = [
        {
            title: "I hate the grind",
            summary: "My thoughts on computer science in 2025",
            date: "Wednesday 29 Oct 2025",
            url: "/blog/i-hate-the-grind",
        }, 
    ];

    return (
        <main className="text-white flex flex-col items-center justify-start min-h-screen bg-[#171719]">

            <img src="/dokkabi-removebg.png" alt="dokkabi" width={200} height={200} className="mt-20 mb-10" />

            <p className={`${aldrich.className}`}>
                Collection of my <span className="bg-[#fcbe11] text-black px-1 rounded">thoughts and writings</span> .
            </p>

            <div className="flex items-center w-3/4 my-8">
                <div className="flex-grow border-t border-white/25"></div>
                <span className="mx-4 text-white/50 text-sm">2025</span>
                <div className="flex-grow border-t border-white/25"></div>
            </div>

            <div className="flex flex-col w-3/4 max-w-3xl my-2 mb-20">
                {
                    blogPosts.map((post, index) => (
                    <BlogContainer 
                        title={post.title}
                        summary={post.summary}
                        date={post.date}
                        url={post.url}
                        key={index}
                    />
                    ))
                }
            </div>
        </main>
    )
}

