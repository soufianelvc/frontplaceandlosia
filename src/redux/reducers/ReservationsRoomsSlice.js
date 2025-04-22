import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosClient } from "../axios";
// import { axiosClient } from "../axios";

export const getAllReservations = createAsyncThunk('reservationsSlice/getAllReservations', async (id) => {
  try {
    const res = await axios.get(`http://placeandalosia.free.nf/api/reservations/`);
    console.log('Server response:', res.data); // Log server response
    return res.data;
  } catch (error) {
    console.error('Error fetching reservations:', error); // Log error
    throw error; 
  }
});
export const addReservation = createAsyncThunk('reservationsSlice/addReservation', async (reservationData) => {
  try {
    await axiosClient.get('/sanctum/csrf-cookie');
    const res = await axiosClient.post(`http://placeandalosia.free.nf/api/reservations/`, reservationData);
    console.log('Server response:', res.data); 
    return res.data;
  } catch (error) {
    console.error('Error adding reservation:', error); 
    throw error; 
  }
});

const iniState = {
  ReservationsRooms: [],
  loading: true,
  error: false
};

const ReservationsRoomsSlice = createSlice({
  name: "reservationsSlice",
  initialState: iniState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllReservations.pending, (state) => {
        console.log("pending");
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllReservations.fulfilled, (state, action) => {
        state.loading = false;
        state.ReservationsRooms = action.payload;
        state.error = false;
      })
      .addCase(getAllReservations.rejected, (state) => {
        console.log("error");
        state.loading = false;
        state.error = true;
      })

  }
});

export default ReservationsRoomsSlice.reducer;
