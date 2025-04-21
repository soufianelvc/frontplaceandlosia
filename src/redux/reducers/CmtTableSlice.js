import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ClientApi } from "../../service/Api/Client/ClientApi";
import { axiosClient } from "../axios";

// Fetch all comments for a specific table
export const getAllCommentairesTable = createAsyncThunk('commentairesTableSlice/getAllCommentairesTable',
  async (id) => {
    try {
      const res = await axiosClient.get(`http://localhost:8000/api/commentaireTables/restaurant/${id}`);
      return res.data;
    } catch (error) {
      console.error('Error fetching commentaires:', error); 
      throw error; 
    }
  }
);

// Add a new comment for a specific table
export const addCommentaireTable = createAsyncThunk('commentairesTableSlice/addCommentaireTable',
  async (commentData) => {
    try {
      await ClientApi.getCsrfToken();
      const res = await axiosClient.post(`http://localhost:8000/api/commentaireTables`, commentData);
      console.log('Server response:', res.data); 
      return res.data;
    } catch (error) {
      console.error('Error adding commentaire:', error); 
      throw error; 
    }
  }
);

const iniState = {
  CommentairesTable: [],
  loading: true,
  error: false
}

const CmtTableSlice = createSlice({
  name: "commentairesTableSlice",
  initialState: iniState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCommentairesTable.pending, (state) => {
      console.log("pending");
      state.loading = true;
      state.error = false;
    })
    .addCase(getAllCommentairesTable.fulfilled, (state, action) => {
      state.loading = false;
      state.CommentairesTable = action.payload;
      state.error = false;
    })
    .addCase(getAllCommentairesTable.rejected, (state) => {
      console.log("error");
      state.loading = false;
      state.error = true;
    })

    .addCase(addCommentaireTable.pending, (state) => {
      console.log("adding comment pending");
    })
    .addCase(addCommentaireTable.fulfilled, (state, action) => {
      console.log("adding comment fulfilled");
      state.CommentairesTable.push(action.payload);
    })
    .addCase(addCommentaireTable.rejected, (state) => {
      console.log("adding comment error");
    })
  }
})

export default CmtTableSlice.reducer;
