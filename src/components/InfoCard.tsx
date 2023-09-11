import styles from "./infocard.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function InfoCard({hospitalName,imgSrc} : {hospitalName:string,imgSrc:string}) {
  return (
    <InteractiveCard contentName={hospitalName}>
      <div className='w-full h-[70%] relative rounded-t-lg'>
        <Image
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          objectFit="cover"
          className='object-cover rounded-t-lg'
        />
      </div>
      <div className='w-full h-[30%] p-[10px]'>{hospitalName}</div>
    </InteractiveCard>
  );
}
