import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name: 'input',
    initialState: {
        value: '',
    },
    reducers: {
        inputValue: (state, action) => {
            state.value += action.payload
        },
        resetValue: (state) => {
            state.value = ''
        },
    }
})

export const { inputValue, resetValue } = inputSlice.actions
export default inputSlice.reducer