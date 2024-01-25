import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/User";
import { InitialState } from "../../interfaces/InitialState";

const initialState:InitialState = {
    activeUser: <User>{}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setCurrentUser: (state, action) => {
        state.activeUser = action.payload;
      },
      setCurrentUserProfilePhoto: (state, action) => {
        state.activeUser.profile.avatar = action.payload;
      },
      logout: (state) => {
        state.activeUser = {}
      }   
    }
})

export const {setCurrentUser, setCurrentUserProfilePhoto,logout} = userSlice.actions;
export default userSlice.reducer;

