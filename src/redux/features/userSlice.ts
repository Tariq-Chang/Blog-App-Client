import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/User";
import { InitialState } from "../../interfaces/InitialState";

const initialState:InitialState = {
  activeUser: <User>{},
  savedBlogs: [],
  usersList:[]
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setCurrentUser: (state, action) => {
        state.activeUser = action.payload;
      },
      setCurrentUserProfilePhoto: (state, action) => {
        if(state.activeUser?.profile)
          state.activeUser.profile.avatar = action.payload;
      },
      setAllUsers: (state, action) => {
        state.usersList = action.payload;
      },
      logout: (state) => {
        state.activeUser = {}
      }   
    }
})

export const {setCurrentUser, setCurrentUserProfilePhoto,setAllUsers,logout} = userSlice.actions;
export default userSlice.reducer;

