import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosClient } from "../axios";

export const getAllReservationClient = createAsyncThunk('reservationClientSlice/getAllReservationClient', async (id) => {
  try {
    const res = await axios.get(`http://placeandalosia.free.nf/api/reservationsClient/${id}`);
    console.log('Server response:', res.data); // Log server response
    return res.data;
  } catch (error) {
    console.error('Error fetching reservations:', error); // Log error
    throw error; // Rethrow the error to be handled by Redux Toolkit
  }
});

export const deleteReservation = createAsyncThunk('reservationClientSlice/deleteReservation', async (reservationId, { rejectWithValue }) => {
  try {
    const response = await axiosClient.delete(`http://placeandalosia.free.nf/api/reservations/${reservationId}`);
    console.log('Delete response:', response.data); // Log delete response
    return reservationId;
  } catch (error) {
    console.error('Error deleting reservation:', error); // Log error
    return rejectWithValue(error.response.data);
  }
});

const iniState = {
  Reservations: [],
  loading: true,
  error: false
};

const ReservationRClientSlice = createSlice({
  name: "reservationClientSlice",
  initialState: iniState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllReservationClient.pending, (state) => {
        console.log("pending");
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllReservationClient.fulfilled, (state, action) => {
        state.loading = false;
        state.Reservations = action.payload;
        state.error = false;
      })
      .addCase(getAllReservationClient.rejected, (state) => {
        console.log("error");
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        console.log("Delete fulfilled:", action.payload); // Log delete action payload
        state.Reservations = state.Reservations.filter(reservation => reservation.id !== action.payload);
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        console.error('Error deleting reservation:', action.payload);
      });
  }
});

export default ReservationRClientSlice.reducer;
