import Image from "next/image";

export default function hospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const mockHospitalRepo = new Map();
  mockHospitalRepo.set("001", {
    hospitalName: "Chulalongkorn Hospital",
    image: "/img/chula.jpg",
    value: null,
  });
  mockHospitalRepo.set("002", {
    hospitalName: "Rajavithi Hospital",
    image: "/img/rajavithi.jpg",
    value: null,
  });
  mockHospitalRepo.set("003", {
    hospitalName: "Thammasat Hospital",
    image: "/img/thammasat.jpg",
    value: null,
  });

  return (
    <main className="text-center p-5">
      <h1 className="text-lg font-medium">Hospital ID {params.hid}</h1>
      <div className="flex flex-row my-5">
        <Image
          src={mockHospitalRepo.get(params.hid).image}
          alt="Car Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%]"
        ></Image>
        <div className="text-md mx-5">
          {mockHospitalRepo.get(params.hid).hospitalName}
        </div>
      </div>
    </main>
  );
}
