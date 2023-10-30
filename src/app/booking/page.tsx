"use client";
import LocationDateReserve from "@/components/LocationDateReserve";
import { TextField } from "@mui/material";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../interfaces";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

export default function Booking() {
  const dispatch = useDispatch<AppDispatch>();

  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [bookingLocation, setBookingLocation] = useState<string>("");
  const [citizenId, setCitizenId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const makeReservation = () => {
    if (bookingLocation && bookingDate && name && surname) {
      const item: BookingItem = {
        hospitalId: "",
        hopitalName: bookingLocation,
        patientName: name,
        patientSurname: surname,
        citizenId: citizenId,
        bookingDate: dayjs(bookingDate).format("YYYY/MM/DD"),
        bookingLocation: bookingLocation,
      };
      dispatch(addBooking(item));
    }
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-2">
      <div className="text-xl font-medium">New Reservation</div>
      <div className="w-fit space-y-2 space-x-5">
        <div className="ml-5">Fullname</div>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Surname"
          variant="outlined"
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="w-fit space-y-2 space-x-5">
        <div className="ml-5">Citizen ID</div>
        <TextField
          id="outlined-basic"
          label="Citizen ID"
          variant="outlined"
          className="w-[29em]"
          onChange={(e) => setCitizenId(e.target.value)}
        />
      </div>

      <div className="w-fit space-y-2 ">
        <div>Date and Location</div>
        <LocationDateReserve
          onDateChange={(value: Dayjs) => {
            setBookingDate(value);
          }}
          onLocationChange={(value: string) => setBookingLocation(value)}
        />
      </div>

      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        onClick={makeReservation}
      >
        Book now
      </button>
    </main>
  );
}
