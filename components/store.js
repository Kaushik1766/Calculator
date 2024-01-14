import { configureStore } from "@reduxjs/toolkit";
import inputReducer from './features/inputSlice'
export default configureStore({
    reducer: {
        input: inputReducer,
    },
})