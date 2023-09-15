import { createSlice } from "@reduxjs/toolkit";
import { Blog } from "../../interfaces/Blog";
import { InitialState } from "../../interfaces/InitialState";


const initialState:InitialState = {
    blogs: <Blog[]>{}
}

const blogSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setBlogs: (state, action) => {
        state.blogs = action.payload
      },   
      logout: (state) => {
        state.blogs = []
      }
    }
})

export const {setBlogs} = blogSlice.actions;
export default blogSlice.reducer;

