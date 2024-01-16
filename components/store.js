import { configureStore } from "@reduxjs/toolkit";
import inputReducer from './features/inputSlice'
import inputQueue from "./features/inputQueue";
export default configureStore({
    reducer: {
        input: inputReducer,
        inputQueue: inputQueue,
    },
})