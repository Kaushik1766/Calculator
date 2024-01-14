import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name: 'input',
    initialState: {
        value: '0',
    },
    reducers: {
        inputValue: (state, action) => {
            state.value += action.payload
        },
        inputV: (state) => {
            state.value = 'V'
        }
    }
})

export const { inputValue } = inputSlice.actions
export default inputSlice.reducer