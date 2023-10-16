import Image from "next/image";
import * as React from "react";
import InteractiveCard from "./InteractiveCard";


export default function InfoCard({
  hospitalName,
  imgSrc,
  onCompare,
}: {
  hospitalName: string;
  imgSrc: string;
  onCompare?: Function;
}) {
  
  return (
    <InteractiveCard contentName={hospitalName}>
      <div className="w-full h-[50%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          objectFit="cover"
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[10%] mt-3 mx-3">{hospitalName}</div>
      {
        onCompare?<button
        className="block h-[10%] font-primary text-sm rounded-md bg-sky-600 hover:bg-indigo-600 mx-3 my-2 px-1 py-1 text-white shadow-sm"
        onClick={(e) => {
          e.preventDefault();
          onCompare(hospitalName);
        }}
      >
        Compare
      </button>:''

      }
      
    </InteractiveCard>
  );
}
