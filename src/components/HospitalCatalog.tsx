import Link from "next/link";
import InfoCard from "./InfoCard";

export default async function HospitalCatalog({hospitalJson}:{hospitalJson:Object}){

 const hospitalJsonReady = await hospitalJson
 return (
  <>
  Explore {hospitalJsonReady.count} hospitals in our services.
  
  <div style ={{margin : "20px", display:"flex",
   flexDirection:"row", alignContent:"space-around", 
   justifyContent:"space-around", flexWrap:"wrap",padding:"10px"}}>

    {
     hospitalJsonReady.data.map((hospitalItem:Object)=>(
      <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
       <InfoCard hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}/>
      </Link>
     ))
    }
   </div>
  </>
 )

}