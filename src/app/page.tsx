import Image from 'next/image'
import styles from './page.module.css'
import Banner from "@/components/Banner"
import InfoCard from '@/components/InfoCard';
import { notoSansThai } from "../utils/fonts";

export default function Home() {
  return (
    <main className={notoSansThai.className}>
      <Banner />
      <div className={styles.card}>
        <InfoCard />
      </div>
      
    </main>
  )
}
