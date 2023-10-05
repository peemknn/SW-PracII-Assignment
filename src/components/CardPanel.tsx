"use client";
import InfoCard from "./InfoCard";
import { useReducer } from "react";
import Link from "next/link";

export default function CardPanel() {
  const compareReducer = (
    compareList: Map<string, string>,
    action: { type: string; hospitalName: string; value: string }
  ) => {
    switch (action.type) {
      case "add": {
        return new Map(compareList.set(action.hospitalName, action.value));
      }
      case "remove": {
        compareList.delete(action.hospitalName);
        return new Map(compareList);
      }
      default:
        return compareList;
    }
  };

  const [compareList, dispatchCompare] = useReducer(
    compareReducer,
    new Map<string, string>()
  );

  const mockHospitalRepo = [
    {
      hid: "001",
      hospitalName: "Chulalongkorn Hospital",
      image: "/img/chula.jpg",
      
    },
    {
      hid: "002",
      hospitalName: "Rajavithi Hospital",
      image: "/img/rajavithi.jpg",
      
    },
    {
      hid: "003",
      hospitalName: "Thammasat Hospital",
      image: "/img/thammasat.jpg",
      
    }
  ];

  return (
    <div>
      <div className="m-20 flex flex-row content-around justify-around flex-wrap">
        {mockHospitalRepo.map((hospitalItem) => (
          <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
          <InfoCard
            hospitalName={hospitalItem.hospitalName}
            imgSrc={hospitalItem.image}
            onCompare={(hospital: string, rating : string) =>
              dispatchCompare({ type: "add", hospitalName: hospital , value : rating})
            }
          />
        </Link>
        ))}
      </div>
      <div className="w-full text-xl font-md font-primary">
        Hospital List: {compareList.size}
      </div>
      {Array.from(compareList.entries()).map(([hospital, value]) => (
        <div
          key={hospital}
          onClick={() =>
            dispatchCompare({
              type: "remove",
              hospitalName: hospital,
              value: value,
            })
          }
        >
          {hospital} Rating : {value.toString()} star
        </div>
      ))}
    </div>
  );
}
