import { Aldrich } from 'next/font/google';
import Link from 'next/link';

const aldrich = Aldrich({ subsets: ['latin'], weight: '400' });

export default function IHateTheGrindPage() {
    return (
        <main className="flex flex-col items-center justify-start min-h-screen bg-[#171719]">
            
            <img src="/dokkabi-removebg.png" alt="dokkabi" width={200} height={200} className="mt-20 mb-10" />

            <div className={`${aldrich.className} w-3/4 max-w-3xl text-left `}>
                <Link
                    href="/blog"
                    className="inline-block mb-6 text-gray-300 text-sm px-3 py-1 border border-white/25 rounded hover:bg-white/10 transition"
                    >
                    ← Back to blog
                </Link>
                <p className="text-gray-300 text-sm">
                    Wednesday 10 Oct 2025 • 3 min read
                </p>
                <h3 className="text-3xl mt-2">
                    I hate the <span className="bg-[#fcbe11] text-black px-1 rounded">grind</span> .
                </h3>
            </div>

            <hr className="w-3/4 max-w-3xl border-t border-white/25 my-8" />
            
            <div className={`${aldrich.className} w-3/4 max-w-3xl text-left mb-6 gap-10 flex flex-col`}>
                <p className="text-sm">
                    I hate the grind.
                </p>

                <p className="text-sm">
                    I don't hate the grind because it's difficult or exhausting or mentally draining — which it honestly can be at times. 
                </p>

                <p className="text-sm">
                    I hate it because — seemingly — it's what all of computer science and software engineering has been reduced to these days. 
                </p>

                <div className="">
                    <p className="text-sm italic">
                        You just have to keep <span className="underline">grinding</span> bro.
                    </p>

                    <p className="text-sm italic">
                        Just <span className="underline">grind</span> Leetcode man.
                    </p>

                    <p className="text-sm italic">
                        You have to <span className="underline">grind</span> projects, <span className="underline">grind</span> DSA and <span className="underline">grind</span> networking every single day, otherwise you're cooked.
                    </p>
                </div>

                <div className="flex justify-center gap-5 flex-wrap">
                    <div className="w-[150px] sm:w-[180px] md:w-[200px] h-[300px] sm:h-[360px] md:h-[400px] overflow-hidden rounded-lg">
                        <img src="/grind/grinddd.jpg" alt="grind" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-[150px] sm:w-[180px] md:w-[200px] h-[300px] sm:h-[360px] md:h-[400px] overflow-hidden rounded-lg">
                        <img src="/grind/bruhgrind.jpg" alt="grind" className="w-full h-full object-cover" />
                    </div>
                </div>

                <p className="text-sm text-gray-500">
                    "Computer science is just a grind"
                </p>

                <p className="text-sm">
                    This is why, I hate the grind.
                </p>

                <p className="text-sm">
                    Because the degree and field that I love so much, has been reduced to harbor such gloomy and daunting undertones.
                </p>

                <p className="text-sm">
                    Make no mistake, learning everything that computer science has to offer and navigating this awful job-market can definitely <span className="italic">feel like a grind</span>.
                </p>

                <p className="text-sm">
                    But when it comes to us painting a picture to, and answering questions from, younger students eager to learn and study computer science — or are entering their first few years — describing it as such, makes it look miserable and sound discouraging.
                </p>

                <p className="text-sm">
                    I firmly believe this, because — as someone who has spent their first two-and-a-half years in computer science actively avoiding this <span className="italic">grind</span> — it very much felt like I was staring face first at so many tall and flat stone walls that I needed to climb to truly stand out.
                </p>

                <p className="text-sm">
                    Leetcode — by far — being the tallest and widest.
                </p>

                <div className="flex justify-center mt-4 mb-4">
                    <div className="w-[150px] sm:w-[180px] md:w-[200px] h-[300px] sm:h-[360px] md:h-[400px] overflow-hidden rounded-lg">
                        <img src="/grind/leetcodee.png" alt="leetcode" className="w-full h-full object-cover" />
                    </div>
                </div>

                <p className="text-sm">
                    Leetcode was intimidating, not just because it sounded difficult, but because so many people who had “cracked Leetcode”, had described the journey as just a <span className="italic">long and hard grind</span>. 
                </p>

                <p className="text-sm">
                    And it really felt like we all had to first unlock some secrets to enjoy <span className="underline">grinding Leetcode</span>, that these people had manage to find and keep for themselves. That, or otherwise, we'd be knowingly taking our first steps into months of misery.
                </p>

                <p className="text-sm">
                    A reality that has made so many others — myself very much included — grow more and more despondent before we had even had a chance to try and begin to <span className="italic">grind</span> Leetcode.
                </p>

            </div>

            <hr className="w-3/4 max-w-3xl border-t border-white/25 my-8" />

            <div className={`${aldrich.className} w-3/4 max-w-3xl text-left mb-6 gap-10 flex flex-col`}>
                <p className="text-sm">
                    Yet.
                </p>

                <p className="text-sm">
                    When it came to grinding Leetcode and preparing for technical interviews, I've found that — in my experience — that wall is in fact not flat.
                </p>

                <p className="text-sm">
                    And that, the so-called secrets, turned out to be very obvious patterns that any university student can grasp for themselves  — the once invisible holds littering that wall, now clearly visible, waiting to be climbed.
                </p>
            </div>

            <hr className="w-3/4 max-w-3xl border-t border-white/25 my-8" />

            <div className={`${aldrich.className} w-3/4 max-w-3xl text-left mb-6 gap-10 flex flex-col`}>
                <p className="text-sm">
                    Yet.
                </p>

                <p className="text-sm">
                    This post is an excerpt of an old video script I had written on <span className="bg-[#fcbe11] text-black px-1 rounded">
                        “How I <span className="line-through">Grinded</span> Learned Leetcode”
                    </span>.
                </p>

                <p className="text-sm">
                    I will continue to add to this blog post series on my strategies (there's not many, they're really that simple and obvious!) to learning Leetcode throughout the summer.
                </p>

                <p className="text-sm">
                    Please look forward to it then!
                </p>
                
            </div>

            <div className={`${aldrich.className} w-3/4 max-w-3xl text-left `}>
                <Link
                    href="/blog"
                    className="inline-block mb-6 text-gray-300 text-sm px-3 py-1 border border-white/25 rounded hover:bg-white/10 transition"
                    >
                    ← Back to blog
                </Link>
            </div>

        </main>
    )
}