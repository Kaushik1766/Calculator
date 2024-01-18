import { createSlice } from "@reduxjs/toolkit";

export const historyArray = createSlice({
    name: 'historyArray',
    initialState: {
        value: [],
    },
    reducers: {
        addHistory: (state, action) => {
            // console.log(action.payload);
            // state.value.push(action.pay)
            if (state.value.length > 10) {
                state.value = state.value.slice(1)
                state.value.push(action.payload)
            }
            else {
                state.value.push(action.payload)
            }
        },
        resetValue: (state) => {
            state.value = ''
        },
    }
})

export const { addHistory, resetValue } = historyArray.actions
export default historyArray.reducer