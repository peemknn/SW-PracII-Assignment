'use client'

import {useState} from "react"
import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  const covers = ['/img/banner1.jpg','/img/banner2.jpg','/img/banner3.jpg','/img/banner4.jpg']
  const [index,setIndex] = useState(0)
  return (
    <div className='block p-5 m-0 w-[100vw]  h-[60vh] relative' onClick={()=>{ setIndex(index+1)}}>
          <Image src={covers[index%4]} alt="cover" fill={true} objectFit="cover" />
          <div className='absolute p-4 m-5 rounded-lg bottom-1 right-1 text-center bg-white flex flex-col '>
              <h1 className='text-3xl'>ถึงแม้จะหมดยุคโควิดแล้ว แต่วัคซีนก็ยังจำเป็นสำหรับทุกคน</h1>
              <a className='text-xl' href="#">จองคิวฉีดวัคซีน ณ โรงพยาบาลใกล้บ้านคุณได้ที่นี่</a>
          </div>
    </div>
  );
}
