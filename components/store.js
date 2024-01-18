import { configureStore } from "@reduxjs/toolkit";
import historyArray from './features/historyArray'
import inputQueue from "./features/inputQueue";
export default configureStore({
    reducer: {
        historyArray: historyArray,
        inputQueue: inputQueue,
    },
})