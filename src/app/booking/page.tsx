import LocationDateReserve from "@/components/LocationDateReserve";
import {
  TextField,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

export default function Booking() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-2">
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
