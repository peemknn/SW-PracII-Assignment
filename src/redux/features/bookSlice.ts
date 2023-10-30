import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookState = {
  hospitalItems: BookingItem[];
};

const initialState: BookState = { hospitalItems: [] };

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      state.hospitalItems.push(action.payload);
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      const remainItems = state.hospitalItems.filter((obj) => {
        return (
          obj.hopitalName !== action.payload.hopitalName ||
          obj.patientName !== action.payload.patientName ||
          obj.patientSurname !== action.payload.patientSurname ||
          obj.bookingDate !== action.payload.bookingDate
        );
      });
      state.hospitalItems = remainItems;
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
