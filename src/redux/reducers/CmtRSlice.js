import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ClientApi } from "../../service/Api/Client/ClientApi";
import { axiosClient } from "../axios";

export const getAllCommentairesRoom= createAsyncThunk('commetairesRoomSlice/getAllCommentairesRoom',
 async (id) => {
  try {
    const res = await axios.get(`http://placeandalosia.free.nf/api/chambrecommentaires/${id}`);
  
    return res.data;
  } catch (error) {
    console.error('Error fetching commentaires:', error); 
    throw error; 
  }
});
export const addCommentaireRoom = createAsyncThunk('commetairesRoomSlice/addCommentaireRoom',
  async (commentData) => {
    try {
      await  ClientApi.getCsrfToken();
      const res = await axiosClient.post(`http://placeandalosia.free.nf/api/commentaires`, commentData);
      console.log('Server response:', res.data); 
      return res.data;
    } catch (error) {
      console.error('Error adding commentaire:', error); 
      throw error; 
    }
  }
);

const iniState = {
  CommentairesRoom : [],
  loading : true ,
  error : false

}

const CmtRSlice = createSlice({
  name : "commetairesRoomSlice",
  initialState : iniState,
  reducers : {},
  extraReducers: (builder)=>{
    builder.addCase(getAllCommentairesRoom.pending,(state)=>{
      console.log("pending");
      state.loading = true ;
      state.error = false ; 
    }).addCase(getAllCommentairesRoom.fulfilled,(state,action)=>{
      state.loading = false ;
      state.CommentairesRoom= action.payload ;
      state.error = false ; 
    }).addCase(getAllCommentairesRoom.rejected,(state)=>{
      console.log("error");
      state.loading = false  ;
      state.error = true ;
    })

    .addCase(addCommentaireRoom.pending, (state) => {
      console.log("adding comment pending");
    })
    .addCase(addCommentaireRoom.fulfilled, (state, action) => {
      console.log("adding comment fulfilled");
      state.CommentairesRoom.push(action.payload);

    })
    .addCase(addCommentaireRoom.rejected, (state) => {
      console.log("adding comment error");
    })
  }
})

export default CmtRSlice.reducer ; 
