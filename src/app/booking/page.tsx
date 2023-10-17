import LocationDateReserve from "@/components/LocationDateReserve";
import {
  TextField,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-2">
      <div className="text-2xl">Name: {profile.data.name}</div>
      <table className="table-auto border-seperate border-spacing-2">
        <tbody>
          <tr>
            <td>Email</td>
            <td>{profile.data.email}</td>
          </tr>
          <tr>
            <td>Tel.</td>
            <td>{profile.data.tel}</td>
          </tr>
          <tr>
            <td>Member Since</td>
            <td>{createdAt.toString()}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-xl font-medium">New Reservation</div>
      <div className="w-fit space-y-2 space-x-5">
        <div className="ml-5">Fullname</div>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Surname" variant="outlined" />
      </div>
      <div className="w-fit space-y-2 space-x-5">
        <div className="ml-5">Citizen ID</div>
        <TextField
          id="outlined-basic"
          label="Citizen ID"
          variant="outlined"
          className="w-[29em]"
        />
      </div>

      <div className="w-fit space-y-2 ">
        <div>Date and Location</div>
        <LocationDateReserve />
      </div>

      <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
        Check Availability
      </button>
    </main>
  );
}
