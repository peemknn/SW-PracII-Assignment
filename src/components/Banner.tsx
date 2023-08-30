import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className='block p-5 m-0 w-[100vw]  h-[70vh] relative'>
          <Image src={"/Img/banner.jpg"} alt="cover" fill={true} objectFit="cover" />
          <div className='absolute p-2 rounded-lg bottom-1 right-1 text-center bg-white flex flex-col '>
              <h1 className='text-3xl'>ถึงแม้จะหมดยุคโควิดแล้ว แต่วัคซีนก็ยังจำเป็นสำหรับทุกคน</h1>
              <a className='text-xl' href="#">จองคิวฉีดวัคซีน ณ โรงพยาบาลใกล้บ้านคุณได้ที่นี่</a>
          </div>
    </div>
  );
}
