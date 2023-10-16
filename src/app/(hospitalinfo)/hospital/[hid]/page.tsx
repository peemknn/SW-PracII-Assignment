import getHospital from "@/libs/getHospital";
import Image from "next/image";

export default async function hospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hospitalDetail = await getHospital(params.hid)

  return (
    <main className="text-center p-5">
      <h1 className="text-lg font-medium">{hospitalDetail.data.name}</h1>
      <div className="flex flex-row my-5">
        <Image
          src={hospitalDetail.data.picture}
          alt="Hospital Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%] bg-black"
        ></Image>
        <div className="text-md mx-5">
          {hospitalDetail.data.description}
          <div>Address: {hospitalDetail.data.address}</div>
          <div>District: {hospitalDetail.data.district}</div>
          <div>Province: {hospitalDetail.data.province}</div>
          <div>Postal Code: {hospitalDetail.data.postalcode}</div>
          <div>Telephone: {hospitalDetail.data.tel}</div>
        </div>
      </div>
    </main>
  );
}
