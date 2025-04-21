import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosClient } from "../axios";
import { ClientApi } from "../../service/Api/Client/ClientApi";

// Thunk to fetch all repas
export const getAllRepas = createAsyncThunk('repaSlice/getAllRepas', async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/repas");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// Thunk to add a new repa
export const addRepa = createAsyncThunk('repaSlice/addRepa', async (formData) => {
  try {
    await ClientApi.getCsrfToken();
    const res = await axiosClient.post("http://127.0.0.1:8000/api/repas", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// Thunk to delete a repa
export const deleteRepa = createAsyncThunk('repaSlice/deleteRepa', async (id) => {
  try {
    const rep = await axiosClient.delete(`http://localhost:8000/api/repas/${id}`);
    console.log('Delete response:', rep.data);
    return id;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const iniState = {
  repas: [],
  loading: true,
  error: false,
};

const RepaSlice = createSlice({
  name: "repaSlice",
  initialState: iniState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRepas.pending, (state) => {
        console.log("Fetching repas pending");
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllRepas.fulfilled, (state, action) => {
        state.loading = false;
        state.repas = action.payload;
        state.error = false;
      })
      .addCase(getAllRepas.rejected, (state) => {
        console.log("Fetching repas error");
        state.loading = false;
        state.error = true;
      })
      .addCase(addRepa.pending, (state) => {
        console.log("Adding repa pending");
        state.loading = true;
        state.error = false;
      })
      .addCase(addRepa.fulfilled, (state, action) => {
        state.loading = false;
        state.repas.push(action.payload);
        state.error = false;
      })
      .addCase(addRepa.rejected, (state) => {
        console.log("Adding repa error");
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteRepa.fulfilled, (state, action) => {
        console.log("Delete fulfilled:", action.payload);
        state.repas = state.repas.filter(repa => repa.id !== action.payload);
      })
      .addCase(deleteRepa.rejected, (state, action) => {
        console.error('Error deleting repa:', action.payload);
      });
  },
});

export default RepaSlice.reducer;
