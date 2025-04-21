import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosClient } from "../axios";
import { ClientApi } from "../../service/Api/Client/ClientApi";


export const getAllCmdClient = createAsyncThunk('cmdClientSlice/getAllCmdClient', async (id) => {
  try {
    const res = await axios.get(`http://localhost:8000/api/commandss/${id}`);
    // console.log('Server response:', res.data); 
    return res.data;
  } catch (error) {
    console.error('Error fetching reservations:', error); // Log error
    throw error; // Rethrow the error to be handled by Redux Toolkit
  }
});

export const deleteCmd = createAsyncThunk('cmdClientSlice/deleteCmd', async (id) => {
  try {
    await  ClientApi.getCsrfToken();
    await axiosClient.delete(`http://localhost:8000/api/commandes/${id}`);
    
    return id; // Return the deleted id to filter it out from the state
  } catch (error) {
    console.log(error);
  }
});

export const addCmd = createAsyncThunk('cmdClientSlice/addCmd', async (commandData) => {
  try {
    await ClientApi.getCsrfToken();
    const res = await axiosClient.post('http://localhost:8000/api/commandes', commandData);
    await alert(" your commande is add success ")
    return res.data;
  } catch (error) {
    console.error('Error adding command:', error);
    throw error; // Rethrow the error to be handled by Redux Toolkit
  }
});



const iniState = {
  Cmds : [],
  loading : true ,
  error : false

}

const CmdRClientSlice = createSlice({
  name : "cmdClientSlice",
  initialState : iniState,
  reducers : {},
  extraReducers: (builder)=>{
    builder.addCase(getAllCmdClient.pending,(state)=>{
      // console.log("pending");
      state.loading = true ;
      state.error = false ; 
    }).addCase(getAllCmdClient.fulfilled,(state,action)=>{
      state.loading = false ;
      state.Cmds= action.payload ;
      state.error = false ; 
    }).addCase(getAllCmdClient.rejected,(state)=>{
      console.log("error");
      state.loading = false  ;
      state.error = true ;
    })

    .addCase(deleteCmd.fulfilled, (state, action) => {
      state.Cmds = state.Cmds.filter(cmd => cmd.id !== action.payload);
    })
    .addCase(addCmd.fulfilled, (state, action) => {
      state.Cmds.push(action.payload);
    });

    
  }
})

export default CmdRClientSlice.reducer ; 
