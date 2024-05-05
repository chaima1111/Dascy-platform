import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../authfeatures/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});