import { createSlice } from "@reduxjs/toolkit";

export const inputQueue = createSlice({
    name: 'inputQueue',
    initialState: {
        value: '',
    },
    reducers: {
        add: (state, action) => {
            state.value += action.payload
        },
        push: (state, action) => {
            let lastElement = state.value[state.value.length - 2]
            if ((lastElement == '+' || lastElement == '-' || lastElement == 'X' || lastElement == '/' || lastElement == '%') && (action.payload == '+,' || action.payload == '-,' || action.payload == 'X,' || action.payload == '/,' || action.payload == '%,')) {
                return
            }
            state.value += ',' + action.payload
        },
        backspace: state => {
            let lastElement = state.value[state.value.length - 2]
            if (lastElement == ',') {
                state.value = state.value.slice(0, state.value.length - 2)
            }
            else if (lastElement == '+' || lastElement == '-' || lastElement == 'X' || lastElement == '/' || lastElement == '%') {
                state.value = state.value.slice(0, state.value.length - 3)
            }
            else {
                state.value = state.value.slice(0, state.value.length - 1)
            }
        },
        clear: state => {
            state.value = ''
        }
    }
})

export const { add, backspace, clear, push } = inputQueue.actions
export default inputQueue.reducer