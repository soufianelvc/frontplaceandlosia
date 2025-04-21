 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axiosClient } from "../axios";


export const getClientById = createAsyncThunk('clientSlice/getClientById', async (id) => {
  try {
    const response = await axiosClient.get(`http://localhost:8000/api/users/${id}`);
    console.log('Get user response:', response.data);
    return response.data.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const iniState = {
  Client : [],
  loading : true ,
  error : false
}
const ClientSlice = createSlice({
  name : "clientSlice",
  initialState : iniState,
  reducers : {},
  extraReducers: (builder)=>{
    builder.addCase(getClientById.pending, (state) => {
      // console.log("get user by id pending");
      state.loading = true;
      state.error = false;
    })
    .addCase(getClientById.fulfilled, (state, action) => {
      console.log("get user by id fulfilled");
        state.Client= action.payload;
        state.error = false;
        state.loading = false;
    })
    .addCase(getClientById.rejected, (state) => {
      console.log("get user by id error");
      state.loading = false;
      state.error = true;
    });
  }
})


export default ClientSlice.reducer ; 
