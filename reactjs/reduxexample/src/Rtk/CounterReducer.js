import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = {
    count:0
}
const CounterReducer = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count += 1
        },
        decrement:(state)=>{
            state.count -= 1
        }
    }
})
export const {increment,decrement} = CounterReducer.actions
export default CounterReducer.reducer
