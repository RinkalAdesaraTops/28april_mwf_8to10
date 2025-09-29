import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../Rtk/CounterReducer'

const CounterStore = configureStore({
    reducer:{
        counter:CounterReducer
    }
})

export default CounterStore
