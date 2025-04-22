// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { ClientApi } from "../../service/Api/Client/ClientApi";
// import { axiosClient } from "../axios";

// export const getAllTable = createAsyncThunk('tablesSlice/getAllTable',async(arg)=>{
//   try {
//     const res = await axios.get("http://placeandalosia.free.nf/api/tables");
//     console.log(res.data);
//     return res.data;
    
//   } catch (error) {
//     console.log(error)
//   }
// })
// export const addTable = createAsyncThunk('tablesSlice/addTable', async (formData) => {
//   try {
//     await ClientApi.getCsrfToken();
//     const res = await axiosClient.post("http://placeandalosia.free.nf/api/tables", formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     return res.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// });

// export const deleteTable = createAsyncThunk('tablesSlice/deleteTable', async (id) => {
//   try {
//     const rep = await axiosClient.delete(`http://placeandalosia.free.nf/api/tables/${id}`);
//     console.log('Delete response:', rep.data);
//     return id;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// });

// const iniState = {
//   Tables : [],
//   loading : true ,
//   error : false

// }

// const TablesSlice = createSlice({
//   name : "tablesSlice",
//   initialState : iniState,
//   reducers : {},
//   extraReducers: (builder)=>{
//     builder.addCase(getAllTable.pending,(state)=>{
//       console.log("pending");
//       state.loading = true ;
//       state.error = false ; 
//     }).addCase(getAllTable.fulfilled,(state,action)=>{
//       state.loading = false ;
//       state.Tables= action.payload ;
//       state.error = false ; 
//     }).addCase(getAllTable.rejected,(state)=>{
//       console.log("error");
//       state.loading = false  ;
//       state.error = true ;
//     })
//     .addCase(addTable.pending, (state) => {
//       console.log("adding table pending");
//       state.loading = true;
//       state.error = false;
//     })
//     .addCase(addTable.fulfilled, (state, action) => {
//       state.loading = false;
//       state.Tables.push(action.payload);
//       state.error = false;
//     })
//     .addCase(addTable.rejected, (state) => {
//       console.log("adding table error");
//       state.loading = false;
//       state.error = true;
//     })
//     .addCase(deleteTable.fulfilled, (state, action) => {
//       console.log("Delete fulfilled:", action.payload); // Log delete action payload
//       state.Tables = state.Tables.filter(table => table.id !== action.payload);
//     })
//     .addCase(deleteTable.rejected, (state, action) => {
//       console.error('Error deleting table:', action.payload);
//     })
//   }
// })

// export default TablesSlice.reducer ; 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosClient } from "../axios";
import { ClientApi } from "../../service/Api/Client/ClientApi";

export const getAllTable = createAsyncThunk('tablesSlice/getAllTables', async () => {
  try {
    const res = await axios.get("http://placeandalosia.free.nf/api/tables");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const addTable = createAsyncThunk('tablesSlice/addTable', async (formData) => {
  try {
    await ClientApi.getCsrfToken();
    const res = await axiosClient.post("http://placeandalosia.free.nf/api/tables", formData, {
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

export const deleteTable = createAsyncThunk('tablesSlice/deleteTable', async (id) => {
  try {
    const rep = await axiosClient.delete(`http://placeandalosia.free.nf/api/tables/${id}`);
    console.log('Delete response:', rep.data);
    return id;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const iniState = {
  Tables: [],
  loading: true,
  error: false
};

const TablesSlice = createSlice({
  name: "tablesSlice",
  initialState: iniState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTable.pending, (state) => {
      console.log("pending");
      state.loading = true;
      state.error = false;
    }).addCase(getAllTable.fulfilled, (state, action) => {
      state.loading = false;
      state.Tables = action.payload;
      state.error = false;
    }).addCase(getAllTable.rejected, (state) => {
      console.log("error");
      state.loading = false;
      state.error = true;
    })
    .addCase(addTable.pending, (state) => {
      console.log("adding table pending");
      state.loading = true;
      state.error = false;
    })
    .addCase(addTable.fulfilled, (state, action) => {
      state.loading = false;
      state.Tables.push(action.payload);
      state.error = false;
    })
    .addCase(addTable.rejected, (state) => {
      console.log("adding table error");
      state.loading = false;
      state.error = true;
    })
    .addCase(deleteTable.fulfilled, (state, action) => {
      console.log("Delete fulfilled:", action.payload); // Log delete action payload
      state.Tables = state.Tables.filter(table => table.id !== action.payload);
    })
    .addCase(deleteTable.rejected, (state, action) => {
      console.error('Error deleting table:', action.payload);
    });
  }
});

export default TablesSlice.reducer;
