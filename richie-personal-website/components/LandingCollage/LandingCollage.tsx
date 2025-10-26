import Image from "next/image";
import { useIsMobile } from "@/util/useIsMobile"
import styles from "./LandingCollage.module.css";

export default function LandingCollage() {

  const width = 200;
  const height = 450;

  const isMobile = useIsMobile()

  return (
    <div id="orv" className="flex items-center justify-center w-full h-screen relative bg-[white] rounded-b-2xl shadow-lg">
      <div className={`relative w-1/2 max-w-lg aspect-[736/1308] ${isMobile ? "scale-90 -translate-x-[18%] -translate-y-[-50%]" : "-translate-x-[0%] -translate-y-[-50%]"}`}>
        <div className={`relative`}>

          {/* Background */}
          <div className={`${styles['origin']} ${styles['fly-in-right']}`}>
            <div className={styles.zero}>
              <Image src="/dokja/zero.jpg" alt="zero" width={width} height={height} className={styles['hover-scale']} />
            </div>
          </div>

          <div className={`${styles['origin']} ${styles['fly-in-left']}`}>
            <div className={styles.rightFace}>
              <Image src="/dokja/right face.jpg" alt="right face" width={width} height={height} className={styles['hover-scale']} />
            </div>
          </div>

          <div className={`${styles['origin']} ${styles['fly-in-right']}`}>
            <div className={styles.shoulder}>
              <Image src="/dokja/shoulder.jpg" alt="shoulder" width={width} height={height} className={styles['hover-scale']} />
            </div>
          </div>

          <div className={`${styles['origin']} ${styles['fly-in-left']}`}>
            <div className={`${styles.img1863}`}>
              <Image src="/dokja/1863th.jpg" alt="1836" width={width} height={height} className={styles['hover-scale']} />
            </div>
          </div>

          {/* Foreground */}

          <div className={`${styles['origin']} ${styles['fly-in-left']}`}>
            <div className={styles.eye}>
              <Image src="/dokja/eye.jpg" alt="eye" width={width} height={height} className={styles['hover-scale']} />
            </div>
          </div>

          <div className={`${styles['origin']} ${styles['fly-in-left']}`}>
            <div className={styles.n999}>
              <Image src="/dokja/999.jpg" alt="999" width={width} height={height} className={styles['hover-scale']} />
            </div>
          </div>

          <div className={`${styles['origin']} ${styles['fly-in-right']}`}>
            <div className={styles.third}>
              <Image src="/dokja/3rd.jpg" alt="third" width={width} height={height} className={styles['hover-scale']} />
            </div>
          </div>

          <div className={`${styles['origin']} ${styles['fly-in-right']}`}>
            <div className={styles.nose}>
              <Image src="/dokja/nose.jpg" alt="nose" width={width} height={height} className={styles['hover-scale']} />
            </div>
          </div>

          <div className={`${styles['origin']} ${styles['fly-in-left']}`}>
            <div className={styles.n999}>
              <Image src="/dokja/999.jpg" alt="999" width={width} height={height} className={styles['hover-scale']} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
