
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//Async thunk

export const fetchusers=createAsyncThunk('users/fetchusers',async()=>{
    const response=await fetch(`https://jsonplaceholder.typicode.com/users`);
    return response.json();
})

const userSlice=createSlice({
    name:"users",
     initialState:{
          data:[],
          loading:false,
          error:null,

     },

     extraReducers:builder=>{
        builder.addCase(fetchusers.pending,state=>{
            state.loading=true;//start loading

        })
        .addCase(fetchusers.fulfilled,(state,action)=>{
          state.loading=false;
          state.data=action.payload
        }).addCase(fetchusers.rejected,(state,action)=>{
            (state.loading=false),(state.error=action.error.message)

        })
     }
});

export default userSlice.reducer