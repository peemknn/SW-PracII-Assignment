import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
          <Image src={"/Img/banner.jpg"} alt="cover" fill={true} objectFit="cover" />
          <div className={styles.bannerText}>
              <h1 className={styles.bannerTitle}>ถึงแม้จะหมดยุคโควิดแล้ว แต่วัคซีนก็ยังจำเป็นสำหรับทุกคน</h1>
              <a className={styles.bannerLink} href="#">จองคิวฉีดวัคซีน ณ โรงพยาบาลใกล้บ้านคุณได้ที่นี่</a>
          </div>
    </div>
  );
}
