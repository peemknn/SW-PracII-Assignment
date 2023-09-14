"use client";
import InfoCard from "./InfoCard";
import { useReducer } from "react";

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

  return (
    <div>
      <div className="m-20 flex flex-row content-around justify-around flex-wrap">
        <InfoCard
          hospitalName="Chulalongkorn Hospital"
          imgSrc="/img/chula.jpg"
          onCompare={(hospital: string, rating: string) =>
            dispatchCompare({
              type: "add",
              hospitalName: hospital,
              value: rating,
            })
          }
        />
        <InfoCard
          hospitalName="Rajavithi Hospital"
          imgSrc="/img/rajavithi.jpg"
          onCompare={(hospital: string, rating: string) =>
            dispatchCompare({
              type: "add",
              hospitalName: hospital,
              value: rating,
            })
          }
        />
        <InfoCard
          hospitalName="Thammasat Hospital"
          imgSrc="/img/thammasat.jpg"
          onCompare={(hospital: string, rating: string) =>
            dispatchCompare({
              type: "add",
              hospitalName: hospital,
              value: rating,
            })
          }
        />
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
