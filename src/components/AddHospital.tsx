import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function AddHospital() {
  const addHospital = async (addHospitalForm: FormData) => {
    "use server";
    const name = addHospitalForm.get("name");
    const address = addHospitalForm.get("address");
    const district = addHospitalForm.get("district");
    const province = addHospitalForm.get("province");
    const tel = addHospitalForm.get("tel");
    const postalCode = addHospitalForm.get("postcode");
    const picture = addHospitalForm.get("picture");

    try {
      await dbConnect();
      const hospital = await Hospital.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalcode: postalCode,
        tel: tel,
        picture: picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidateTag("hospitals");
    redirect("/hospital");
  };
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);
  if (profile.data.role == "admin") {
    return (
      <form action={addHospital} className="self-center">
        <div className="text-xl text-blue-700">Create Hospital</div>
        <div className="flex items-center w-1/2 my-2">
          <label className="w-auto block text-grey-700 pr-4" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            required
            id="name"
            name="name"
            placeholder="Hospital Name"
            className="bg-white border-2 border-grey-200 rounded w-full p-2 text-grey-700 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex items-center w-1/2 my-2">
          <label className="w-auto block text-grey-700 pr-4" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            required
            id="address"
            name="address"
            placeholder="Address"
            className="bg-white border-2 border-grey-200 rounded w-full p-2 text-grey-700 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex items-center w-1/2 my-2">
          <label className="w-auto block text-grey-700 pr-4" htmlFor="tel">
            Telephone
          </label>
          <input
            type="text"
            required
            id="tel"
            name="tel"
            placeholder="Tel"
            className="bg-white border-2 border-grey-200 rounded w-full p-2 text-grey-700 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex items-center w-1/2 my-2">
          <label className="w-auto block text-grey-700 pr-4" htmlFor="district">
            District
          </label>
          <input
            type="text"
            required
            id="district"
            name="district"
            placeholder="District"
            className="bg-white border-2 border-grey-200 rounded w-1/3 p-2 text-grey-700 focus:outline-none focus:border-blue-400"
          />
          <label className="w-auto block text-grey-700 px-4" htmlFor="province">
            Province
          </label>
          <input
            type="text"
            required
            id="province"
            name="province"
            placeholder="Province"
            className="bg-white border-2 border-grey-200 rounded w-1/3 p-2 text-grey-700 focus:outline-none focus:border-blue-400"
          />
          <label className="w-auto block text-grey-700 px-4" htmlFor="postcode">
            Postal Code
          </label>
          <input
            type="text"
            required
            id="postcode"
            name="postcode"
            placeholder="Postal Code"
            className="bg-white border-2 border-grey-200 rounded w-1/3 p-2 text-grey-700 focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="flex items-center w-1/2 my-2">
          <label className="w-auto block text-grey-700 pr-4" htmlFor="picture">
            Picture
          </label>
          <input
            type="text"
            required
            id="picture"
            name="picture"
            placeholder="URL"
            className="bg-white border-2 border-grey-200 rounded w-full p-2 text-grey-700 focus:outline-none focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        >
          Add New Hospital
        </button>
      </form>
    );
  } else {
    return null;
  }
}
