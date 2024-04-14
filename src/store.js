import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from './features/cart/cartSlice';
import userReducer from './features/user/userSlice';
import jobReducer from './features/job/jobSlice';
import allJobsReducer from './features/allJobs/allJobsSlice';

export const store = configureStore({
  reducer: {
    // cartState: cartReducer,
    user: userReducer,
    job: jobReducer,
    allJobs: allJobsReducer
  }
})