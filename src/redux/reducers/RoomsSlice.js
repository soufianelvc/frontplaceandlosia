import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosClient } from "../axios";
import { ClientApi } from "../../service/Api/Client/ClientApi";


export const getAllRoom = createAsyncThunk('roomSlice/getAllRoom',async()=>{
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/rooms");
    console.log(res.data);
    return res.data;
    
  } catch (error) {
    console.log(error)
  }
});
export const addRoom = createAsyncThunk('roomSlice/addRoom', async (formData) => {
  try {
    await ClientApi.getCsrfToken();
    const res = await axiosClient.post("http://127.0.0.1:8000/api/rooms", formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
export const deleteRoom = createAsyncThunk('roomSlice/deleteRoom', async (id) => {
  try {
    // await ClientApi.getCsrfToken();
    const rep = await axiosClient.delete(`http://localhost:8000/api/rooms/${id}`);
    console.log('Delete response:', rep.data);
    return id;
  } catch (error) {
    console.log(error);
    throw error;
  }
});


const iniState = {
  Rooms : [],
  loading : true ,
  error : false

}

const RoomSlice = createSlice({
  name : "roomSlice",
  initialState : iniState,
  reducers : {},
  extraReducers: (builder)=>{
    builder.addCase(getAllRoom.pending,(state)=>{
      console.log("pending");
      state.loading = true ;
      state.error = false ; 
    }).addCase(getAllRoom.fulfilled,(state,action)=>{
      state.loading = false ;
      state.Rooms= action.payload ;
      state.error = false ; 
    }).addCase(getAllRoom.rejected,(state)=>{
      console.log("error");
      state.loading = false  ;
      state.error = true ;
    })
    .addCase(addRoom.pending, (state) => {
      console.log("adding room pending");
      state.loading = true;
      state.error = false;
    })
    .addCase(addRoom.fulfilled, (state, action) => {
      state.loading = false;
      state.Rooms.push(action.payload);
      state.error = false;
    })
    .addCase(addRoom.rejected, (state) => {
      console.log("adding room error");
      state.loading = false;
      state.error = true;
    })
    .addCase(deleteRoom.fulfilled, (state, action) => {
      console.log("Delete fulfilled:", action.payload); // Log delete action payload
      state.Reservations = state.Rooms.filter(room => room.id !== action.payload);
    })
    .addCase(deleteRoom.rejected, (state, action) => {
      console.error('Error deleting room:', action.payload);
    });
  }
})

export default RoomSlice.reducer ; 
