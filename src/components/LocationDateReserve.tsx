"use client"

import {useState} from "react"
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select , MenuItem} from "@mui/material";
export default function LocationDateReserve() {
  return (
    <div
      className="rounded-lg space-x-5 space-y-2
  w-fit  flex flex-row justify-center"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white w-[14em]" />
      </LocalizationProvider>
      <Select variant="standard" name= "location" id="location"
      className="h-[2em] w-[195px]">
       <MenuItem value="CU">Chulalongkorn Hospital</MenuItem>
       <MenuItem value="RA">Rajavithi Hospita</MenuItem>
       <MenuItem value="TU">Thammasat University Hospital
</MenuItem>

      </Select>
    </div>
  );
}