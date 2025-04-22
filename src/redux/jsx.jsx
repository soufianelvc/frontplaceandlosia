import { configureStore, createSlice } from "@reduxjs/toolkit"

export const getClientById = createAsyncThunk('HotelSlice/getClientById', async (id) => {
  try {
    const response = await axiosClient.get(`http://placeandalosia.free.nf/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initlState ={
  db:[{
      "IdHotel":"h1",
      "Nom_Hotel":"Farah Inn",
      "Description":"Situe a iramehjbdj",
      "ville":"ifrane",
      "image":"image.jpg",
      "Commentaires":['cool','nice'],
      "Like":90,
      "Dislike":5}
  ],
  loading : true ,
  error : false ,
  client : []
}
const HotelSlice = createSlice({
  name = "hotel",
  initialState : initlState ,
  reducers : {
//Add in intial state new line 
    AddComment : (st,act)=>{
      const {hotelId ,comment} = act.payload;
      const ht = st.db.find(h=>h.IdHotel ==hotelId )    
      ht.comment.inshift(comment);
    },
//Add ond dislike
    AddComment : (st,act)=>{
      const {hotelId } = act.payload;
      const ht = st.db.find(h=>h.IdHotel ==hotelId )    
      ht.Dislike ++;
    },
    
  },
  // status of function getClientById
  extraReducers: (builder)=>{
    builder.addCase(getClientById.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(getClientById.fulfilled, (state, action) => {
        state.Client= action.payload;
        state.error = false;
        state.loading = false;
    })
    .addCase(getClientById.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  }
})

//configuration de store 
const store = configureStore({
  reducer : {
    hoteldata : HotelSlice
  }
})
