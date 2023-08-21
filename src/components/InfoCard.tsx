import styles from "./infocard.module.css";
import Image from "next/image";

export default function InfoCard() {
  return (
    <div className={styles.infoCard}>
      <div className={styles.cardimg}>
        <Image
          src={"/img/astravac.jpg"}
          alt="Product Picture"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardText}>
        <h1 className={styles.cardTitle}>วัคซีน Astrazeneca</h1>
        <p className={styles.cardDetail}>
          วัคซีน “แอสตร้าเซนเนก้า” (AstraZeneca)
          เป็นวัคซีนแบบเทคนิคไวรัลแว็กเตอร์ (Viral Vector)
          ผลิตจากเชื้อไวรัสอะดีโนเป็นพาหะ ( Adenoviral vector )
          พัฒนาโดยการนำไวรัสที่ถูกทำให้อ่อนฤทธิ์ลง
          แล้วฝากสารพันธุกรรมของโควิด-19
          เข้าไปซึ่งทำให้ไม่สามารถแบ่งตัวและไม่สามารถก่อให้เกิดโรคในมนุษย์ได้
        </p>
      </div>
    </div>
  );
}
