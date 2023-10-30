"use client";

import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";
import { Dayjs } from "dayjs";
export default function LocationDateReserve({
  onDateChange,
  onLocationChange,
}: {
  onDateChange: Function;
  onLocationChange: Function;
}) {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [location, setLocation] = useState("CU");
  return (
    <div
      className="rounded-lg space-x-5 space-y-2
  w-fit  flex flex-row justify-center"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white w-[14em]"
          value={reserveDate}
          onChange={(value) => {
            setReserveDate(value);
            onDateChange(value);
          }}
        />
      </LocalizationProvider>
      <Select
        variant="standard"
        name="location"
        id="location"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          onLocationChange(e.target.value);
        }}
        className="h-[2em] w-[195px]"
      >
        <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
        <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
        <MenuItem value="Thammasat University Hospital">Thammasat University Hospital</MenuItem>
      </Select>
    </div>
  );
}
