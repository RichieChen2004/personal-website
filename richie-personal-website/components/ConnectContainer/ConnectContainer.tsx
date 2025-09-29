import Image from "next/image";
import styles from "./ConnectContainer.module.css";

export default function ConnectContainer() {
  return (
    <div className={styles.connect_container} tabIndex={0}>
      <div className={styles.flip_inner}>
        <div className={styles.front}>
          Let's connect!
        </div>
        <div className={styles.back}>
            <Image src="/svg/linkedin.svg" alt="linkedin" width={24} height={24} />
            <div className="flex flex-col ml-2">
                <a href="https://www.linkedin.com/in/richie-chen-9b4b621b4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:richiechen2004@gmail.com">Email</a>
            </div>
        </div>
      </div>
    </div>
  );
}
