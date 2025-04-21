import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../axios";

// Thunk to fetch all reservations
export const getAllReservationsTable = createAsyncThunk(
  'reservationsTable/getAllReservationsTable',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosClient.get(`http://localhost:8000/api/reservationstables/`);
      console.log('Server response:', res.data);
      return res.data;
    } catch (error) {
      console.error('Error fetching reservations:', error);
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

// Thunk to add a new reservation
export const addReservationTable = createAsyncThunk(
  'reservationsTable/addReservationTable',
  async (reservationData, { rejectWithValue }) => {
    try {
      await axiosClient.get('/sanctum/csrf-cookie');
      const res = await axiosClient.post(`http://localhost:8000/api/reservationstables/`, reservationData);
      console.log('Server response:', res.data);
      
      return res.data;
    } catch (error) {
      console.error('Error adding reservation:', error);
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

// delete reservation
export const deleteReservationTable = createAsyncThunk(
  'reservationsTable/deleteReservationTable',
  async (reservationId, { rejectWithValue }) => {
    try {
      await axiosClient.get('/sanctum/csrf-cookie');
      const res = await axiosClient.delete(`http://localhost:8000/api/reservationstables/${reservationId}`);
      console.log('Server response:', res.data);
      return reservationId; // Return the ID of the deleted reservation
    } catch (error) {
      console.error('Error deleting reservation:', error);
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  ReservationsTables: [],
  loading: false,
  error: null
};

// Slice
const ReservationsTableSlice = createSlice({
  name: "reservationsTable",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllReservationsTable.pending, (state) => {
        console.log("Fetching reservations: pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllReservationsTable.fulfilled, (state, action) => {
        console.log("Fetching reservations: fulfilled");
        state.loading = false;
        state.ReservationsTables = action.payload;
        state.error = null;
      })
      .addCase(getAllReservationsTable.rejected, (state, action) => {
        console.log("Fetching reservations: rejected", action.payload);
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(addReservationTable.pending, (state) => {
        console.log("Adding reservation: pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(addReservationTable.fulfilled, (state, action) => {
        console.log("Adding reservation: fulfilled");
        state.loading = false;
        state.ReservationsTables.push(action.payload);
        state.error = null;
      })
      .addCase(addReservationTable.rejected, (state, action) => {
        console.log("Adding reservation: rejected", action.payload);
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(deleteReservationTable.pending, (state) => {
        console.log("Deleting reservation: pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReservationTable.fulfilled, (state, action) => {
        console.log("Deleting reservation: fulfilled");
        state.loading = false;
        // Filter out the deleted reservation from the state
        state.ReservationsTables = state.ReservationsTables.filter(
          (reservation) => reservation.id !== action.payload
        );
        state.error = null;
      })
      
      .addCase(deleteReservationTable.rejected, (state, action) => {
        console.log("Deleting reservation: rejected", action.payload);
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  }
});

export default ReservationsTableSlice.reducer;
