import Image from 'next/image'
import styles from './page.module.css'
import Banner from "@/components/Banner"
import CardPanel from '@/components/CardPanel';
import InfoCard from '@/components/InfoCard';
import { notoSansThai } from "../utils/fonts";

export default function Home() {
  return (
    <main className={notoSansThai.className}>
      <Banner />
      
      
      
    </main>
  )
}
