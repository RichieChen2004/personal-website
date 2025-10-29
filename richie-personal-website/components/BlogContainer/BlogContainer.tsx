import { Aldrich } from 'next/font/google';

const aldrich = Aldrich({ subsets: ['latin'], weight: '400' });

export default function BlogContainer(
    {
        title,
        summary,
        date,
    }: {
        title: string;
        summary: string;
        date: string;
    } 
) 
{

    return (
        <div>
            <div className={`${aldrich.className} text-white p-4 
                backdrop-blur-[16px] 
                outline outline-white/25 rounded-[12px] 
                mb-6 hover:bg-gray-400/20 transition duration-300 cursor-pointer`}
            >
                <p className="text-gray-300 font-bold">{date}</p>
                <h3 className="text-xl font-bold mt-4 mb-4">{title}</h3>
                <p className="text-gray-300">{summary}</p>
            </div>
        </div>
    )
}
