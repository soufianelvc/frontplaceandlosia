import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct = createAsyncThunk('prdSlice/getAllProduct',async()=>{
  try {
    const res = await axios.get("http://placeandalosia.free.nf/api/repas");
    console.log(res.data);
    return res.data;
    
  } catch (error) {
    console.log(error)
  }
})

const iniState = {
  Products : [],
  loading : true ,
  error : false

}

const ProductSlice = createSlice({
  name : "prdSlice",
  initialState : iniState,
  reducers : {},
  extraReducers: (builder)=>{
    builder.addCase(getAllProduct.pending,(state)=>{
      console.log("pending");
      state.loading = true ;
      state.error = false ; 
    }).addCase(getAllProduct.fulfilled,(state,action)=>{
      state.loading = false ;
      state.Products= action.payload ;
      state.error = false ; 
    }).addCase(getAllProduct.rejected,(state)=>{
      console.log("error");
      state.loading = false  ;
      state.error = true ;
    })
  }
})

export default ProductSlice.reducer ; 
