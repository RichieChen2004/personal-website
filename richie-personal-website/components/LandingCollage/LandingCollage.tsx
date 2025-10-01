import Image from "next/image";
import { useIsMobile } from "@/util/useIsMobile"
import styles from "./LandingCollage.module.css";

export default function LandingCollage() {

  const width = 200;
  const height = 450;

  const isMobile = useIsMobile()

  return (
    <div id="orv" className="flex items-center justify-center w-full h-screen relative bg-[white] rounded-b-2xl shadow-lg">
      <div className={`relative w-1/2 max-w-lg aspect-[736/1308] ${ isMobile ? "-translate-x-12 translate-y-13 scale-90" : ""}`}>

        {/* Background */}
        <div className={`${styles['origin']} -translate-x-25 -translate-y-100 ${styles['fly-in-right']}`}>
          <Image
            src="/dokja/zero.jpg"
            alt="zero"
            width={width}
            height={height}
            className={styles['hover-scale']}
          />
        </div>

        <div className={`${styles['origin']} translate-x-40 -translate-y-50 ${styles['fly-in-left']}`}>
          <Image
            src="/dokja/right face.jpg"
            alt="right face"
            width={width}
            height={height}
            className={styles['hover-scale']}
          />
        </div>

        <div className={`${styles['origin']} -translate-x-22 -translate-y-1 ${styles['fly-in-right']}`}>
          <Image
            src="/dokja/shoulder.jpg"
            alt="shoulder"
            width={width}
            height={height}
            className={styles['hover-scale']}
          />
        </div>

        <div className={`${styles['origin']} translate-x-35 translate-y-6 ${styles['fly-in-left']}`}>
          <Image
            src="/dokja/1863th.jpg"
            alt="1863th"
            width={width}
            height={height}
            className={styles['hover-scale']}
          />
        </div>


        {/* Foreground */}

        <div className={`${styles['origin']} -translate-x-18 -translate-y-74 ${styles['fly-in-left']}`}>
          <Image
            src="/dokja/eye.jpg"
            alt="eye"
            width={width}
            height={height}
            className={styles['hover-scale']}
          />
        </div>

        <div className={`${styles['origin']} -translate-x-4 translate-y-4 ${styles['fly-in-left']}`}>
          <Image
            src="/dokja/999.jpg"
            alt="999"
            width={width}
            height={height}
            className={styles['hover-scale']}
          />
        </div>

        <div className={`${styles['origin']} translate-x-9.5 -translate-y-42.5 ${styles['fly-in-right']}`}>
          <Image
            src="/dokja/3rd.jpg"
            alt="3rd"
            width={width}
            height={height}
            className={styles['hover-scale']}
          />
        </div>

        <div className={`${styles['origin']} translate-x-18 translate-y-40 ${styles['fly-in-right']}`}>
          <Image
            src="/dokja/nose.jpg"
            alt="nose"
            width={width}
            height={height}
            className={styles['hover-scale']}
          />
        </div>
      </div>
    </div>
  );
}
