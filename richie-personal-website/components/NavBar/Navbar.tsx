import Link from "next/link";
import styles from "./Navbar.module.css";
import { Aldrich } from 'next/font/google';

const aldrich = Aldrich({ subsets: ['latin'], weight: '400' });


export default function Navbar() {

  return (
    <nav className={`${styles['navbar']} ${styles['fly-in-top']} flex justify-center`}>
      <div className={`${styles['navbar_directory']} ${aldrich.className}`}>
        <Link href="/#orv">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#work">Work</Link>
        <Link href="/#connect">Links</Link>
      </div>
    </nav>
  );
}
