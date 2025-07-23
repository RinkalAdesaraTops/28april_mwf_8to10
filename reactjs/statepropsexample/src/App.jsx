import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComponent from './CounterComponent'
import StateExample from './StateExample'
import LifecycleClass from './LifecycleClass'
import LIfecycleFunction from './LIfecycleFunction'

function App() {
  let name="Test"
  let age=25

  return (
    <>
      <p>Project created in Vite</p>
      {/* <CounterComponent myname={name} myage={age} count={10} /> */}
      {/* <StateExample /> */}
      {/* <LifecycleClass mysalary="25000"/> */}
      <LIfecycleFunction />
    </>
  )
}

export default App
