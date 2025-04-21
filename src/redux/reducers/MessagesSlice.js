import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ClientApi } from '../../service/Api/Client/ClientApi';
import { axiosClient } from '../axios';

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const response = await axios.get('http://localhost:8000/api/messages');
  return response.data;
});

export const addMessage = createAsyncThunk('messages/addMessage', async (newMessage) => {
  await ClientApi.getCsrfToken();
  const response = await axiosClient.post('http://localhost:8000/api/messages', newMessage);
  return response.data;
});

const MessagesSlice = createSlice({
  name: 'messages',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default MessagesSlice.reducer;