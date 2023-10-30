import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import HospitalCatalog from "@/components/HospitalCatalog";
import AddHospital from "@/components/AddHospital";

export default async function Hospital() {
  const hospitals = getHospitals();

  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium">Select Your Hospital</h1>
      <Suspense
        fallback={
          <p>
            Loading...
            <LinearProgress />
          </p>
        }
      >
        <HospitalCatalog hospitalJson={hospitals} />
        <AddHospital></AddHospital>
      </Suspense>
    </main>
  );
}
