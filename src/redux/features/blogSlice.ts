import { createSlice } from "@reduxjs/toolkit";
import { Blog } from "../../interfaces/Blog";
import { InitialState } from "../../interfaces/InitialState";


const initialState:InitialState = {
    blogs: <Blog[]>{},
    myBlogs: <Blog[]>{},
    savedBlogs: <Blog[]>[],
    usersList: []
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
      setAllBlogs: (state, action) => {
        state.blogs = action.payload
      }, 
      setMyBlogs: (state, action) => {
        state.myBlogs = action.payload
      },
      clearBlogs: (state) => {
        state.blogs = [];
        state.myBlogs = [];
      },
      saveBlogs: (state, action) => {
        state.savedBlogs = action.payload;
      },  
      logout: (state) => {
        state.blogs = []
      }
    }
})

export const {setAllBlogs, setMyBlogs, clearBlogs, saveBlogs} = blogSlice.actions;
export default blogSlice.reducer;

