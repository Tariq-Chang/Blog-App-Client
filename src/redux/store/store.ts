import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "../features/userSlice";
import blogSlice from "../features/blogSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  blogs: blogSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({reducer: persistedReducer});
export let persistor = persistStore(store);

