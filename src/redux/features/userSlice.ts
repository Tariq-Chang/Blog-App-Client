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
      }   
    }
})

export const {setCurrentUser} = userSlice.actions;
export default userSlice.reducer;

