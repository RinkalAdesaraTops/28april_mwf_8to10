import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import CrudReducer from './CrudReducer'
const CrudStore = configureStore({
  reducer:{
    User:CrudReducer
  }
})

export default CrudStore
