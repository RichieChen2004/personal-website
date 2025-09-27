import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (

    <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#171719] text-white shadow">
      <div className={styles.nav_button}>Richie Chen</div>
      <div className="flex gap-4">
        <Link href="/" className={styles.nav_button}>CV</Link>
        <a
            href="https://www.linkedin.com/in/richie-chen-133451359"
            className={styles.nav_button}
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
        </a>
        <Link href="/contact" className={styles.nav_button}>Connect</Link>
      </div>
    </nav>
  );
}