import Link from "next/link";
import styles from "./NavbarMobile.module.css";
import { Aldrich } from 'next/font/google';

const aldrich = Aldrich({ subsets: ['latin'], weight: '400' });

// Do NOT do this
// Should have a single navbar component with props to handle mobile vs desktop
// I am lazy and tired and dont want to refactor so whatever its a portfolio lmao

export default function NavbarMobile() {
  return (
    <nav className={`${styles['navbar']} ${styles['fly-in-top']} flex justify-center`}>
      <div className={`${styles['navbar_directory']} ${aldrich.className}`}>
        <Link href="/#about">About</Link>
        <Link href="/#work">Work</Link>
        <Link href="/#orv">Home</Link>
        <Link href="/#connect">Links</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
