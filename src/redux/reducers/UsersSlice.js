import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosClient } from "../axios";

export const getAllUsers = createAsyncThunk('usersSlice/getAllUsers',async()=>{
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/users");
    console.log(res.data.users);
    return res.data.users;
    
  } catch (error) {
    console.log(error)
  }
})

// Thunk to delete a user by ID
export const deleteUser = createAsyncThunk('usersSlice/deleteUser', async (id) => {
  try {
    // await ClientApi.getCsrfToken();
    const rep = await axiosClient.delete(`http://placeandalosia.free.nf/api/users/${id}`);
    console.log('Delete response:', rep.data);
    return id;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
//update user 
// Update user async thunk
// export const updateUser = createAsyncThunk('usersSlice/updateUser', async (userData) => {
//   try {
//     await axiosClient.get('/sanctum/csrf-cookie');
//     const formData = new FormData();
    
//     for (const key in userData) {
//       formData.append(key, userData[key]);
//     }

//     const response = await axiosClient.put(`http://placeandalosia.free.nf/api/users/${userData.id}`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     console.log('Update response:', response.data);
//     return response.data.user;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// });

export const updateUser = createAsyncThunk('usersSlice/updateUser',async ({ id, userData }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('name2', userData.name2);
      formData.append('email', userData.email);
      formData.append('password', userData.password);
      formData.append('phoneNumber', userData.phoneNumber);
      formData.append('address1', userData.address1);
      if (userData.image) {
        formData.append('image', userData.image);
      }
      await axiosClient.get('/sanctum/csrf-cookie');
      const response = await axiosClient.put(`http://placeandalosia.free.nf/api/users/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.user;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const iniState = {
  Users : [],
  loading : true ,
  error : false

}

const UsersSlice = createSlice({
  name : "usersSlice",
  initialState : iniState,
  reducers : {},
  extraReducers: (builder)=>{
    builder.addCase(getAllUsers.pending,(state)=>{
      console.log("pending");
      state.loading = true ;
      state.error = false ; 
    }).addCase(getAllUsers.fulfilled,(state,action)=>{
      state.loading = false ;
      state.Users= action.payload ;
      state.error = false ; 
    }).addCase(getAllUsers.rejected,(state)=>{
      console.log("error");
      state.loading = false  ;
      state.error = true ;
    })

        // deleteUser
        builder.addCase(deleteUser.pending, (state) => {
          console.log("delete pending");
          state.loading = true;
          state.error = false;
        }).addCase(deleteUser.fulfilled, (state, action) => {
          console.log("delete fulfilled");
          state.loading = false;
          state.Users = state.Users.filter(user => user.id !== action.payload);
          state.error = false;
        }).addCase(deleteUser.rejected, (state) => {
          console.log("delete error");
          state.loading = false;
          state.error = true;
        })

        .addCase(updateUser.fulfilled, (state, action) => {
          if (state.Users) {
            const index = state.Users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
              state.Users[index] = action.payload;
            } else {
              console.error('User not found in state');
            }
          } else {
            console.error('State.users is undefined');
          }
        })
        .addCase(updateUser.rejected, (state, action) => {
          state.error = action.error.message;
        });
  }
})

export default UsersSlice.reducer ; 
