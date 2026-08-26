import { configureStore } from "@reduxjs/toolkit";
import planReducer from './slices/planSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
    reducer:{
        plan:planReducer,
        auth:authReducer,
    }
})