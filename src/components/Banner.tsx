'use client'

import {useState} from "react"
import styles from "./banner.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Banner() {
  const covers = ['/img/banner1.jpg','/img/banner2.jpg','/img/banner3.jpg','/img/banner4.jpg']
  const [index,setIndex] = useState(0)
  const router = useRouter();
  return (
    <div className='block p-5 m-0 w-[100vw]  h-[60vh] relative' onClick={()=>{ setIndex(index+1)}}>
          <Image src={covers[index%4]} alt="cover" fill={true} objectFit="cover" />
          <div className='absolute p-4 m-5 rounded-lg top-1 left-1 text-center bg-white flex flex-col '>
              <h1 className='text-3xl font-primary'>ถึงแม้จะหมดยุคโควิดแล้ว แต่วัคซีนก็ยังจำเป็นสำหรับทุกคน</h1>
              <a className='text-xl font-primary' href="#">จองคิวฉีดวัคซีน ณ โรงพยาบาลใกล้บ้านคุณได้ที่นี่</a>
          </div>
          <button
        className="bg-white font-primary text-lg text-black border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
      hover:bg-cyan-600 hover:text-white hover:border-transparent"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/hospital");
        }}
      >
        เลือกสถานที่ฉีดวัคซีนของคุณที่นี่
      </button>
    </div>
  );
}
