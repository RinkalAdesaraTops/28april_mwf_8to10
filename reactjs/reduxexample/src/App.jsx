import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComponent from './CounterComponent'
import UserComponent from './UserComponent'
import RtkCounterComponent from './RtkCounterComponent'
import CrudComponent from './CrudComponent'

function App() {
  return (
   <>
    <h3>Redux Example</h3>
    {/* <CounterComponent /> */}
    {/* <UserComponent /> */}
    {/* <RtkCounterComponent /> */}
    <CrudComponent />
   </>
  )
}

export default App
