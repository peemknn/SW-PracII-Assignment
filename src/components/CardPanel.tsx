"use client";
import InfoCard from "./InfoCard";
import { useReducer, useRef , useEffect ,useState} from "react";
import Link from "next/link";
import getHospitals from "@/libs/getHospitals";

export default function CardPanel() {

  
  const compareReducer = (
    compareList: Set<string>,
    action: { type: string; hospitalName: string}
  ) => {
    switch (action.type) {
      case "add": {
        return new Set(compareList.add(action.hospitalName));
      }
      case "remove": {
        compareList.delete(action.hospitalName);
        return new Set(compareList);
      }
      default:
        return compareList;
    }
  };

  const [compareList, dispatchCompare] = useReducer(
    compareReducer,
    new Set<string>()
  );
  /*

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
    },
  ];
  */

  return (
    <div>
      <div className="m-20 flex flex-row content-around justify-around flex-wrap">
      
      </div>
      <div className="w-full text-xl font-md font-primary">
        Hospital List: {compareList.size}
      </div>
      {Array.from(compareList).map((hospital) => (
        <div
          key={hospital}
          onClick={() =>
            dispatchCompare({
              type: "remove",
              hospitalName: hospital,
            })
          }
        >
        
        </div>
      ))}
    </div>
  );
}
