import { Aldrich } from 'next/font/google';

const aldrich = Aldrich({ subsets: ['latin'], weight: '400' });

export default function Footer() {
  return (
    <footer className={`${aldrich.className} flex items-center justify-center w-full h-24 border-t border-[#fcbe11]-300`}>
        <div className="flex flex-col items-center">
            <p className="text-gray-500">© 2025 Richie Chen. All rights reserved.</p>
            <p className="text-gray-500">Landing Page Artwork By @1L9l2Aa8UCL0IGJ on X</p>
        </div>
    </footer>
  );
}