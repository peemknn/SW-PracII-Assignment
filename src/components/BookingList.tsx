"use client";
import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function BookingList() {
  const hospitalItems = useAppSelector(
    (state) => state.bookSlice.hospitalItems
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      {hospitalItems.map((bookingItem) =>
        bookingItem ? (
          <div
            className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
            key={bookingItem.hospitalId}
          >
            <div className="text-xl">{bookingItem.hopitalName}</div>
            <div className="text-sm">
              Fullname: {bookingItem.patientName} {bookingItem.patientSurname}
            </div>
            <div className="text-sm">Citizen ID: {bookingItem.citizenId}</div>
            <div className="text-sm">Date: {bookingItem.bookingDate}</div>
            <div className="text-sm">
              Location: {bookingItem.bookingLocation}
            </div>

            <button
              className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm"
              onClick={() => dispatch(removeBooking(bookingItem))}
            >
              Cancel
            </button>
          </div>
        ) : (
          <h1>No Vaccine Booking</h1>
        )
      )}
    </>
  );
}
