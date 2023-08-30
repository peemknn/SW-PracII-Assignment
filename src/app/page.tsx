import Image from 'next/image'
import styles from './page.module.css'
import Banner from "@/components/Banner"
import InfoCard from '@/components/InfoCard';
import { notoSansThai } from "../utils/fonts";

export default function Home() {
  return (
    <main className={notoSansThai.className}>
      <Banner />
      <div className='m-20 flex flex-row content-around justify-around flex-wrap'
        >
        <InfoCard hospitalName="Chulalongkorn Hospital" imgSrc="/img/chula.jpg" />
        <InfoCard hospitalName="Rajavithi Hospital" imgSrc="/img/rajavithi.jpg" />
        <InfoCard hospitalName="Thammasat Hospital" imgSrc="/img/thammasat.jpg" />
      </div>
      
    </main>
  )
}
